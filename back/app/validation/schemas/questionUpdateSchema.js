const Joi = require('joi');

module.exports = Joi.object({
    question: Joi.string(),
}).min(1).required();
