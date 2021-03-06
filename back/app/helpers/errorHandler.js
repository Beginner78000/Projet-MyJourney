/**
  * We set up an error handler, in the form of a middleware,
  * who will be responsible for responding to the user
  * in case of passing an error to the next() function
 */
const logger = require('./logger');
const ApiError = require('../errors/apiError');
const WebsiteError = require('../errors/websiteErrors');

/**
 * Middleware that respond to a next method with an error as argument
 * @param {object} err Error class
 * @param {object} res Express response object
 */
const errorHandler = (err, res) => {
    let { message } = err;
    let statusCode = err.infos?.statusCode;

    if (!statusCode || Number.isNaN(Number(statusCode))) {
        statusCode = 500;
    }

    if (statusCode === 500) {
        logger.error(err);
    }

    if (statusCode === 500 && res.app.get('env') !== 'development') {
        message = 'Internal Server Error';
    }

    if (res.get('Content-type').includes('html')) {
        res.status(statusCode).render('error', {
            statusCode,
            message,
            title: `Error ${err.statusCode}`,
        });
    } else {
        res.status(statusCode).json({
            status: 'error',
            statusCode,
            message,
        });
    }
};

module.exports = {
    ApiError,
    WebsiteError,
    errorHandler,
};
