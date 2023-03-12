const express = require('express');
const router = express.Router();
const systemController = require('../controller/system_controller.js');




router.get('/',systemController.welcome);
router.get('/getcustomer',systemController.getCustomer);
router.get('/getallproduct',systemController.getAllProduct);
router.post('/checkalreadyregister',systemController.checkAlreadyRegister);
router.post('/checkproduct',systemController.checkProduct);
router.post('/checkkyc',systemController.checkKYC);
router.post('/checkcard',systemController.checkCard);
router.post('/checkaccount',systemController.checkAccount);
router.post('/viewtransactionmonth',systemController.viewTransactionMonth);
router.get('/citizencurrency',systemController.citizenCurrency);
router.post('/citizenspend',systemController.citizenSpend);
router.get('/creditcardspend',systemController.creditCardSpend);
router.get('/totalbalancecurrency',systemController.totalBalanceCurrency);
router.get('/userincomespend',systemController.userIncomeSpend);
router.post('/create/product',systemController.createProduct);


module.exports = router;


