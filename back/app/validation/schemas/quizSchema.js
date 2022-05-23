const Joi = require('joi');

module.exports = Joi.array().items(Joi.string()).min(1).required();
