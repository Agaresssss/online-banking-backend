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



    module.exports = {
        updateBalanceLimit
    }