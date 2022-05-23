const debug = require('debug')('Validator:log');
const { ApiError } = require('../helpers/errorHandler');

/**
 * Middleware generator for validation
 * of an object of one of the request properties
 * @param {string} prop - Name of the property of the request object to validate
 * @param {Joi.object} schema - The Joi module validation scheme
 * @returns {Function} -
 * Returns a middleware for express that validates
 * the body of the request using the schema passed as a parameter.
 * Returns a 400 error if validation fails.
 */
module.exports = (prop, schema) => async (request, _, next) => {
    try {

        debug(request[prop]);
        await schema.validateAsync(request[prop]);
        next();
    } catch (error) {

        next(new ApiError(error.details[0].message, { statusCode: 400 }));
    }
};
