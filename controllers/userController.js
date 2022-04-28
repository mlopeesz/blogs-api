const userServices = require('../services/userServices');

const create = async (req, res, next) => {
  try {
    const token = await userServices.create(req.body);
    return res.status(201).json({ token });  
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const users = await userServices.getAll();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};
