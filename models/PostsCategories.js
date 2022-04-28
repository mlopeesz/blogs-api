module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', { postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { tableName: 'PostsCategories', timestamps: false });

  PostCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blogPosts',
      through: PostCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategories;
};