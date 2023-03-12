const db = require("../mysql.js");

const getCustomer = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM `customer-identification`", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getAllProduct = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM `subscription-product`", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const checkAlreadyRegister = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT *  FROM `customer-Identification` WHERE email = ? AND citizenId = ?",
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
const checkProduct = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM `subscription-product` WHERE subProductId = ?",
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
const checkCard = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT cardId,currentLimit FROM `customer-card` WHERE cardId = ?",
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

const checkKYC = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT kycStatus FROM `customer-identification` WHERE email = ? AND password = ?",
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

const checkAccount = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT Ci.fName,Ci.lName,Ba.accountNum,Ba.balance FROM `book-account`Ba,`customer-identification` Ci WHERE Ba.citizenId = Ci.citizenId AND Ba.accountNum = ?",
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

const viewTransactionMonth = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT ba.citizenId,t.fromAccount,t.toAccount,t.value,t.`dateAndTime` FROM `transaction` t,`book-account`ba WHERE ba.`accountNum` = t.`fromAccount` AND ba.citizenId = ? AND month(dateAndTime) = ?",
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

const citizenCurrency = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT Ci.citizenId, count(DISTINCT currencyId) as numberOfCurrency, count(DISTINCT accountNum) as numberOfAccount FROM `customer-identification` Ci LEFT JOIN `book-account` Ba ON Ba.citizenId = Ci.citizenId LEFT JOIN `customer's-foreign-currencies` Cc ON Cc.citizenId = Ci.citizenId GROUP BY Ci.citizenId;",
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
const citizenSpend = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT bc.accountNum,ct.category,sum(t.`value`) AS totalValue FROM `book-Account` bc, `category-Type` ct, `transaction` t WHERE bc.accountNum = t.fromAccount AND ct.categoryId = t.categoryId AND bc.citizenId = ? GROUP BY (ct.category) ORDER BY (totalValue) DESC",
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
const creditCardSpend = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT cc.cardId, sum(cct.`value`) as totalValue, ct.monthlyLimit, (sum(cct.`value`) / ct.monthlyLimit) * 100 AS percentToUse FROM `customer-card` cc, `credit-card-transaction` cct, `card-type` ct WHERE cc.cardId = cct.fromCreditCardId AND cc.cardTypeId = ct.cardTypeId GROUP BY (cc.cardId) ORDER BY(percentToUse) DESC",
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
const totalBalanceCurrency = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT cc.cardId,sum(cct.`value`) as totalValue,ct.monthlyLimit, (sum(cct.`value`) / ct.monthlyLimit) * 100 AS percentToUse FROM `customer-card` cc, `credit-card-transaction` cct, `card-type` ct WHERE cc.cardId = cct.fromCreditCardId AND cc.cardTypeId = ct.cardTypeId GROUP BY (cc.cardId) ORDER BY(percentToUse) DESC",
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
const userIncomeSpend = (...param) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT Ci.citizenId, sum(T.`value`) +  sum(DISTINCT Ba.balance) AS `Income`,sum(T.`value`) as `Spend`, sum(DISTINCT Ba.balance) as `Difference` FROM `customer-identification` Ci LEFT JOIN `book-account` Ba ON Ba.citizenId = Ci.citizenId LEFT JOIN `transaction` T ON T.fromAccount = Ba.accountNum GROUP BY Ci.citizenId;",
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
  getCustomer,
  getAllProduct,
  checkAlreadyRegister,
  checkProduct,
  checkKYC,
  checkCard,
  checkAccount,
  viewTransactionMonth,
  citizenCurrency,
  citizenSpend,
  creditCardSpend,
  totalBalanceCurrency,
  userIncomeSpend,
};
