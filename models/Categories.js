const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (Sequelize) => {
  const Categories = Sequelize.define(
    'Categories', 
    Attributes,
    {
      timestamps: false, // remove necessidade de createdAt, updatedAt
      tableName: 'Categories',
    },
   );
   return Categories;
};
