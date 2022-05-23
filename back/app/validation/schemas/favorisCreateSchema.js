const Joi = require('joi');

module.exports = Joi.object({
    href: Joi.string(),
}).min(1).required();
