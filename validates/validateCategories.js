const Joi = require('joi');

const validateCategories = Joi.object().keys({
  name: Joi.string().required(),
});

module.exports = validateCategories;