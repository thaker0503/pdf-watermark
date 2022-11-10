var express = require("express");
var router = express.Router();
// const mysql = require('mysql');
const bcrypt = require('bcrypt');
// const e = require("express");

/* GET registration page. */
router.get('/', function(req, res, next) {
  res.render('registration', {title:"Pdf Watermark registration"});
});

function encrypt(password) {
  return bcrypt.hash(password, 10)
}
router.post('/', async (req, res) => {
  
  const hash = await bcrypt.hash(req.body.password, 10)

  encrypt(req.body.password);
  res.send("Checked")

 
})

module.exports = router;
