var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const { getDatabase, ref, set } = require("firebase/database");
const { uuid } = require('uuidv4');

function encrypt(password) {
  return bcrypt.hash(password, 10)
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
