/**
 * Controller wrapper to manage errors
 * @param {object} controller a controller to execute inside a try… catch… block
 * @returns {object} a controller as middleware function
 */

const ApiError = require('../errors/apiError');

module.exports = (controllerMethod) => async (req, res, next) => {
    try {
        await controllerMethod(req, res, next);
    } catch (err) {
        next(new ApiError(err.message, { statusCode: 500 }));
    }
};
