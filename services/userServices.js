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

const getAll = async () => {
  const users = await Users.findAll(
    {
      attributes: { exclude: ['password'] },
    },
  );
  return users;
};

const getById = async (id) => {
  const user = await Users.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    throw getError(404, 'User does not exist');
  }
  return user;
};

module.exports = {
  create,
  getAll,
  getById,
};
