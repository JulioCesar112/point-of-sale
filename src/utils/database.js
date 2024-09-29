const { Sequelize } = require("sequelize");
const config = require("../config")

const db = new Sequelize(config.db.dbName, config.db.username, config.db.password, {
  host: config.db.host,
  dialect: "postgres",
  dialectOptions:
    process.env.NODE_ENV === "production"
      ? {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      } : {}
});

// const db = new Sequelize({
//   dialect: "postgres",
//   host: config.db.host,
//   username: config.db.username,
//   database: config.db.dbName,
//   password: config.db.password,
// })

module.exports = db