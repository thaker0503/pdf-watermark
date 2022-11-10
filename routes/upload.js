var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');



const upload = multer({
    storage: multer.diskStorage({
        destination: path.join(__dirname, './public/uploads/'),
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
    // console.log(req.file, req.body)
    modifyPdf();
    res.send({
        msg: "Success", data: {
            file: req.file.originalname,
            path: req.file.path,
            watermark: req.body.watermark
    }})
});

module.exports = router;
