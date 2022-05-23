const Joi = require('joi');

module.exports = Joi.object({
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6),
}).required();
