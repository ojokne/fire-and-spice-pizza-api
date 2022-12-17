const Item = require("./Item");
const Order = require("./Order");
const OrderedItem = require("./OrderedItem");
const Role = require("./Role");
const User = require("./User");

function createAssociations() {
  User.belongsTo(Role, {
    foreignKey: "roleNumber",
  });
  Role.hasOne(User, {
    foreignKey: "roleNumber",
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
  });
}

module.exports = createAssociations;
