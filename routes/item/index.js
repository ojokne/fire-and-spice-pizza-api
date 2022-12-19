const express = require("express");
const add = require("./add");
const update = require("./update");
const deleteItem = require("./delete");
const items = require("./items");
const item = require("./item");
const app = express.Router();

app.use(add);
app.use(update);
app.use(deleteItem);
app.use(items);
app.use(item);
module.exports = app;
