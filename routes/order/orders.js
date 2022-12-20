const express = require("express");
const Item = require("../../models/Item");
const Order = require("../../models/Order");
const OrderedItem = require("../../models/OrderedItem");
const app = express.Router();

app.route("/").get(async (req, res) => {
  const list = await Order.findAll();
  let orders = new Array();
  for (let i = 0; i < list.length; i++) {
    let orderedItem = await OrderedItem.findAll({
      where: {
        orderNumber: list[i].orderNumber,
      },
    });
    let items = new Array();
    for (let j = 0; j < orderedItem.length; j++) {
      let item = await Item.findByPk(orderedItem[j].itemNumber);
      items[j] = {
        itemNumber: orderedItem[j].itemNumber,
        itemName: item.itemName,
        unitCost: item.unitCost,
        quantity: orderedItem[j].quantity,
        createdAt: orderedItem[j].createdAt,
      };
    }
    orders[i] = {
      orderNumber: list[i].orderNumber,
      orderStatus: list[i].orderStatus,
      deliveredAt: list[i].deliveredAt,
      items: items,
    };
  }
  res.send(orders);
});

module.exports = app;
