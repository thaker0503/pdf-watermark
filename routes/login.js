const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt');
const { getDatabase, ref, child, get } = require("firebase/database");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {title:"Pdf Watermark Login"});
});


router.post('/', async (req, res) => {
  const db = getDatabase();
  const dbRef = ref(db);
  const data = await getData(dbRef, req.body.email, req.body.password);
  res.send({...data})
})

async function getData(dbRef,userEmail,userPassword) {
  return new Promise((resolve, reject) => {
    get(child(dbRef, 'userDetails')).then((snapshot) => {
      if (snapshot.val() !== null) {
        let a = [], email = [];
        Object.values(snapshot.val()).forEach((i, k) => {
          a.push({ ...i, ...{ uuid: Object.keys(snapshot.val())[k] } })
        });
<<<<<<< HEAD
     });
  }
  async function decrypt(password) {
  const hash = await bcrypt.hash(password, 10)
  const match = await bcrypt.compare(password, hash)
  if (match) {
   console.log("decrypt:", password);
   console.log("encrypt:", hash);
   return true
  }
  else{
    return false;
  }
}
module.exports = router;
=======
        // console.log(a)

        a.forEach(item => {
          console.log("Email ==========>", item.email)
          email.push(item.email)
        })
        if (email.includes(userEmail)) {
          a.forEach(async (item) => {
            const password = await compare(userPassword, item.password);
            // console.log(password)
            if (item.email === userEmail && password) {
              resolve({
                msg: "User Logged In",
                msgType: "Success"
              })
            } else if (item.email === userEmail && !password) {
              resolve({
                msg: "Wrong Password",
                msgType: "Error"
              })
            } else {
              resolve({
                msg: "User Not Registered",
                msgType: "Error"
              })
            }
          })
        } else {
          resolve({
            msg: "User Not Regtistered",
            msgType: "Error"
          })
        }
      } else {
        resolve({
          msg: "User Not Registered",
          msgType: "Error"
        })
      }
    }).catch(err => {if(err) reject(err)})
  })  
}



async function compare(plaintextPassword, hash) {
  return bcrypt.compare(plaintextPassword, hash)
}

module.exports = router;
>>>>>>> main
