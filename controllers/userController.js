const userServices = require('../services/userServices');

const create = async (req, res, next) => {
  try {
    const token = await userServices.create(req.body);
    return res.status(201).json({ token });  
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
