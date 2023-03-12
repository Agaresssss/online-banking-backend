const bookModel = require("../model/book_Model.js");

async function index(req, res) {
  res.send("book router");
}

async function createTransaction(req, res) {
  const { accountNum } = req.body;
  await bookModel.createTransaction(accountNum).then((result) => {
    res.send(result);
  });
}

async function createBook(req, res, next) {
  const { citizenId, accountNum } = req.body;
  try {
    const bookResult = await bookModel.createBook(citizenId, accountNum);
    const transactionResult = await bookModel.createTransaction(accountNum);

    res.send({ bookResult, transactionResult });
  } catch (err) {
    res.send(err);
  }
}

module.exports = {
  index,
  createBook,
  createTransaction,
};

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
