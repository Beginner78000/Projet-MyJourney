require('dotenv').config();
const axios = require('axios');
const destinationDataMapper = require('../../models/destination');
const { ApiError } = require('../../helpers/errorHandler');
const Amadeus = require('amadeus');
/**
 * Callback to find or filter which identifies the countries or continents that match the chain
 * of research send by the Front.
 *
 * The function returns a value of true if  :
 *          - searchQuery PARTIALLY matches the continent name
 *          - OR searchQuery EXACTLY matches one of the country
 *          - OR searchQuery EXACTLY matches one of the cities (destinations)
 *
 * @param {string} continent - The continent name
 * @param {string []} countryName - The countries of a same continent
 * @param {string []} cityName - The cities of a same country
 * @param {string} searchQuery - The search string of the user in LOWERCASE
 */
const searchDestination = (continent, countryName, cityName, searchQuery) => {
    // Si continent est partiellement égal à searchQuery (includes) /// =>  alors vrai
    if (continent.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1) {
        // SINON Si searchQuery est égal à un des countryName
        if (countryName.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1) {
            // SINON Si searchQuery est égal à un des cityName
            if (cityName.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1) {
                return false;
            }
        }
    }
    // SINON FAUX
    return true;
};
module.exports = {
    /**
     * Destination controller to get a destination.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getOne(req, res) {
        const destination = await destinationDataMapper.findByPk(req.params.id);
        if (!destination) {
            throw new ApiError('Destination not found', { statusCode: 404 });
        }
        return res.json(destination);
    },
    /**
     * To retrieve a continent, a country or a city from the DB
     * @param {string} city_name - The name of the city
     * @param {string} country - The name of the country
     * @param {string} continent - The name of the continent
     * @returns {Destination[]} - The result of the search
     */
    async search(req, res) {
        const searchQuery = req.query.search;
        const destinations = await destinationDataMapper.findAll();
        console.log('avant requete');
        const result = destinations.filter((destination) =>
            searchDestination(
                destination.continent,
                destination.country,
                destination.city_name,
                searchQuery,
            ),
        );
        console.log('apres requete');
        return res.json(result);
    },
    /**
     * Retrieve destination by country name
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {Destination} - The list of the destinations with the same country name in the DB
     */
    async getDestinationByCountry(_, res) {
        const results = await destinationDataMapper.findCountry();
        if (!results) {
            throw new ApiError('Country not found', { statusCode: 404 });
        }
        return res.json(results);
    },
    /**
     * Retrieve country by continent
     * @param {object} req Express request object (not used)
     * @param {object} res Express response object
     * @returns {Destination} - The list of the country ordered by continent in the DB
     */
    async getCountriesByContinent(_, res) {
        const continents = await destinationDataMapper.findCountriesByContinent();
        if (!continents) {
            throw new ApiError('Continent not found', { statusCode: 404 });
        }
        return res.json(continents);
    },
    /**
     * Destination controller to get activities by destination.
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getActivitiesByDestination(req, res) {
        const destination = await destinationDataMapper.findByPk(req.params.id);
        if (!destination) {
            throw new ApiError('Destination not found', { statusCode: 404 });
        }

        const amadeus = new Amadeus({
            clientId: process.env.AMADEUS_CLIENT_ID,
            clientSecret: process.env.AMADEUS_CLIENT_SECRET,
        });
        await amadeus.shopping.activities
            .get({
                latitude: destination.latitude,
                longitude: destination.longitude,
            })
            .then((response) => res.json(response.data))
            .catch((response) => {
                console.error(response);
            });
    },
    /**
     * Destination controller to get activities by destination.
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getHotelsByDestination(req, res) {
        const destination = await destinationDataMapper.findByPk(req.params.id);
        if (!destination) {
            throw new ApiError('Destination not found', { statusCode: 404 });
        }
        const {
            data: { data },
        } = await axios.get(`https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng`, {
            params: {
                latitude: destination.latitude,
                longitude: destination.longitude,
            },
            headers: {
                'x-rapidapi-key': process.env.TRAVEL_ADVISOR_API_KEY,
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });
        return res.json(data);
    },
    /**
     * Destination controller to get activities by destination.
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getRestaurantsByDestination(req, res) {
        const destination = await destinationDataMapper.findByPk(req.params.id);
        if (!destination) {
            throw new ApiError('Destination not found', { statusCode: 404 });
        }
        const {
            data: { data },
        } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`, {
            params: {
                latitude: destination.latitude,
                longitude: destination.longitude,
            },
            headers: {
                'x-rapidapi-key': process.env.TRAVEL_ADVISOR_API_KEY,
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });
        return res.json(data);
    },
};
