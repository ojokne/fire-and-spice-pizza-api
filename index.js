// importing models
const db = require("./db");
const Item = require("./models/Item");
const User = require("./models/User");
const Role = require("./models/Role");
const Order = require("./models/Order");
const OrderedItem = require("./models/OrderedItem");
const createAssociations = require("./models/createAssocations");
db.sequelize.sync({ force: true });
// async function create() {
//   const pizza = await Item.create({
//     itemNumber: `PIZZA`,
//     itemName: "Pizza vegetarain",
//   });
// }
// create();

createAssociations();
