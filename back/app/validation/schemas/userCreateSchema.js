const Joi = require('joi');

module.exports = Joi.object({
    username: Joi.string(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string().min(6).email(),
    password: Joi.string().min(6),
    passwordConfirm: Joi.string().min(6),
    role: Joi.string()
}).min(1).required();
