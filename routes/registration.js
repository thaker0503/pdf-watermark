var express = require("express");
var router = express.Router();
// const mysql = require('mysql');
const bcrypt = require('bcrypt');
// const e = require("express");


function encrypt(password) {
  return bcrypt.hash(password, 10)
}
router.post('/', async (req, res) => {
  
  const hash = await bcrypt.hash(req.body.password, 10)

  encrypt(req.body.password);
  res.send("Checked")

 
})

module.exports = router;
