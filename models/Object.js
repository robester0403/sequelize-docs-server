const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("postgres::memory:");
const Object = sequelize.define("Object", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Object;
