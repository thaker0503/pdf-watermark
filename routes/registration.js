var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const { getDatabase, ref, set } = require("firebase/database");
// const {  } = require("firebase");
const { v4:uuid } = require('uuid');

function encrypt(password) {
  if (password == undefined) {
    return;
  }
  return new Promise((resolve,reject) => {
    bcrypt.hash(password, 10, (er, encrypted) => {
      if (er) reject(er)
      resolve(encrypted)
  })
  })
}

router.post('/', async (req, res) => {
  const encPassword = await encrypt(req.body.password);
  await writeUserData(req.body.email, encPassword);
  res.send({
    // msg: "User Registered Successfully"
    msg: req.body
  });
});

async function writeUserData(email,password) {
  const db = getDatabase();
  await set(ref(db, 'userDetails/' + uuid()), {
    email,
    password : password
  });
  
}


module.exports = router;
