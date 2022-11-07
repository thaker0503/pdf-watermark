var express = require("express");
var router = express.Router();
// const mysql = require('mysql');
const firebase = require('firebase');
const bcrypt = require('bcrypt');
// const e = require("express");

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

firebase.initializeApp(firebaseConfig)
let database = firebase.database();

function encrypt(password) {
  return bcrypt.hash(password, 10)
}
router.post('/', async (req, res) => {
  
  const hash = await bcrypt.hash(req.body.password, 10)

  encrypt(req.body.password);
  res.send("Checked") 
})

module.exports = router;
