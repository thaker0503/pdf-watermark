const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt');
const { getDatabase, ref, onValue } = require("firebase/database");

router.post('/', async (req, res) => {
    
  const db = getDatabase();
  const emailCheckRef = ref(db, 'userDetails/' + req.body.email);
  onValue(emailCheckRef, async (snapshot) => {
    const data = snapshot.val();
    const check = await compare(req.body.password, data.password);
    console.log(check);
    check ? res.send({
      msg:"Correct Password"
    }) : res.send({
      msg:"Wrong Password"
    })
  });
  })

function compare(plaintextPassword, hash) {
  return bcrypt.compare(plaintextPassword, hash)
}

module.exports = router;