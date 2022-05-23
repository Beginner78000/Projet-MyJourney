const client = require('../config/db');

/**
 * @typedef {object} Destination
 * @property {number} id - unique PK identifier
 * @property {String} city_name - Name of the city
 * @property {String} country - country name of the city
 * @property {String} city_code - IATA city code
 * @property {String} country_code - country code by alpha-2 (ISO 3166)
 * @property {String} continent - Continent of the destination
 * @property {String} latitude - latitude coordinate of the city
 * @property {String} longitude - longitude coordinate of the city
 * @property {JSON} landscape - landscape of the place
 * @property {JSON} season - season by 3 months with weather
 * @property {JSON} budget - Min budget needed for this destination
 * @property {String} history - short story of the city
 * @property {String} destination_visual - picture of the city
 */

/**
 * @typedef {Object} InputDestination
 * @property {String} city_name - Name of the city
 * @property {String} country - country name of the city
 * @property {String} city_code - IATA city code
 * @property {Stringg} country_code - country code by alpha-2 (ISO 3166)
 * @property {String} continent - Continent of the destination
 * @property {String} latitude - latitude coordinate of the city
 * @property {String} longitude - longitude coordinate of the city
 * @property {JSON} landscape - landscape of the place
 * @property {JSON} season - season by 3 months with weather
 * @property {JSON} budget - Min budget needed for this destination
 * @property {String} history - short story of the city
 * @property {String} destination_visual - picture of the city
 */

const dataMapper = {
    /**
     * Retrieves everything without filter or order
     * @returns {Destination[]} - All destinations in the database
     */
    async findAll() {
        const result = await client.query('SELECT * FROM destination');
        return result.rows;
    },

    /**
     * Retrieve by id
     * @param {number} destinationId - id of the desired destination
     * @returns {(Destination|undefined)} -
     * The desired destination or undefined if no destination with this id
     */
    async findByPk(destinationId) {
        const prepared = {
            text: 'SELECT * FROM destination WHERE id = $1',
            values: [destinationId],
        };
        const result = await client.query(prepared);

        if (result.rowCount === 0) {
            return undefined;
        }

        return result.rows[0];
    },

    /**
     * Retrieve several destinations by their id in a single request
     * @param {array<int>} destinationIds The list of ids for the destinations to retrieve
     */
    async findByIds(destinationIds) {
        const result = await client.query('SELECT * FROM destination WHERE id = ANY($1)', [
            destinationIds,
        ]);
        return result.rows;
    },

    /**
     * Add to database
     * @param {InputDestination} destination - The data to insert
     * @returns {Destination} - the insert destination
     */
    async insert(destination) {
        const savedDestination = await client.query(
            `
                INSERT INTO destination
                (city_name, country, city_code, country_code, continent,
                latitude, longitude, landscape, season, budget, history, destination_visual)
                VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *
            `,
            [
                destination.city_name,
                destination.country,
                destination.city_code,
                destination.country_code,
                destination.continent,
                destination.latitude,
                destination.longitude,
                destination.landscape,
                destination.season,
                destination.budget,
                destination.history,
                destination.destination_visual,
            ],
        );

        return savedDestination.rows[0];
    },

    /**
     * Edit in database
     * @param {number} id - id to edit
     * @param {InputDestination} destination - the data to edit
     * @returns {Destination} - The modified destination
     */
    async update(id, destination) {
        const fields = Object.keys(destination).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(destination);

        const savedDestination = await client.query(
            `
                UPDATE destination SET
                    ${fields}
                WHERE id = $${fields.length + 1}
                RETURNING *
            `,
            [...values, id],
        );

        return savedDestination.rows[0];
    },

    /**
     * Deletes from database
     * @param {number} id - id to delete
     * @returns {boolean} - The result of the deletion
     */
    async delete(id) {
        const result = await client.query('DELETE FROM destination WHERE id = $1', [id]);
        return !!result.rowCount;
    },

    /**
     * Retrieve destination by country
     * @param {String} country - name of the country
     * @returns {Destination[]} - The list of cities from the same country in the DB
     */
    async findByCountryName(country) {
        const result = await client.query(
            'SELECT city_name, country FROM destination WHERE LOWER(country) = LOWER($1)',
            [country],
        );
        return result.rows;
    },

    /**
     * Retrieve country by continent
     * @param {String} continent - name of the continent
     * @returns {Destination[]} - The list of countries order by continent in the DB
     */
    async findCountriesByContinent() {
        const result = await client.query(
            'SELECT continent, country FROM destination GROUP BY continent, country ORDER BY continent',
        );
        return result.rows;
    },

    /**
     * Edit in database
     * @param {String} landscape - name of landscape
     * @param {String} seasonperiod - name of seasonperiod
     * @param {String} seasontemperature - name of seasontemperature
     * @param {String} distance - name of distance
     * @param {String} budget - name of budget
     * @returns {Destination[]} - The list of countries find by quizz
     */
    async findDestinationsByResponses(
        landscape,
        seasonperiod,
        seasontemperature,
        distance,
        budget,
    ) {
        let season = 0;
        if (seasonperiod === 'dec-janv-fev') {
            season = 1;
        } else if (seasonperiod === 'mars-avril-mai') {
            season = 2;
        } else if (seasonperiod === 'juin-juil-aout') {
            season = 3;
        } else if (seasonperiod === 'sept-oct-nov') {
            season = 4;
        }
        let searchedArea = '';
        if (distance === 'france') {
            searchedArea = "AND country = 'France'";
        } else if (distance === 'europe') {
            searchedArea = "AND continent = 'Europe'";
        } else if (distance === 'autres') {
            searchedArea = "AND continent NOT LIKE 'Europe'";
        } else if (distance === 'peu importe') {
            searchedArea = '';
        }

        const result = await client.query(
            `SELECT * FROM destination
        WHERE $1 = ANY(landscape)
        AND season[2][${season}] = $2
        ${searchedArea}
        AND $3 = ANY(budget)`,
            [landscape, seasontemperature, budget],
        );

        return result.rows;
    },
};

module.exports = dataMapper;
