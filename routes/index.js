var express = require('express');
var router = express.Router();
var multer = require('multer');
const request = require('request');
// router.set("view engine","ejs");


/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  // res.render('login', {title:"Pdf Watermark login"});
  res.render('login', { title: 'PDF  watermark login ' });
=======
  res.render('index', { title: 'PDF  Adder' });
>>>>>>> main
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


<<<<<<< HEAD
// router.post('/download-file', (req, res, next)=>{
//   // request('https://firebasestorage.googleapis.com/v0/b/pdf-watermark-a2d77.appspot.com/o/14944-34113-1-PB.pdf?alt=media&token=8db55a5a-d664-46cf-93d5-cbc73178655c').pipe(res)
//   res.setHeader('content-disposition', 'attachment; filename = quote.pdf');
//   request(req.body.link).pipe(res);
  

// })
=======

>>>>>>> main
module.exports = router;
