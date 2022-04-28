const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (Sequelize) => {
  const Users = Sequelize.define(
    'Users', 
    Attributes,
    {
      timestamps: false, // remove necessidade de createdAt, updatedAt
      tableName: 'Users',
    },
   );
   return Users;
};
