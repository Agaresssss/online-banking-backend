const db = require('../mysql.js');


const getCustomer = (req,res) => { 
    db.query('SELECT * FROM `customer-identification`',(err,result)=>{
        if(err){
        res.send(err)
    }else{
        res.send(result)
    }
});
}

const getAllProduct = (req,res) => {
    db.query("SELECT * FROM `subscription-product`",(err,result)=>{
                if(err){
                    console.log(err)
                }else{
                    res.send(result)
                }
            })
}

module.exports = {
    getCustomer,
    getAllProduct
}