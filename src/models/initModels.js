const Category = require("./categoryModel");
const Products = require("./productModel");
const Sales = require("./salesModel");
const Users = require("./userModel");

const initModels = () => {
  Products.belongsTo(Category);
  Category.hasMany(Products);

  Sales.belongsTo(Users);
  Users.hasMany(Sales);
  

};

module.exports = initModels;
