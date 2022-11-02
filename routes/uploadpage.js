var express = require('express');
var router = express.Router();

router.get('/uploadpage', (req, res) => {
    res.render('upload')
})

module.exports = router;
