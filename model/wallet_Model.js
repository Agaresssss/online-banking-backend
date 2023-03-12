const db = require("../mysql.js");

const balance = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT b.`accountNum`,b.`balance`FROM`customer-Identification`c,`book-Account` b WHERE c.citizenId = b.citizenId  AND c.citizenId = ?",
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
    db.query(
      "UPDATE `customer's-foreign-currencies` SET balanceCurrency = ? WHERE citizenId = ? AND currencyId = ? ",
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

const currencyBalance = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM `customer's-Foreign-Currencies` WHERE citizenId = ?",
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

const createTransactionCurrency = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO `customer's-foreign-currencies`(citizenId,currencyId,balanceCurrency) VALUES (?,?,?)",
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
const createforeignCurrency = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO `currency-exchange-transaction`(citizenId,fromCurrency,toCurrency,value,note,rate,fee) VALUES (?,?,?,?,?,?,?)",
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
  balance,
  updateBalance,
  updateCurrencyBalance,
  currencyBalance,
  createTransactionCurrency,
  createforeignCurrency,
};
