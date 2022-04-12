module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', { postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { tableName: 'PostsCategories', timestamps: false });

  PostCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategories;
};