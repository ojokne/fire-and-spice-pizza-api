const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "data.sqlite",
});

const db = {
  sequelize: sequelize,
};
module.exports = db;
