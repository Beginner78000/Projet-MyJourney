const destinationController = require('./destination');
const quizController = require('./quiz');
const userController = require('./user');
const accountController = require('./account');
const adminController = require('./admin');
const forumController = require('./forum');

const apiController = {
    /**
     * Default API controller to show documention url.
     * ExpressMiddleware signature
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @returns {string} Route API JSON response
     */
    home(req, res) {
        const fullUrl = `${req.protocol}://${req.get('host')}`;
        return res.json({
            documentation_url: `${fullUrl}${process.env.API_DOCUMENTATION_ROUTE}`,
        });
    },
};

module.exports = {
    apiController,
    userController,
    destinationController,
    quizController,
    accountController,
    adminController,
    forumController,
};
