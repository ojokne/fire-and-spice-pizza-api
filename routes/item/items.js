const express = require("express");
const Item = require("../../models/Item");
const app = express.Router();

app.route("/").get(async (req, res) => {
  const list = await Item.findAll();
  const items = new Array(list.length);
  for (let i = 0; i < list.length; i++) {
    let item = {
      itemNumber: list[i].itemNumber,
      itemName: list[i].itemName,
      unitCost: list[i].unitCost,
      picture: list[i].picture,
    };
    items[i] = item;
  }

  res.send(items);
});

module.exports = app;
