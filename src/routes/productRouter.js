const express = require("express");
const router = express.Router();
const productService = require("../services/productService");

const passport = require("passport");
require("../middlewares/authMiddleware")(passport);
const { adminValidate } = require("../middlewares/isAdmin");

router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    productService.getAllProducts
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    productService.postProduct
  );

router
  .route("/:id")
  .get(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    productService.getProductById
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    productService.deleteProduct
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    productService.updateProduct
  );

module.exports = router;
