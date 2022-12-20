const express = require("express");
const Order = require("../../models/Order");
const OrderedItem = require("../../models/OrderedItem");

const app = express.Router();

app.route("/add").post(async (req, res) => {
  let response_code = 1;
  let response_message = "successfully created";
  if (!req.body.hasOwnProperty("items")) {
    response_message = " Add all fields";
    response_code = 0;
  } else {
    if (req.body.items.length < 1) {
      response_message = " populate all fields";
      response_code = 2;
    } else {
      const order = await Order.create();
      for (let i = 0; i < req.body.items.length; i++) {
        await OrderedItem.create({
          itemNumber: req.body.items[i].itemNumber,
          orderNumber: order.orderNumber,
          quantity: req.body.items[i].quantity,
        });
      }
    }
  }
  res.json({ response_code, response_message });
});

module.exports = app;
