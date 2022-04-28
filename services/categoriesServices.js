const { Categories } = require('../models/Categories');
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

module.exports = {
  create,
};
