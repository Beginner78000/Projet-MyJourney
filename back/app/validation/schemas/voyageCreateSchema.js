const Joi = require('joi');

module.exports = Joi.object({
    destinationId: Joi.number(),
}).min(1).required();
