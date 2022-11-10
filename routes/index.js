var express = require('express');
var router = express.Router();
var multer = require('multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PDF  Adder' });
});

const upload = multer({
  storage: multer.memoryStorage({
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      // console.log("file", file)

      const ext = file.originalname.split('.').pop();
      // console.log(ar);
      // const ext = ar[ar.length - 1];
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + ext);
    }
  })
});

router.post('/', upload.single('uploadedPdf'), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any 
  console.log("File ==> " + req.file + "File ==> "+ req.body)
  res.send({ msg: "Success" });
})



module.exports = router;
