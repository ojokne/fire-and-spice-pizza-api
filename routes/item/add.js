const express = require("express");
const Item = require("../../models/Item");

const app = express.Router();

app.route("/add").post(async (req, res) => {
  let response_code = 1;
  let response_message = "successfully created";
  if (
    !(
      req.body.hasOwnProperty("itemNumber") &&
      req.body.hasOwnProperty("itemName") &&
      req.body.hasOwnProperty("unitCost")
    )
  ) {
    response_message = " Add all fields";
    response_code = 0;
  } else {
    if (
      req.body.itemNumber.trim().length < 1 ||
      req.body.itemName.trim().length < 1 ||
      req.body.unitCost.trim().length < 1
    ) {
      response_message = " populate all fields";
      response_code = 2;
    } else {
      let itemReturned = await Item.findByPk(req.body.itemNumber.trim());
      if (itemReturned) {
        response_message = "Resource already exists";
        response_code = 5;
      } else {
        await Item.create({
          itemNumber: req.body.itemNumber.trim(),
          itemName: req.body.itemName.trim(),
          unitCost: Number(req.body.unitCost.trim()),
        });
      }
    }
  }
  res.json({ response_code, response_message });
});

module.exports = app;
