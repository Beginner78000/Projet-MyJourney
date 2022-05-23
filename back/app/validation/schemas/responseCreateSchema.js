const Joi = require('joi');

module.exports = Joi.object({
    response: Joi.array(),
    question_id: Joi.number().integer().min(1).required(),
}).min(1).required();
