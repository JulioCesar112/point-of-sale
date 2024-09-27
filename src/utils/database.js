const { Sequelize } = require("sequelize");
const config = require("../config")

const db = new Sequelize(config.db.dbName, config.db.username, config.db.password, {
  host: config.db.host,
  dialect: "postgres",
  dialectOptions: {
    schemas: ['public'] // Especifica el esquema a usar
  }
});

// const db = new Sequelize({
//   dialect: "postgres",
//   host: config.db.host,
//   username: config.db.username,
//   database: config.db.dbName,
//   password: config.db.password,
// })

module.exports = db