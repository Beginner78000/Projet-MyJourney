const Joi = require('joi');
const { joiPassword } = require('joi-password');

module.exports = Joi.object({
    email: Joi.string().min(6).email().required(),
    password: joiPassword
                        .string()
                        .minOfSpecialCharacters(1)
                        .minOfLowercase(3)
                        .minOfUppercase(1)
                        .minOfNumeric(1)
                        .noWhiteSpaces()
                        .required(),
}).required();
