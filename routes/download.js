const express = require('express');
const router = express.Router()



/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body.link)
  // res.render('download', {title:"Pdf Watermark", link: req.body.link});
  const link = req.body.link
  res.send({link})
  });

module.exports = router;