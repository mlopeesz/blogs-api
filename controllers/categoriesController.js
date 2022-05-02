const categoriesServices = require('../services/categoriesServices');

const create = async (req, res, next) => {
  try {
    const createdCategory = await categoriesServices.create(req.body);
    return res.status(201).json(createdCategory);
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const categories = await categoriesServices.getAll();
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};
