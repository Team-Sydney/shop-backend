const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Database
const db = require("./models");
db.sequelize.sync();

// Routes
require("./routes/category.routes")(app);
require("./routes/order.routes")(app);
require("./routes/business.routes")(app);
require("./routes/product.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});