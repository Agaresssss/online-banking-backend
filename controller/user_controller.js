const userModel = require("../model/user_Model.js");

async function index(req, res) {
  res.send("user router");
}

async function login(req, res) {
   const { email, password } = req.body;
   console.log(email, password)
  await userModel.login(email,password).then((result) => {
    res.send(result);
  });
}

module.exports = {
  index,
  login,
};
