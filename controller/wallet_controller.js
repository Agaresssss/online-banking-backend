const walletModel = require("../model/wallet_Model.js");

async function index(req, res) {
    res.send("wallet router");
}

async function balance(req, res) {
    const citizenId = req.body.citizenId
    await walletModel.wallet(citizenId).then((result) => {
        res.send(result);
    })
}

async function updateBalance(req, res) {
    const { accountNum, balance } = req.body;
    await walletModel.updateBalance(accountNum, balance).then((result) => {
        res.send(result);
    });
}

async function updateCurrencyBalance(req, res) {
    const {balanceCurrency,citizenId,currencyId } = req.body;
    await walletModel.updateCurrencyBalance(balanceCurrency,citizenId,currencyId).then((result) => {
        res.send(result);
    })
}

async function currencyBalance(req, res) {
    const citizenId = req.body.citizenId
    await walletModel.currencyBalance(citizenId).then((result) => {
        res.send(result);
    })
}




module.exports = {
    index,
    balance,
    updateBalance,
    updateCurrencyBalance,
    currencyBalance
}


// app.put('/update/balance',(req,res)=>{
//     const accountNum = req.body.accountNum
//     const balance = req.body.balance
//     db.query("UPDATE `book-account` SET balance = ? WHERE accountNum = ?",[balance,accountNum],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })



// app.put('/update/currency/balance',(req,res)=>{
//     const citizenId = req.body.citizenId
//     const currencyId = req.body.currencyId
//     const balanceCurrency = req.body.balanceCurrency
//     db.query("UPDATE `customer's-foreign-currencies` SET balanceCurrency = ? WHERE citizenId = ? AND currencyId = ? ",[balanceCurrency,citizenId,currencyId],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })


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