const cardModel = require('../model/card_Model.js');


async function index(req, res) {
    res.send("card router");
}


async function updateBalanceLimit(req, res) {
    const { cardId, currentLimit } = req.body;
    await cardModel.updateBalanceLimit(cardId, currentLimit).then((result) => {
        res.send(result);
    });
}

async function transaction(req, res) {
    const cardId= req.body.cardId 
    await cardModel.transaction(cardId).then((result) => {
        res.send(result);
    })
}
async function cardList(req, res) {
    const citizenId = req.body.citizenId
    await cardModel.cardList(citizenId).then((result) => {
        res.send(result);   
    })
}
async function cardSubscription(req, res) {
    const cardId = req.body.cardId
    await cardModel.cardSubscription(cardId).then((result) => {
        res.send(result);
    })
}


module.exports = {
    index,
    updateBalanceLimit,
    transaction,
    cardList,
    cardSubscription
}

// app.put(`/update/card/currentlimit`,(req,res)=>{
//     const cardId = req.body.cardId
//     const currentLimit = req.body.currentLimit
//     db.query("UPDATE `customer-card` SET currentLimit = ? WHERE cardId = ?",
//     [currentLimit,cardId],(err,result)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 res.send(result)
//             }
//     })
// })




    

// app.post(`/customer/card`,(req,res)=>{

// const citizenId = req.body.citizenId
	
// 	db.query("SELECT Ci.citizenId,Ba.accountNum,Cc.cardId,Ct.cardType,Cc.currentLimit,Cc.cvv FROM `customer-Identification` Ci,`book-Account` Ba, `customer-Card` Cc,`card-Type` Ct WHERE Ci.citizenId = Ba.citizenId AND Ba.accountNum = Cc.accountNum AND Cc.cardTypeId = Ct.cardTypeId AND Ci.citizenId = ?",
//     [citizenId],(err,result)=>{
// 		if(err){
// 		console.log(err)
// 		}else {
// 		res.send(result)
// 		}
// 	})
// })

// app.post(`/transaction/card`,(req,res)=>{

//     const cardId= req.body.cardId        
    
//         db.query("SELECT T.transactionId, Cc.cardId, T.toAccount, T.value, T.dateAndTime, T.note FROM `customer-Card` Cc,`book-Account` Ab,`credit-card-transaction` T WHERE Cc.cardId = T.fromCreditCardId AND T.toAccount = Ab.accountNum AND Cc.cardId = ?",
//     [cardId],(err,result)=>{
//             if(err){
//             console.log(err)
//             }else {
//             res.send(result)
//             }
//         })
//     })

// app.post(`/card/subscription`,(req,res)=>{

//     const cardId = req.body.cardId
//     db.query("SELECT Cp.subProductId,Cp.productName,Cp.monthlyPay FROM `customer-Card` Cc,`card-Subscription` Cs,`subscription-Product` Cp WHERE Cc.cardId = Cs.cardId AND Cs.subProductId = Cp.subProductId AND Cc.cardId = ?",
//     [cardId],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })