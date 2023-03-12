const systemModel = require('../model/system_model.js')



async function  welcome(req, res) {
    res.send('Welcome to the login server');
}

async function getCustomer(req, res) {
    await systemModel.getCustomer().then((result) => {
        res.send(result);
    })
        
}

async function getAllProduct(req, res) {
    await systemModel.getAllProduct().then((result) => {
        res.send(result);
    })
}

async function checkAlreadyRegister(req, res) {
    const { email, citizenId } = req.body;
    await systemModel.checkAlreadyRegister(email,citizenId).then((result) => {
        res.send(result);
    })

}

async function checkProduct(req, res) {
    const subProductId = req.body.subProductId
    await systemModel.checkAlreadyRegister(subProductId).then((result) => {
        res.send(result);
    })
}

async function checkKYC (req,res) {
    const {email , password} = req.body
    await systemModel.checkKYC(email,password).then((result) => {
        res.send(result);
    })
}

async function checkCard (req,res) {
    const cardId = req.body.cardId
    await systemModel.checkCard(cardId).then((result) => {
        res.send(result);
    })
}

async function checkAccount (req,res) {
    const accountNum = req.body.accountNum
    await systemModel.checkAccout(accountNum).then((result) => {
        res.send(result);
    })
}
async function viewTransactionMonth (req,res) {
    const {citizenId,month} = req.body
    await systemModel.viewTransactionMonth(citizenId,month).then((result) => {
        res.send(result);
    })
}

async function citizenCurrency (req,res) {
    await systemModel.citizenCurrency().then((result) => {
        res.send(result);
    })
}
async function citizenSpend (req,res) {
    const citizenId = req.body.citizenId
    await systemModel.citizenSpend(citizenId).then((result) => {
        res.send(result);
    })

}
async function creditCardSpend (req,res) {
    await systemModel.creditCardSpend().then((result) => {
        res.send(result);
    })
}
async function totalBalanceCurrency (req,res) {
    await systemModel.totalBalanceCurrency().then((result) => {
        res.send(result);
    })
}
async function userIncomeSpend (req,res) {
    await systemModel.userIncomeSpend().then((result) => {
        res.send(result);
    })
}


module.exports = {
    welcome,
    getCustomer,
    getAllProduct,
    checkAlreadyRegister,
    checkProduct,
    checkKYC,
    checkCard,
    checkAccount,
    viewTransactionMonth,
    citizenCurrency,
    citizenSpend,
    creditCardSpend,
    totalBalanceCurrency,
    userIncomeSpend


}
    
    


// router.get('/customer',(req, res) => {
//     db.query("SELECT * FROM `customer-identification`",(err,result) => {
//         if (err){
//            res.send(err);
//         }else{
//            res.send(result);
//         }
//     });
// });

// router.get('/list/product',(req,res)=>{
//     db.query("SELECT * FROM `subscription-product`",(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })


// app.post('/register/check',(req,res)=>{
//     const email = req.body.email
//     const citizenId = req.body.citizenId
//     db.query("SELECT *  FROM `customer-Identification` WHERE email = ? AND citizenId = ?",
//     [email,citizenId],((err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     }))
// })




// app.post(`/check/product`,(req,res)=>{

//     const subProductId = req.body.subProductId
//     db.query("SELECT * FROM `subscription-product` WHERE subProductId = ?",
//     [subProductId],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })

// app.post('/check/kyc',(req,res)=>{
//     const email = req.body.email
//     const password = req.body.password
//     db.query("SELECT kycStatus FROM `customer-identification` WHERE email = ? AND password = ?",
//     [email,password],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })

// app.post('/check/card',(req,res)=>{
//     const cardId = req.body.cardId
//     db.query("SELECT cardId,currentLimit FROM `customer-card` WHERE cardId = ?",[cardId],(err,result)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 res.send(result)
//             }
//     })
// })


