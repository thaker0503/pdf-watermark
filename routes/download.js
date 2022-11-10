var express = require('express');
var router = express.Router();
const request = require('request');

router.post('/', (req, res) => {
    res.setHeader('content-disposition', 'attachment; filename=quote.pdf');
    // request('https://firebasestorage.googleapis.com/v0/b/pdf-watermark-a2d77.appspot.com/o/5iQ%20Not%20this%20time%20_20220929_0001-updated-1668065421001?alt=media&token=729df798-1adc-47f0-8d5a-160f24c7b73d').pipe(res)
    console.log(req.body.link)
    request(req.body.link).pipe(res);
    // res.end();
})

module.exports = router;