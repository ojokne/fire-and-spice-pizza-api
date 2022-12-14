const { DataTypes } = require("sequelize");
const db = require("../db");
const OrderedItem = require("./OrderedItem");

const Order = db.sequelize.define("Order", {
  orderNumber: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  orderStatus: {
    type: DataTypes.BOOLEAN,
  },
  table: DataTypes.INTEGER,
  deliveredAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Order;
