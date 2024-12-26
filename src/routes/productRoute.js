const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/productController');
const { modifyProduct } = require('../controllers/productController');
const { deleteProduct } = require('../controllers/productController');

router.post('/register', createProduct);
router.put('/modify/:id', modifyProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;