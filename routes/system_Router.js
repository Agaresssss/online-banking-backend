const express = require('express');
const router = express.Router();
const systemController = require('../controller/system_controller.js');




router.get('/',systemController.welcome);
router.get('/getcustomer',systemController.getCustomer);
router.get('/getallproduct',systemController.getAllProduct);


module.exports = router;