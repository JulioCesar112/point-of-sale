const Cart = require("./cartModel");
const Category = require("./categoryModel");
const Products = require("./productModel");
const Users = require("./userModel");

const initModels = () => {
  Products.belongsTo(Category);
  Category.hasMany(Products);

  Cart.belongsTo(Users);
  Users.hasMany(Cart);
};

module.exports = initModels;
