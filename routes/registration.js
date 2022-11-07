var express = require("express");
const cors = require('cors');
const user = require("./config")
const app = express();
app.use(express.json());
app.use(cors());
var router = express.Router();
// const mysql = require('mysql');
const bcrypt = require('bcrypt');
// const e = require("express");

function encrypt(password) {
  return bcrypt.hash(password, 10)
}
router.post('/', async (req, res) => {
  const data = req.body;
  await user.add(data)
  const hash = await bcrypt.hash(req.body.password, 10)

  encrypt(req.body.password);
  res.send("Checked") 
})

module.exports = router;
