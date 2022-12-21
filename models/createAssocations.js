const Item = require("./Item");
const Order = require("./Order");
const OrderedItem = require("./OrderedItem");
const Role = require("./Role");
const User = require("./User");

function createAssociations() {
  User.belongsTo(Role, {
    foreignKey: "roleNumber",
  });
  Role.hasMany(User, {
    foreignKey: "roleNumber",
    onUpdate: "CASCADE",
  });

  Order.hasMany(OrderedItem, {
    foreignKey: "orderNumber",
    onDelete: "CASCADE",
  });
  OrderedItem.belongsTo(Order, {
    foreignKey: "orderNumber",
  });

  OrderedItem.belongsTo(Item, {
    foreignKey: "itemNumber",
  });
  Item.hasOne(OrderedItem, {
    foreignKey: "itemNumber",
    onUpdate: "CASCADE",
  });
}

module.exports = createAssociations;
