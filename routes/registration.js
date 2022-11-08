var express = require("express");
var router = express.Router();
const bcrypt = require('bcrypt');
const { getDatabase, ref, set, get, child } = require("firebase/database");
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
  const response = await writeUserData(req.body.email, encPassword);
  console.log(response);
  res.send(response);
});

async function writeUserData(email,password) {
  const db = getDatabase();
  const dbRef = ref(db);
  return new Promise((resolve, reject) => {
    get(child(dbRef, 'userDetails')).then((snapshot) => {
      let a = []
      Object.values(snapshot.val()).forEach((i, k) => {
        a.push({ ...i, ...{ uuid: Object.keys(snapshot.val())[k] } })
      });
      a.forEach(item => {
        if (item.email === email) {
          resolve({
            msg: "User Already Exists",
            msgType: "Error"
          })
        }
        else {
          set(ref(db, 'userDetails/' + uuid()), {
            email: email,
            password: password
          }).then(resolve({
            msg: "User registered Successfully",
            msgType: "Success"
          })).catch(err => {
            if (err) {
              reject(err)
            }
          })
        }
      })
    })
  })
  
}


module.exports = router;
