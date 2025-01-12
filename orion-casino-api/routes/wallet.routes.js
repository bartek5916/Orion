const express = require('express');
const router = express.Router();
const walletController = require('../controllers/wallet.controller');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.post('/deposit', isAuthenticated, walletController.deposit);

module.exports = router;
