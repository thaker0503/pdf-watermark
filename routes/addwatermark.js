var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
const modifyPdf = require('../public/javascripts/addwatermark');
// const filesPath = '../public/uploads';
// const { PDFNet } = require('@pdftron/pdfnet-node');

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
    const output = path.join(__dirname + '/output')
    await modifyPdf(file,output,req.body.watermark);
    res.send({
        file: file.originalname,
        watermark: req.body.watermark
    })
});

module.exports = router;