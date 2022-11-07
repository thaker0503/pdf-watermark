var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
const fs = require('fs')
const modifyPdf = require('../public/javascripts/addwatermark');

const upload = multer({
    storage: multer.memoryStorage({
        destination: path.join(__dirname, '../public/uploads/'),
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

router.post('/', upload.single('uploadedPdf'), async (req, res) => {
    const file = req.file
    // const output = path.join(__dirname + '/output')
    const output = await modifyPdf(file, req.body.watermark).catch((err) => {
        if (err) throw err;
    })
    console.log("URL ==========> From main file",output);
    res.send({
        file: file.originalname,
        watermark: req.body.watermark,
        url : output
    })
});

module.exports = router;
