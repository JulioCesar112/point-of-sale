const categoryService = require("../services/categoryService");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(categoryService.getAllCategory)
  .post(categoryService.createCategory);

module.exports = router;
