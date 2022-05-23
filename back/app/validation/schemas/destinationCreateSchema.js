const Joi = require('joi');

module.exports = Joi.object({
    city_name: Joi.string(),
    country: Joi.string(),
    city_code: Joi.string(),
    country_code: Joi.string(),
    continent: Joi.string(),
    latitude: Joi.string(),
    longitude: Joi.string(),
    landscape: Joi.array(),
    season: Joi.object(),
    budget: Joi.array(),
    history: Joi.string(),
    destination_visual: Joi.string()
}).min(1).required();
