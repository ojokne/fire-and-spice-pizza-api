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
  } else {
    response_message = "Not found";
    response_code = 3;
  }

  res.send({ response_code, response_message, item });
});
module.exports = app;
