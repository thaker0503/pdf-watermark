var express = require("express");
var router = express.Router();
// const mysql = require('mysql');
const bcrypt = require('bcrypt');
const { getDatabase, ref, set } = require("firebase/database");

// const db = getDatabase();
// const e = require("express");


async function encrypt(password) {
  // const hash = await bcrypt.hash(password, 10)
  return bcrypt.hash(password, 10)
}
router.post('/', async (req, res) => {
  

  req.body.passweord = await encrypt(req.body.password);
  await writeUserData(req.body.email, req.body.password);
  
  res.send("Checked")

 
});

async function writeUserData(email,password) {
  const db = getDatabase();
  await set(ref(db, 'userDetails/' + email), {
    email,
    password : password
  });
}


module.exports = router;
