const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');
const { modifyUser } = require('../controllers/userController');
const { deleteUser } = require('../controllers/userController');

router.post('/register', createUser);
router.put('/modify/:id', modifyUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
