const Joi = require('joi');

const validateLogin = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = validateLogin;