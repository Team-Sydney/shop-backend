const fs = require('fs');

module.exports = {
  production: {
    dialect: "postgres",
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    logging: false,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync('./certs/cc-ca.crt').toString()
      }
    }
  },
  development: {
    dialect: "postgres",
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    logging: false,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync('./certs/cc-ca.crt').toString()
      }
    }
  },
  test: {
    dialect: "postgres",
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    logging: false,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync('./certs/cc-ca.crt').toString()
      }
    }
  }
}
