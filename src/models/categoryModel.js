const { types } = require("pg");
const db = require("../config/database");
const { DataTypes } = require("sequelize");

const Category = db.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Category;
