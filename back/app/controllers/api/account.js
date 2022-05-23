const { ApiError } = require('../../helpers/errorHandler');
const accountDataMapper = require('../../models/account');
const userDataMapper = require('../../models/user');

module.exports = {
    /**
     * User controller to acces the user's profile page.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async profilePage(req, res) {
        const userEmail = req.userData.user;
        const user = await userDataMapper.findByEmail(userEmail);
        const userId = user.id;

        if (!user) {
            return res.redirect('/api/users/login');
        }

        const result = await accountDataMapper.findProfilByUser(userId);
        return res.json(result);
    },

    /**
     * Account controller to get all quiz results register by a connected user.
     * ExpressMiddleware signature
     * @param {object} req Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getAllVoyages(req, res) {
        // debug('Data via Postgres');
        const userEmail = req.userData.user;
        const user = await userDataMapper.findByEmail(userEmail);
        const userId = user.id;

        const journey = await accountDataMapper.findAllVoyages(userId);
        return res.json(journey);
    },

    /**
     * Account controller to register the result of a quiz.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async registerVoyages(req, res) {
        const destinationsId = req.body;
        const userEmail = req.userData.user;
        const user = await userDataMapper.findByEmail(userEmail);
        const userId = user.id;
        const savedJourney = await accountDataMapper.insertVoyages(destinationsId, userId);
        return res.json(savedJourney);
    },

    /**
     * Account controller to delete a journey.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {object} Route API JSON response
     */
    async deleteVoyages(req, res) {
        const journeyId = req.params.id;
        const userEmail = req.userData.user;
        const user = await userDataMapper.findByEmail(userEmail);
        const userId = user.id;
        const journey = await accountDataMapper.findVoyagesByPk(journeyId, userId);
        if (!journey) {
            throw new ApiError('This journey does not exists', { statusCode: 404 });
        }

        const result = await accountDataMapper.deleteVoyagebyPK(journeyId);
        return res.status(204).json(result);
    },

    /**
     * Account controller to get all favoris register by a connected user.
     * ExpressMiddleware signature
     * @param {object} req Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getAllFavoris(req, res) {
        const userEmail = req.userData.user;
        const user = await userDataMapper.findByEmail(userEmail);
        const userId = user.id;
        const favoris = await accountDataMapper.findAllFavoris(userId);
        return res.json(favoris);
    },

    /**
     * Account controller to register a favoris.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async registerFavoris(req, res) {
        const favoris = req.body;
        const userEmail = req.userData.user;
        const user = await userDataMapper.findByEmail(userEmail);
        const userId = user.id;
        const savedFavoris = await accountDataMapper.insertFavoris(favoris, userId);
        return res.json(savedFavoris);
    },

    /**
     * Account controller to delete a favoris.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async deleteFavoris(req, res) {
        const { id } = req.params;
        const userEmail = req.userData.user;
        const user = await userDataMapper.findByEmail(userEmail);
        const userId = user.id;
        const favoris = await accountDataMapper.findFavorisByPk(id, userId);
        if (!favoris) {
            throw new ApiError('This favoris does not exists', { statusCode: 404 });
        }

        await accountDataMapper.deleteFavorisByPk(id);
        return res.status(204).json();
    },

    /**
     * Account controller to get all reviews written by a connected user.
     * ExpressMiddleware signature
     * @param {object} req Express request object (not used)
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async getAllReviews(_, res) {
        // debug('Data via Postgres');
        const reviews = await accountDataMapper.findAllReviews();
        return res.json(reviews);
    },

    /**
     * Account controller to register a review.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async registerReviews(req, res) {
        const savedReviews = await accountDataMapper.insertReviews(req.body);
        return res.json(savedReviews);
    },

    /**
     * Account controller to delete a review.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    async deleteReviews(req, res) {
        const id = req.params.id;

        const review = await accountDataMapper.findReviewsByPk(id);
        if (!review) {
            throw new ApiError('This review does not exists', { statusCode: 404 });
        }

        await accountDataMapper.delete(id);
        return res.status(204).json();
    },
};
