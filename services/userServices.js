const { Users } = require('../models');
const validateUser = require('../validates/validateUser');
const getError = require('../helpers/getError');
const jwt = require('../helpers/token');

const getEmail = async (email) => {
  const emailExists = await Users.findOne({ where: { email } });
  return emailExists;
};

const create = async (userData) => {
  const { error } = validateUser.validate(userData);
  if (error) throw getError(400, error.message);

  if (await getEmail(userData.email)) throw getError(409, 'User already registered');

  const { id } = await Users.create(userData);
  const token = jwt.generate({ id });
  
  return token;
};

module.exports = {
  create,
};
