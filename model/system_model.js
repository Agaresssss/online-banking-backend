const db = require('../mysql.js')


const getCustomer = async (req,res) => {
    db.query("SELECT * FROM `customer-identification`",(err,result) => {
        if (err){
           res.send(err);
        }else{
           res.send(result);
        }
    });
} 

module.exports = {
    getCustomer
}