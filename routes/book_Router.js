const express = require('express');
const router = express.Router();
const bookController = require('../controller/book_controller.js');


router.get('/', bookController.index);
router.post('/create', bookController.createBook);
router.post('/create/createTransaction', bookController.createTransaction);


module.exports = router;

