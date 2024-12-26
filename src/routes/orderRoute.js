const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController');
const { modifyOrder } = require('../controllers/orderController');
const { deleteOrder } = require('../controllers/orderController');
const { getAllOrders } = require('../controllers/orderController');
const { getOrderByRecentDate } = require('../controllers/orderController');
const { getOrderByOldDate } = require('../controllers/orderController');
const { getOrderByProduct } = require('../controllers/orderController');

router.post('/register', createOrder);
router.put('/modify/:id', modifyOrder);
router.delete('/delete/:id', deleteOrder);
router.get('/all', getAllOrders);
router.get('/recent', getOrderByRecentDate);
router.get('/old', getOrderByOldDate);
router.get('/byproduct/:name', getOrderByProduct);

module.exports = router;