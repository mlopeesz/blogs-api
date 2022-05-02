const { BlogPosts, Users, Categories } = require('../models');
const validatePost = require('../validates/validatePost');
const getError = require('../helpers/getError');

const checkCategories = async (postData) => {
  const { categoryIds } = postData;
  const categories = await Categories.findAll();
  const categoryExist = categoryIds
    .every((category) => categories
      .map(({ id }) => id)
      .includes(category));

  if (!categoryExist) {
    throw getError(400, '"categoryIds" not found');
  } 
};

const create = async (postData, userId) => {
  const { error } = validatePost.validate(postData);

  if (error) {
    throw getError(400, error.message);
  }

  await checkCategories(postData);

  const { title, content, categoryIds } = postData;
  const createdPost = await BlogPosts.create({ title, content, userId });
  createdPost.addCategory(categoryIds);
  return createdPost;
};

const getAll = async () => {
  const posts = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user' },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  }); 
  return posts;
};

module.exports = {
  create,
  getAll,
};
