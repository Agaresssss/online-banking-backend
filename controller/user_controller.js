const userModel = require("../model/user_Model.js");

async function index(req, res) {
  res.send("user router");
}

async function login(req, res) {
   const { email, password } = req.body;
   console.log(email, password)
  await userModel.login(email,password).then((result) => {
    res.send(result);
  });
}
async function updateKYC(req, res) {
  const citizenId = req.body.citizenId
  await userModel.updateKYC(citizenId).then((result) => {
    res.send(result);
  })
}

async function transactionAll(req, res) {
  const citizenId = req.body.citizenId
  await userModel.transactionAll(citizenId).then((result) => {
    res.send(result);
  })
}

async function transactionSwap(req, res) {
  const citizenId= req.body.citizenId  
  await userModel.transactionSwap(citizenId).then((result) => {
    res.send(result);
  })
}

module.exports = {
  index,
  login,
  updateKYC,
  transactionAll,
  transactionSwap
};


// app.put('/update/kyc',(req,res)=>{
//     const citizenId = req.body.citizenId
    
//     db.query("UPDATE `customer-identification` SET kycStatus = 1 WHERE citizenId = ?",
//     [citizenId],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })


//         app.post(`/transaction-all`,(req,res)=>{

//             const citizenId = req.body.citizenId
                
//                 db.query("SELECT DISTINCT t.transactionId,t.fromAccount,t.toAccount,t.value,t.dateAndTime,t.note FROM `customer-Identification` p,`book-Account` Ba,`transaction`t WHERE p.citizenId = Ba.citizenId AND (Ba.accountNum = t.fromAccount OR Ba.accountNum = t.toAccount) AND p.citizenId = ?",
//                 [citizenId],(err,result)=>{
//                     if(err){
//                     console.log(err)
//                     }else {
//                     res.send(result)
//                     }
//                 })
//             })

//     app.post(`/transaction/swap`,(req,res)=>{

//         const citizenId= req.body.citizenId        
        
//             db.query("SELECT Ct.transactionId,Ci.citizenId,Ct.fromCurrency,Ct.toCurrency,Ct.`value`,Ct.dateAndTime,Ct.rate,Ct.fee FROM `customer-Identification` Ci,`currency-exchange-transaction` Ct  WHERE Ci.citizenId = Ct.citizenId AND Ci.citizenId = ?",
//         [citizenId],(err,result)=>{
//                 if(err){
//                 console.log(err)
//                 }else {
//                 res.send(result)
//                 }
//             })
//         })
