const Joi = require('joi');
const { joiPassword } = require('joi-password');

module.exports = Joi.object({
    username: Joi.string(),
    // firstname: Joi.string(),
    // lastname: Joi.string(),
    email: Joi.string().min(6).email(),
    password: joiPassword
                        .string()
                        .minOfSpecialCharacters(1)
                        .minOfLowercase(3)
                        .minOfUppercase(1)
                        .minOfNumeric(1)
                        .noWhiteSpaces()
                        .required(),
    passwordConfirm: Joi.string()
                        .required()
                        .valid(Joi.ref('password'))
                        .required()
                        // .options({ language: { any: { allowOnly: 'must match password' } }}),
    // role: Joi.string()
                    
}).required();


