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
    db.query(
      "UPDATE `customer-identification` SET kycStatus = 1 WHERE citizenId = ?",
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

const transactionAll = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT DISTINCT t.transactionId,t.fromAccount,t.toAccount,t.value,t.dateAndTime,t.note FROM `customer-Identification` p,`book-Account` Ba,`transaction`t WHERE p.citizenId = Ba.citizenId AND (Ba.accountNum = t.fromAccount OR Ba.accountNum = t.toAccount) AND p.citizenId = ?",
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

const transactionSwap = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT Ct.transactionId,Ci.citizenId,Ct.fromCurrency,Ct.toCurrency,Ct.`value`,Ct.dateAndTime,Ct.rate,Ct.fee FROM `customer-Identification` Ci,`currency-exchange-transaction` Ct  WHERE Ci.citizenId = Ct.citizenId AND Ci.citizenId = ?",
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
  updateKYC,
  transactionAll,
  transactionSwap,
};
