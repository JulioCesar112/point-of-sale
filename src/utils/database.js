const { Sequelize } = require("sequelize");
const config = require("../config")

const db = new Sequelize({
  dialect: "postgres",
  host: config.db.host,
  username: config.db.username,
  database: config.db.dbName,
  password: config.db.pasword
})

module.exports = db