const express = require("express");
const Item = require("../../models/Item");
const Order = require("../../models/Order");
const OrderedItem = require("../../models/OrderedItem");

const app = express.Router();

app.route("/:orderNumber").get(async (req, res) => {
  let order = null;
  let items = new Array();
  const returnedOrder = await Order.findByPk(parseInt(req.params.orderNumber));
  if (returnedOrder) {
    const list = await OrderedItem.findAll({
      where: {
        orderNumber: returnedOrder.orderNumber,
      },
    });
    for (let i = 0; i < list.length; i++) {
      let item = await Item.findByPk(list[i].itemNumber);
      items[i] = {
        itemNumber: list[i].itemNumber,
        itemName: item.itemName,
        unitCost: item.unitCost,
        quantity: list[i].quantity,
        createdAt: list[i].createdAt,
      };
    }
    order = {
      orderNumber: returnedOrder.orderNumber,
      orderStatus: returnedOrder.orderStatus,
      deliveredAt: returnedOrder.deliveredAt,
      items: items,
    };
  }

  res.send({ order });
});
module.exports = app;
