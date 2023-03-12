const express = require('express');
const app = express();
const mysql = require('mysql');
const helmet = require('helmet');
const cors = require('cors');

const router = require('./routes/index.js');


app.use(cors()); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(helmet()); // security
app.disable('x-powered-by'); // security hide express version from header response  
app.use('/', router);

    
    


//-------------------------------------------------------- get zone -----------------------------------------------------------------------







//-------------------------------------------------------- view zone -----------------------------------------------------------------------








// app.post('/customer/currency/balance',(req,res)=>{
    
	
//     const citizenId = req.body.citizenId
//         db.query("SELECT * FROM `customer's-Foreign-Currencies` WHERE citizenId = ?",[citizenId],(err,result)=>{
//             if(err){
//             console.log(err)    
//             }else {
//             res.send(result)
//             }
//         })
//     })
    


//     app.post('/wallet',(req,res)=>{

//         const citizenId = req.body.citizenId
                    
//         db.query("SELECT b.`accountNum`,b.`balance`FROM`customer-Identification`c,`book-Account` b WHERE c.citizenId = b.citizenId  AND c.citizenId = ?",
//         [citizenId],(err,result)=>{
//                 if(err){
//                 console.log(err)
//                 }else {
//                 res.send(result)
//                 }
//             })
//         })
        
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

//----------------------------------------------------------------insert zone ----------------------------------------------------------

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




// app.post('/create/book',(req,res)=>{
    
//     const citizenId = req.body.citizenId;
//     const accountNum =req.body.accountNum
    

//     db.query("INSERT INTO `book-account`(citizenId,accountNum) VALUES (?,?)",[citizenId,accountNum],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//             db.query("INSERT INTO `transaction`(fromAccount,toAccount,value,note,categoryId,transactionTypeId) VALUES (?,?,?,?,?,?)",
//             [9999999999,accountNum,500,"Create book",10,5],(err1,result1)=>{
//                      if(err1){
//                          console.log(err)
//                     }else{
//                         res.send(result1)
//                     }
//             })
//         }
//     })
// })

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

// app.post('/create/transaction/card',(req,res)=>{
    
//     const fromCreditCardId = req.body.fromCreditCardId
//     const value = req.body.value
//     const note = req.body.note
//     const categoryId = req.body.categoryId
//     const transactionTypeId = req.body.transactionTypeId
//     const PaymentDueDate = req.body.PaymentDueDate
//     const InstallmentPlan = req.body.InstallmentPlan 
//     const Interest = req.body.Interest

//     db.query("INSERT INTO `credit-card-transaction`(fromCreditCardId,value,note,categoryId,transactionTypeId,PaymentDueDate,InstallmentPlan,Interest) VALUES (?,?,?,?,?,?,?,?)",
//     [fromCreditCardId,value,note,categoryId,transactionTypeId,PaymentDueDate,InstallmentPlan,Interest],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })


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


// app.post('/create/card/subscription',(req,res)=>{
    
//     const cardId = req.body.cardId
//     const subProductId = req.body.subProductId

//     db.query("INSERT INTO `card-subscription`(cardId,subProductId) VALUES (?,?)",
//     [cardId,subProductId],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })

// app.post('/create/product',(req,res)=>{
    
//     const subProductId = req.body.subProductId
//     const monthlyPay = req.body.monthlyPay
//     const productName = req.body.productName

//     db.query("INSERT INTO `subscription-product`(subProductId,monthlyPay,productName) VALUES (?,?,?)",
//     [subProductId,monthlyPay,productName],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })




const port = process.env.PORT || 3001
app.listen(port,() =>{
    console.log("server is running on port 3001");
})



