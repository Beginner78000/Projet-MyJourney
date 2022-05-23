const Joi = require('joi');

module.exports = Joi.object({
    response: Joi.array(),
}).min(1).required();
