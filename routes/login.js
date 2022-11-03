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
      
    con.connect(async (err) => {
        if (err) console.log(err);
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
  function encrypt(password) {
      return bcrypt.hash(password, 10)
  }