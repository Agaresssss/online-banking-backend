const db = require('../mysql.js')

    const updateBalanceLimit = (...param) => {
        return new Promise((resolve, reject) => {
                db.query("UPDATE `customer-card` SET currentLimit = ? WHERE cardId = ?",
    [...param],(err,result)=>{
            if(err){
               reject(err)
            }else{
                resolve(result)
            }
    })
        })
    }

    const cardList = (...param) => {
        return new Promise((resolve, reject) => {
            	db.query("SELECT Ci.citizenId,Ba.accountNum,Cc.cardId,Ct.cardType,Cc.currentLimit,Cc.cvv FROM `customer-Identification` Ci,`book-Account` Ba, `customer-Card` Cc,`card-Type` Ct WHERE Ci.citizenId = Ba.citizenId AND Ba.accountNum = Cc.accountNum AND Cc.cardTypeId = Ct.cardTypeId AND Ci.citizenId = ?",
    [...param],(err,result)=>{
        if(err){
            reject(err)
         }else{
             resolve(result)
         }
	})
        })
    }

const cardSubscription = (...param) => {
    return new Promise((resolve, reject) => {
    db.query("SELECT Cp.subProductId,Cp.productName,Cp.monthlyPay FROM `customer-Card` Cc,`card-Subscription` Cs,`subscription-Product` Cp WHERE Cc.cardId = Cs.cardId AND Cs.subProductId = Cp.subProductId AND Cc.cardId = ?",
    [...param],(err,result)=>{
        if(err){
            reject(err)
         }else{
             resolve(result)
         }
    })
    })
}
const transaction = (...param) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT T.transactionId, Cc.cardId, T.toAccount, T.value, T.dateAndTime, T.note FROM `customer-Card` Cc,`book-Account` Ab,`credit-card-transaction` T WHERE Cc.cardId = T.fromCreditCardId AND T.toAccount = Ab.accountNum AND Cc.cardId = ?",
    [...param],(err,result)=>{
        if(err){
            reject(err)
         }else{
             resolve(result)
         }
        })

    })
}

    module.exports = {
        updateBalanceLimit,
        transaction,
        cardList,
        cardSubscription
    }