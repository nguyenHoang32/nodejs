const express = require('express');

const controller = require('../controller/cart.controller.js');
const router = express.Router();

router.get('/', controller.index)
router.get('/add/:productId', controller.addToCart);

module.exports = router;