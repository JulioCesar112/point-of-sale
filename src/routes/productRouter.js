const express = require("express");
const router = express.Router();
const productService = require("../services/productService");

router
  .route("/")
  .get(productService.getAllProducts)
  .post(productService.postProduct);

router
  .route("/:id")
  .get(productService.getProductById)
  .delete(productService.deleteProduct)
  .patch(productService.updateProduct);

module.exports = router;
