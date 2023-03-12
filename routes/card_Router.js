const express = require('express');
const router = express.Router();
const cardController = require('../controller/card_controller.js');

router.get('/', cardController.index);
router.put('/update/balancelimit', cardController.updateBalanceLimit);
router.post('/transaction', cardController.transaction);
router.post('/cardList',cardController.cardList);
router.post('/subscription',cardController.cardSubscription);
router.post('/create/subscription',cardController.createCardSubscription);
router.post('/create/transaction',cardController.createTransactionCard);
router.post('/create',cardController.createCard);

module.exports = router;



// app.post('/create/card',(req,res)=>{
    
//     const accountNum = req.body.accountNum
//     const cardId = req.body.cardId
//     const cvv = Math.floor(Math.random() * (999 - 100 +1)) + 100
//     db.query("INSERT INTO `customer-card`(cardId,accountNum,cvv) VALUES (?,?,?)",[cardId,accountNum,cvv],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
            
//         }
//     })
// })
