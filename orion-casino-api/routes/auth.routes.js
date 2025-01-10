const express = require('express');
const { login, logout } = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', userController.register);

module.exports = router;
