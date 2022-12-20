const express = require("express");
const Item = require("../../models/Item");

const app = express.Router();

app.route("/:itemNumber").get(async (req, res) => {
  let item = null;
  const itemReturned = await Item.findByPk(req.params.itemNumber);
  if (itemReturned) {
    item = {
      itemNumber: itemReturned.itemNumber,
      itemName: itemReturned.itemName,
      unitCost: itemReturned.unitCost,
    };
  }

  res.send({ item });
});
module.exports = app;
