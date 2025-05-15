const db = require("../config/database");
const { DataTypes } = require("sequelize");
const Users = require("./userModel");

const Cart = db.define("cart", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  status: {
    type: DataTypes.ENUM("active", "completed", "cancelled"),
    defaultValue: "active",
  },
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    field: "cartId",
    references: {
      key: "id",
      model: Users,
    },
  },
});

module.exports = Cart;
