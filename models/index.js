const Sequelize = require("sequelize-cockroachdb");
const fs = require('fs');


const sequelize = new Sequelize(
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    logging: true,
    dialectOptions: {
      ssl: {
          ca: fs.readFileSync('./cert/cc-ca.crt').toString()
      }
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer = require("./customer.model.js")(sequelize, Sequelize);
db.vehicle = require("./vehicle.model.js")(sequelize, Sequelize);
db.business = require("./business.model.js")(sequelize, Sequelize);
db.product = require("./product.model.js")(sequelize, Sequelize);
db.order = require("./order.model.js")(sequelize, Sequelize);
db.category = require("./category.model.js")(sequelize, Sequelize);


module.exports = db;
