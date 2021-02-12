const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Database
const db = require("./sequelize");
db.sequelize.sync({force:false}); // Set force to false if you'd like to use existing tables, otherwise keep it true as we keep on finalizing our models

// Routes
require("./routes/category.routes")(app);
require("./routes/customer.routes")(app);
require("./routes/order.routes")(app);
require("./routes/vehicle.routes")(app);
require("./routes/business.routes")(app);
require("./routes/product.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});