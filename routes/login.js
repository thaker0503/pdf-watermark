const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt');
const { uuid } = require('uuidv4');

const { getDatabase, ref, onValue } = require("firebase/database");

router.post('/', async (req, res) => {
    
  const db = getDatabase();
  // const dbref = ref(db);
  // get(child(dbref,'userDetails/' + uuid())).then((snapshot)=>{
  //   if (snapshot.exists()) {
  //   const check = await compare(req.body.password, data.password);
  //    if (check) {
      
  //    }
  //   }
  //   else{
  //       set(ref(db, 'userDetails/' + uuid()), {
  //       email,
  //       password : password
  //     });
  //   }
  // })
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