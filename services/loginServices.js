const { Users } = require('../models');
const validateLogin = require('../validates/validateLogin');
const getError = require('../helpers/getError');
const jwtGenerate = require('../helpers/jwtGenerate');

const getEmailPassword = async (data) => {
  const userExists = await Users.findOne({ where: 
    { email: data.email, password: data.password },
  });
  return userExists;
};

const login = async (loginData) => {
  const { error } = validateLogin.validate(loginData);
  if (error) throw getError(400, error.message);

  if (await getEmailPassword(loginData)) {
    const { id } = await getEmailPassword(loginData);
    const token = jwtGenerate({ id });
    return token;
  }

  throw getError(400, 'Invalid fields');
};

module.exports = {
  login,
};
