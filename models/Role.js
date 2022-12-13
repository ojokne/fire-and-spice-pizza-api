const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("./User");

const Role = db.sequelize.define("Role", {
  roleNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  roleName: DataTypes.STRING,
});

module.exports = Role;
