const { DataTypes } = require("sequelize");
const db = require("../db");
const OrderedItem = require("./OrderedItem");

const Item = db.sequelize.define("Item", {
  itemNumber: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    autoIncrement: false,
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unitCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Item;
