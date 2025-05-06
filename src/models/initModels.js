const Category = require("./categoryModel");
const Products = require("./productModel");
const Users = require("./userModel");

const initModels = () => {
  Products.belongsTo(Category);
  Category.hasMany(Products);
};

module.exports = initModels;
