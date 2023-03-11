const systemModel = require('../model/system_model.js')



async function  welcome(req, res) {
    res.send('Welcome to the login server');
}

async function getCustomer(req, res) {
     const result = await systemModel.getCustomer(req,res);
        
}

function getAllProduct(req, res) {
    res.send('get all product');
}


module.exports = {
    welcome,
    getCustomer,
    getAllProduct
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


