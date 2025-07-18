const salesService = require('../services/salesService');
const express = require('express');
const router = express.Router();
const saleDetailsService = require('../services/saleDetailsService');

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
    salesService.postSale
  );
router
  .route('/:id/details') 
  .post(
    passport.authenticate('jwt', { session: false }),
    saleDetailsService.createSaleDetails
  )
router
  .route('/:id/finalize')
  .patch(
    passport.authenticate('jwt', { session: false }),
    salesService.finalizeSale
  )
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