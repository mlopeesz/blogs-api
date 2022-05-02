const { Categories } = require('../models');
const validateCategories = require('../validates/validateCategories');
const getError = require('../helpers/getError');

const create = async (data) => {
  const { error } = validateCategories.validate(data);
  
  if (error) {
    throw getError(400, error.message);
  }

  const createdCategory = await Categories.create(data);
  return createdCategory;
};

const getAll = async () => {
  const categories = await Categories.findAll();
  return categories;
};

module.exports = {
  create,
  getAll,
};
