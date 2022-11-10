const express = require('express');
const router = express.Router();
// var key = 'helloworldhelloworldhelloworld';
// var encryptor = require('simple-encryptor')(key);
var CryptoJS = require("crypto-js");

router.post('/', async(req,res) => {
    const encLink = await encryptWithCryptoJS(req.body.link);
    res.send({
        link: encLink
    })
})


async function encryptWithCryptoJS(plainText){
    // const key = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
    // const iv1 = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
    // const encrypted = CryptoJS.AES.encrypt(plainText, key, {
    //     keySize: 16,
    //     iv: iv1,
    //     mode: CryptoJS.mode.ECB,
    //     padding: CryptoJS.pad.Pkcs7
    // });
    // const encrypted = CryptoJS.AES.encrypt(JSON.stringify({ plainText }), 'secret').toString();

    // return encrypted;
    // const str = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZDg5MjMxMjc5OTkxYjJhNGMwMjdjMGIiLCJoc2giOiIkMmEkMTMkWk53Y0cubjdRZFIybDA3S1RHd2RoLlN0QksudW5GSFVGLkZnZ0tQTGlUV2pOVEFqVy9SMm0iLCJncmFudCI6ImFjY2VzcyIsImlhdCI6MTU2OTI2ODUwMiwiZXhwIjoxNjAwODI2MTAyfQ.PQcCoF9d25bBqr1U4IhJbylpnKTYiad3NjCh_LvMfLE~9~null~undefined~434ce0149ce42606d8746bd9`;

    const cryptoInfo = CryptoJS.AES.encrypt(JSON.stringify({ plainText }), 'secret').toString();

    console.log({ cryptoInfo });
    return cryptoInfo
}


// async function encrypt(password) {
//     var encrypted = await encryptor.encrypt(password);
//     console.log("Encrypted ==========================================",encrypted)
//     // Should print gibberish:
//     return encrypted;
//     // Create an encryptor:
//     // return new Promise((resolve,reject) => {
//     // bcrypt.hash(password, 10, (er, encrypted) => {
//     // if (er) reject(er)
//     // resolve(encrypted)
//     // })
//     // })
// }
module.exports = router;
