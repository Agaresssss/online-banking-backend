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

module.exports = {
  login,
};
