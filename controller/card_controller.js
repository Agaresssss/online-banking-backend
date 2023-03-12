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
module.exports = {
    index,
    updateBalanceLimit
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

