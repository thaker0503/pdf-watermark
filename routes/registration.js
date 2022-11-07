var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const { getDatabase, ref, set } = require("firebase/database");
const { uuid } = require('uuidv4');

async function encrypt(password) {
  return bcrypt.hash(password, 10)
}

router.post('/', async (req, res) => {
  req.body.password = await encrypt(req.body.password);
  await writeUserData(req.body.email, req.body.password);
  res.send({
    msg: "User Registered Successfully"
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
