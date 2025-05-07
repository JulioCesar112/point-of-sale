const categoryService = require("../services/categoryService");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(categoryService.getAllCategory)
  .post(categoryService.createCategory);

router
  .route("/:id")
  .get(categoryService.getCategoryById)
  .delete(categoryService.deleteCategoryById)
  .patch(categoryService.updateCategory);
module.exports = router;
