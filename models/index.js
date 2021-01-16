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

db.order = require("./order.model.js")(sequelize, Sequelize);


module.exports = db;
