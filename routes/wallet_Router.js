const express = require('express');
const router = express.Router();
const walletController = require('../controller/wallet_controller.js');


router.get('/', walletController.index);
router.put('/update/balance', walletController.updateBalance);
router.put('/update/currency/balance', walletController.updateCurrencyBalance);





module.exports = router;