const db = require("../mysql.js");

const updateBalance = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE `book-account` SET balance = ? WHERE accountNum = ?",
      [...param],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const updateCurrencyBalance = (...param) => {
  return new Promise((resolve, reject) => {
       db.query("UPDATE `customer's-foreign-currencies` SET balanceCurrency = ? WHERE citizenId = ? AND currencyId = ? ",
       [...param],(err,result)=>{
        if (err) {
            reject(err);
          } else {
            resolve(result);
          }
    })
    
  })
       
};

module.exports = {
  updateBalance,
  updateCurrencyBalance,
};
