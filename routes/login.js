const express = require('express');
const router = express.Router()
const mysql = require('mysql');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database:"userDetails"
      });
      const hash = await bcrypt.hash(password, 10)
    await databasesql(con,req.body.email,hash);
    // console.log("Response",result);
        res.send({
            msg: "Login successfully",
            // Result: result
        // });
    })
    decrypt(req.body.password);
    // res.send("Facing Errors")
   
  })
  
  async function databasesql(con,email,password){
      
    const sql = "INSERT INTO `login` (`email`, `password`, `verified`) VALUES ('"+email+"', '"+password+"', '0');"
      
    con.connect(async (err) => {
        if (err) console.log(err);
        await con.query(sql, function (err, result) {
          if (err) console.log(err);
          console.log("Result: " + JSON.stringify(result));
          console.log(result.affectedRows);
          if(result.affectedRows > 0){
            console.log("Running If")
            return true;
          };
        });
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