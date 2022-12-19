const express = require("express");
const Item = require("../../models/Item");

const app = express.Router();

app.route("/:itemNumber").delete(async (req, res) => {
  let response_code = 6;
  let response_message = "successfully deleted";

  const item = await Item.findByPk(req.params.itemNumber);
  if (item) {
    await item.destroy();
    item.save();
  } else {
    response_message = "Not found";
    response_code = 3;
  }

  res.send({ response_code, response_message });
});
module.exports = app;
