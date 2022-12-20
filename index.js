require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// importing models
const db = require("./db");
const Item = require("./models/Item");
const User = require("./models/User");
const Role = require("./models/Role");
const Order = require("./models/Order");
const OrderedItem = require("./models/OrderedItem");
const createAssociations = require("./models/createAssocations");

// import apps
const user = require("./routes/user/index");
const role = require("./routes/role/index");
const item = require("./routes/item/index");
const order = require("./routes/order");

// port
const PORT = 5000 || process.env.PORT;
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// use app
app.use("/user", user);
app.use("/role", role);
app.use("/item", item);
app.use("/order", order);

// run server
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
// db.sequelize.sync({ force: true });
// async function create() {
//   const pizza = await Item.create({
//     itemNumber: `PIZZA`,
//     itemName: "Pizza vegetarain",
//   });
// }
// create();

// createAssociations();
