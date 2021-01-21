const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// const { firebase } = require('@firebase/app');


// const firebase = require('firebase');

require('dotenv').config();

const app = express();

app.use(cors());

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   // authDomain: "myapp-project-123.firebaseapp.com",
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   // storageBucket: "myapp-project-123.appspot.com",
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   // appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
// }

// firebase.initializeApp(firebaseConfig);

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Database
const db = require("./models");
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