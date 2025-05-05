const { Sequelize } = require("sequelize");
const config = require("./env");

let db;

if (config.db_url) {
  // Si existe DATABASE_URL, úsala directamente (modo producción)
  db = new Sequelize(config.db_url, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // Si no hay DATABASE_URL, usa los valores locales
  db = new Sequelize(config.db.dbName, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: "postgres",
  });
}

module.exports = db;
