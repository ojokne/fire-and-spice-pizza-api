const { DataTypes } = require("sequelize");
const db = require("../db");
const OrderedItem = require("./OrderedItem");

const Order = db.sequelize.define("Order", {
  orderNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  orderStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  table: DataTypes.INTEGER,
  deliveredAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Order;