// app.post('/account/check',(req,res)=>{
//     const accountNum = req.body.accountNum
//     db.query("SELECT Ci.fName,Ci.lName,Ba.accountNum,Ba.balance FROM `book-account`Ba,`customer-identification` Ci WHERE Ba.citizenId = Ci.citizenId AND Ba.accountNum = ?",
//     [accountNum], (err,result)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 res.send(result)
//             }
//     })

// })



// app.post(`/transaction/month`,(req,res)=>{

//     const citizenId = req.body.citizenId
//     const month = req.body.month	
    
// db.query("SELECT ba.citizenId,t.fromAccount,t.toAccount,t.value,t.`dateAndTime` FROM `transaction` t,`book-account`ba WHERE ba.`accountNum` = t.`fromAccount` AND ba.citizenId = ? AND month(dateAndTime) = ?",
// [citizenId,month],(err,result)=>{
//     if(err){
//         console.log(err)
//         }else {
//         res.send(result)
//         }
//     })       
// })



// app.get('/report/citizenId/account/currency',(req,res)=>{
//     db.query("SELECT Ci.citizenId, count(DISTINCT currencyId) as numberOfCurrency, count(DISTINCT accountNum) as numberOfAccount FROM `customer-identification` Ci LEFT JOIN `book-account` Ba ON Ba.citizenId = Ci.citizenId LEFT JOIN `customer's-foreign-currencies` Cc ON Cc.citizenId = Ci.citizenId GROUP BY Ci.citizenId;",
//     (err,result)=>{
//         if(err){
//             console.log(err)
            
//         }else{
//             res.send(result)
//         }
//     })
// })

// app.post('/report/citizenid/spend/month',(req,res)=>{

//     const citizenId = req.body.citizenId
//     db.query("SELECT bc.accountNum,ct.category,sum(t.`value`) AS totalValue FROM `book-Account` bc, `category-Type` ct, `transaction` t WHERE bc.accountNum = t.fromAccount AND ct.categoryId = t.categoryId AND bc.citizenId = ? GROUP BY (ct.category) ORDER BY (totalValue) DESC",
//     [citizenId],(err,result)=>{
//         if(err){
//             console.log(err)
            
//         }else{
//             res.send(result)
//         }
//     })
// })

// app.get('/report/admin/card/all-user/spend',(req,res)=>{
//     db.query("SELECT cc.cardId, sum(cct.`value`) as totalValue, ct.monthlyLimit, (sum(cct.`value`) / ct.monthlyLimit) * 100 AS percentToUse FROM `customer-card` cc, `credit-card-transaction` cct, `card-type` ct WHERE cc.cardId = cct.fromCreditCardId AND cc.cardTypeId = ct.cardTypeId GROUP BY (cc.cardId) ORDER BY(percentToUse) DESC",
// (err,result)=>{
//         if(err){
//             console.log(err)
            
//         }else{
//             res.send(result)
//         }
//     }) 
// })

// app.get('/report/admin/totalbalance/currency',(req,res)=>{
//     db.query("SELECT cc.cardId,sum(cct.`value`) as totalValue,ct.monthlyLimit, (sum(cct.`value`) / ct.monthlyLimit) * 100 AS percentToUse FROM `customer-card` cc, `credit-card-transaction` cct, `card-type` ct WHERE cc.cardId = cct.fromCreditCardId AND cc.cardTypeId = ct.cardTypeId GROUP BY (cc.cardId) ORDER BY(percentToUse) DESC",
// (err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })

// app.get('/report/income/spend/user',(req,res)=>{
//     db.query("SELECT Ci.citizenId, sum(T.`value`) +  sum(DISTINCT Ba.balance) AS `Income`,sum(T.`value`) as `Spend`, sum(DISTINCT Ba.balance) as `Difference` FROM `customer-identification` Ci LEFT JOIN `book-account` Ba ON Ba.citizenId = Ci.citizenId LEFT JOIN `transaction` T ON T.fromAccount = Ba.accountNum GROUP BY Ci.citizenId;",
//     (err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })

