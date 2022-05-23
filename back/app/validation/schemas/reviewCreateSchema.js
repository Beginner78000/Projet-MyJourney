const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    rating: Joi.number().integer().positive().max(5),
}).min(1).required();
