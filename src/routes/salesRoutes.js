const salesService = require('../services/salesService');
const express = require('express');
const router = express.Router();

const passport = require('passport');
require('../middlewares/authMiddleware')(passport);
const { adminValidate } = require('../middlewares/isAdmin');

router
  .route('/')
  .get(
    passport.authenticate('jwt', { session: false }),
    adminValidate,
    salesService.getAllSales
  )
  .post(
    passport.authenticate('jwt', { session: false }),
    adminValidate,
    salesService.postSale
  );
router
  .route('/:id')
  .get(
    passport.authenticate('jwt', { session: false }),
    adminValidate,
    salesService.getSaleById
  )
  .delete(
    passport.authenticate('jwt', { session: false }),
    adminValidate,
    salesService.deleteSale
  )
  .patch(
    passport.authenticate('jwt', { session: false }),
    adminValidate,
    salesService.updateSale
  );

module.exports = router;