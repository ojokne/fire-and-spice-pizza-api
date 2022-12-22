const express = require("express");
const Item = require("../../models/Item");

const app = express.Router();

app.route("/update").post(async (req, res) => {
  let response_code = 4;
  let response_message = "successfully updated";
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
      let item = await Item.findByPk(req.body.itemNumber.trim());
      if (item) {
        item.itemName = req.body.itemName.trim();
        item.unitCost = Number(req.body.unitCost.trim());
        item.picture = req.body.unitCost.trim();
        item.save();
      } else {
        response_message = "Not found";
        response_code = 3;
      }
    }
  }
  res.json({ response_code, response_message });
});

module.exports = app;
