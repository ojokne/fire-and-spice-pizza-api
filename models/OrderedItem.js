const { DataTypes } = require("sequelize");
const db = require("../db");
const Item = require("./Item");
const Order = require("./Order");

const OrderedItem = db.sequelize.define("OrderedItem", {
  itemNumber: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    autoIncrement: false,
  },
  orderNumber: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = OrderedItem;
