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

async function register(req, res) {
  const {prefix,fName,lName,phoneNumber,gender,dob,citizenId,email,password,address,pin} = req.body;
  await userModel.register(prefix,fName,lName,phoneNumber,gender,dob,citizenId,email,password,address,pin).then((result) => {
    res.send(result);
  })
}
async function createTransaction(req, res) {
  const {fromAccount,toAccount,value,note,categoryId,transactionTypeId} = req.body;
  await userModel.createTransaction(fromAccount,toAccount,value,note,categoryId,transactionTypeId).then((result) => {
    res.send(result);
  })
}

module.exports = {
  index,
  login,
  updateKYC,
  transactionAll,
  transactionSwap,
  register,
  createTransaction
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




// app.post('/register',(req,res)=>{
//     const prefix = req.body.prefix;
//     const fName = req.body.fName;
//     const lName = req.body.lName;
//     const phoneNumber = req.body.phoneNumber;
//     const gender = req.body.gender;
//     const dob = req.body.dob;
//     const citizenId = req.body.citizenId;
//     const email = req.body.email;
//     const password = req.body.password;
//     const address = req.body.address;
//     const pin = req.body.pin;
//     db.query("INSERT INTO `customer-identification`(prefix,fName,lName,phoneNumber,gender,dob,citizenId,email,password,address,pin) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
//     [prefix,fName,lName,phoneNumber,gender,dob,citizenId,email,password,address,pin],((err,result)=>{
//         if(err){
//             console.log(err);
//         }else{
//             res.send("Value inserted")
//         }
//     }));
// })

// app.post('/create/transaction',(req,res)=>{
    
//     const fromAccount = req.body.fromAccount
//     const toAccount = req.body.toAccount
//     const value = req.body.value
//     const note = req.body.note
//     const categoryId = req.body.categoryId
//     const transactionTypeId = req.body.transactionTypeId

//     db.query("INSERT INTO `transaction`(fromAccount,toAccount,value,note,categoryId,transactionTypeId) VALUES (?,?,?,?,?,?)",
//     [fromAccount,toAccount,value,note,categoryId,transactionTypeId],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })