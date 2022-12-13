const Item = require("./Item");
const Order = require("./Order");
const OrderedItem = require("./OrderedItem");
const Role = require("./Role");
const User = require("./User");

function createAssociations() {
  User.belongsTo(Role, {
    foreignKey: "roleNumber",
  });
  Role.hasOne(User);

  Order.hasMany(OrderedItem, {
    foreignKey: "orderNumber",

    onDelete: "CASCADE",
  });
  OrderedItem.belongsTo(Order);

  OrderedItem.belongsTo(Item);
  Item.hasOne(OrderedItem, {
    foreignKey: "itemNumber",
  });
}

module.exports = createAssociations;
