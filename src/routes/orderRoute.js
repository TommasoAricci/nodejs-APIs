const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController');
const { modifyOrder } = require('../controllers/orderController');
const { deleteOrder } = require('../controllers/orderController');
const { getOrders } = require('../controllers/orderController');

router.post('/register', createOrder);
router.put('/modify/:id', modifyOrder);
router.delete('/delete/:id', deleteOrder);
router.get('/', getOrders);

module.exports = router;