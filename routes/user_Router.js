const express = require("express");
const router = express.Router();
const userController = require("../controller/user_controller.js");

router.get("/", userController.index);

router.post("/login",userController.login); 

module.exports = router;

