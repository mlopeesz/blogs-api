const categoriesServices = require('../services/categoriesServices');

const create = async (req, res, next) => {
  try {
    const createdCategory = await categoriesServices.create(req.body);
    return res.status(201).json(createdCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
