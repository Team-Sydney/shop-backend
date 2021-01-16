const fs = require('fs');

module.exports = {
  development: {
    dialect: "postgres",
    host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
    database: "wary-iguana-184.defaultdb",
    username: "sydney",
    password: "teamsydney2021",
    port: 26257,
    logging: false,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync('./cert/cc-ca.crt').toString()
      }
    }
  }
}
