/**
  * We implement our own type of error.
  * This is called an exception
  * We take the opportunity to allow it to take
  * additional information: an HTTP status code
  * Instances will carry this info with them
  * and it can be used later
 * @typedef {object} ApiError
 * @property {string} status - Status
 * @property {number} statusCode - HTTP Status code
 * @property {string} message - Error message
 */
module.exports = class ApiError extends Error {
    constructor(message, infos) {
        super(message);
        this.infos = infos;
    }
};
