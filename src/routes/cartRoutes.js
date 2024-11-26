const express = require('express');
const { addToCart } = require('../controllers/cartController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/cart', auth, addToCart);

module.exports = router;
