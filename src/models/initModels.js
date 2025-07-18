const Category = require("./categoryModel");
const Products = require("./productModel");
const Sales = require("./salesModel");
const Users = require("./userModel");
const salesDetails = require("./saleDetails");

const initModels = () => {
  Products.belongsTo(Category);
  Category.hasMany(Products);

  Sales.belongsTo(Users);
  Users.hasMany(Sales);

  salesDetails.belongsTo(Sales)
  Sales.hasMany(salesDetails)

  salesDetails.belongsTo(Products);
  Products.hasMany(salesDetails);
  

};

module.exports = initModels;
