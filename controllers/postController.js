const postServices = require('../services/postServices');

const create = async (req, res, next) => {
  try {
    const createdPost = await postServices.create(req.body, req.user.id);
    return res.status(201).json(createdPost);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
