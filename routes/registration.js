var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const { getDatabase, ref, set, child } = require("firebase/database");
const { v4:uuid } = require('uuid');
const { get } = require("http");

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
  const dbref = ref(db)
  get(child(dbref,'userDetails/' + email)).then((snapshot)=>{
  if (snapshot.exists()) {
    console.log("Already Registered")
  }
  else{
      set(ref(db, 'userDetails/' + uuid()), {
      email,
      password : password
    });
  }
})
 
}


module.exports = router;
