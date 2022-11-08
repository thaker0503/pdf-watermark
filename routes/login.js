const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt');
const { getDatabase, ref, child, get } = require("firebase/database");

router.post('/', async (req, res) => {
  const db = getDatabase();
  const dbRef = ref(db);
  get(child(dbRef, 'userDetails')).then((snapshot) => {
    if (snapshot.val() !== null) {
      let a = []
      Object.values(snapshot.val()).forEach((i, k) => {
        a.push({ ...i, ...{ uuid: Object.keys(snapshot.val())[k] } })
      });
      // console.log(a)
      a.forEach(async (item) => {
        const password = await compare(req.body.password, item.password);
        // console.log(password)
        if (item.email === req.body.email && password) {
          res.send({
            msg: "User Logged In",
            msgType: "Success"
          })
        } else if (item.email === req.body.email && !password) {
          res.send({
            msg: "Wrong Password",
            msgType: "Error"
          })
        }
      })
    }
  })
})


async function compare(plaintextPassword, hash) {
  return bcrypt.compare(plaintextPassword, hash)
}

module.exports = router;