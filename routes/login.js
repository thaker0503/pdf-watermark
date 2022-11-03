var express = require("express");
var router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt');
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
//   });
  router.post('/', async (req, res) => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database:"userDetails"
      });
    await databasesql(con,req.body.email,req.body.password);
    // console.log("Response",result);
        res.send({
            msg: "Data added successfully",
            // Result: result
        // });
    })
    encrypt(req.body.password);
    // res.send("Facing Errors")
   
  })
  
  async function databasesql(con,email,password){
      
    const sql = "INSERT INTO `credentials` (`email`, `password`, `verified`) VALUES ('"+email+"', '"+password+"', '0');"
      
    await con.connect(async (err) => {
        if (err) console.log(err);
        console.log("Connection Success");
        await con.query(sql, function (err, result) {
          if (err) console.log(err);
          console.log("Result: " + JSON.stringify(result));
          console.log(result.affectedRows);
          if(result.affectedRows > 0){
            console.log("Running If")
            return true;
          }
        });
     });
  }
async function encrypt(password) {
     const hash = await bcrypt.hash(password, 10)
     const match = await bcrypt.compare(password, hash)
     if (match) {
      console.log("encrypt:", password);
      console.log("decrypt:", hash);
     }
 }
 
module.exports = router;
