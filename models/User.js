const { DataTypes } = require("sequelize");
const db = require("../db");
const Role = require("./Role");

const User = db.sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middleName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  passwordResetCode: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = User;
