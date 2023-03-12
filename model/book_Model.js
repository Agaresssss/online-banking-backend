const db = require("../mysql.js");

const createTransaction = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO `transaction`(fromAccount,toAccount,value,note,categoryId,transactionTypeId) VALUES (?,?,?,?,?,?)",
      [9999999999, param, 500, "Create book", 10, 5],
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

const createBook = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO `book-account`(citizenId,accountNum) VALUES (?,?)",
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
  createBook,
  createTransaction
};
