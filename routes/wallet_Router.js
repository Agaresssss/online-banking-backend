const express = require('express');
const router = express.Router();
const walletController = require('../controller/wallet_controller.js');

router.get('/', walletController.index);
router.post('/balance', walletController.balance);
router.put('/update/balance', walletController.updateBalance);
router.put('/update/currency/balance', walletController.updateCurrencyBalance);
router.post('currency/balance', walletController.currencyBalance);
router.post('/create/transaction/currency',walletController.createTransactionCurrency)
router.post('/create/foreignCurrency',walletController.createforeignCurrency)




module.exports = router;





// app.post('/create/customer/foreign/currencies',(req,res)=>{
    
//     const citizenId = req.body.citizenId
//     const currencyId = req.body.currencyId
//     const balanceCurrency = req.body.balanceCurrency

//     db.query("INSERT INTO `customer's-foreign-currencies`(citizenId,currencyId,balanceCurrency) VALUES (?,?,?)",
//     [citizenId,currencyId,balanceCurrency],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })

// app.post('/create/transaction/currency',(req,res)=>{
//     const citizenId = req.body.citizenId
//     const fromCurrency = req.body.fromCurrency
//     const toCurrency = req.body.toCurrency
//     const value = req.body.value
//     const note = req.body.note
//     const rate = req.body.rate
//     const fee = req.body.fee
    

//     db.query("INSERT INTO `currency-exchange-transaction`(citizenId,fromCurrency,toCurrency,value,note,rate,fee) VALUES (?,?,?,?,?,?,?)",
//     [citizenId,fromCurrency,toCurrency,value,note,rate,fee],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })
