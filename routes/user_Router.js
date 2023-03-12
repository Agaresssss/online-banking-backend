const express = require("express");
const router = express.Router();
const userController = require("../controller/user_controller.js");

router.get("/", userController.index);

router.post("/login",userController.login); 
router.put('/update/kyc',userController.updateKYC)
router.post('/transactionall',userController.transactionAll)
router.post('/transactionswap',userController.transactionSwap)

module.exports = router;




