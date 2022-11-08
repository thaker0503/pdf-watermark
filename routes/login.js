const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt');
const { getDatabase, ref, onValue, orderByChild, query, equalTo, child, DataSnapshot } = require("firebase/database");

router.post('/', async (req, res) => {
    
  const db = getDatabase();
  const emailCheckRef = ref(db, 'userDetails');
  // const teat = orderByChild(emailCheckRef);
  onValue(ref(child(emailCheckRef, orderByChild('email'), equalTo('test2@test.com'))), (snapshot) => {
    console.log(snapshot)
  })



  // onValue(emailCheckRef, async (snapshot) => {
  //   const data = snapshot.val();
  //   // const check = await compare(req.body.password, data.password);
  //   // console.log(check);
  //   // check ? res.send({
  //   //   msg:"Correct Password"
  //   // }) : res.send({
  //   //   msg:"Wrong Password"
  //   // })
  // });
  })

function compare(plaintextPassword, hash) {
  return bcrypt.compare(plaintextPassword, hash)
}

module.exports = router;