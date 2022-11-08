var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const { getDatabase, ref, set } = require("firebase/database");
const { v4: uuid } = require('uuid');

router.get('/', function (req, res, next) {
  res.render('registration', { title: "Pdf Watermark registration" });
});

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
  // console.log(req.body)
  const encPassword = await encrypt(req.body.password);
  await writeUserData(req.body.email, encPassword);
  res.send({
    msg: `User Registered Successfully with ${req.body.email}`,
    msgType: "Success"
  });
});

async function writeUserData(email,password) {
  const db = getDatabase();
  await set(ref(db, 'userDetails/' + uuid()), {
    email: email,
    password : password
  });
  
}


module.exports = router;
