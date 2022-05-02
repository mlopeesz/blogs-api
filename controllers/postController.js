const postServices = require('../services/postServices');

const create = async (req, res, next) => {
  try {
    const createdPost = await postServices.create(req.body, req.user.id);
    return res.status(201).json(createdPost);
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const posts = await postServices.getAll();
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};
