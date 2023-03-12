const express = require('express');
const router = express.Router();
const cardController = require('../controller/card_controller.js');

router.get('/', cardController.index);
router.put('/update/balancelimit', cardController.updateBalanceLimit);


module.exports = router;