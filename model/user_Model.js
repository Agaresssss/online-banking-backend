const db = require("../mysql.js");

const login = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT *  FROM `customer-Identification` WHERE email = ? AND password = ?",
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

const updateKYC = (...param) => {
  return new Promise((resolve, reject) => {
        db.query("UPDATE `customer-identification` SET kycStatus = 1 WHERE citizenId = ?",
    [...param],(err,result)=>{
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}


module.exports = {
  login,
  updateKYC
};
