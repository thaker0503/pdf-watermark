const express = require('express');
const router = express.Router();
var CryptoJS = require("crypto-js");
const { resolveInclude } = require('ejs');

// var key = 'helloworldhelloworldhelloworld';
// var encryptor = require('simple-encryptor')(key);


// router.post('/', async (req,res) => {
//     const decrypted = await decryptionWithCryptoJS(req.body.link)
//     console.log("Decrypt======================",decrypted)
//     res.send({url: decrypted});
// })

// function decryptionWithCryptoJS(cipher){
//     const key = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
//     const iv1 = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
//     const plainText = CryptoJS.AES.decrypt(cipher, key, {
//         keySize: 16,
//         iv: iv1,
//         mode: CryptoJS.mode.ECB,
//         padding: CryptoJS.pad.Pkcs7
//     });

//     return plainText.toString(CryptoJS.enc.Utf8);
// }


// new method to decrypted it 

router.post('/',async(req,res)=>{
    console.log("Req.Link ==============================",JSON.stringify(req.body.link))
    const link = req.body.link
    const decrypted = await decryptWithAES({link})
    console.log("Decrypt============>",decrypted)
    res.send({url:decrypted.str});
})

async function decryptWithAES(cryptoInfo){
    console.log(cryptoInfo)
    const info2 = CryptoJS.AES.decrypt(cryptoInfo.link, 'secret').toString(CryptoJS.enc.Utf8);

    console.log({ info2 });

    // const info3 = JSON.parse(info2);

    // console.log({ str: info3.plainText });
    return info2;
    // const passphrase = "My Secret Passphrase";
    // const key = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8")
    // const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    // const originalText = CryptoJS.AES.decrypt(bytes, 'secret').toString(crypto.enc.Utf8);
    // const  = CryptoJS.enc.Utf8(bytes);
    // console.log("Cipher =========================================",ciphertext)
    // const middle = CryptoJS.AES.decrypt(JSON.parse(ciphertext), 'secret').toString(CryptoJS.enc.Utf8);
    // const originalText = JSON.parse(middle)
    // console.log("Output ===================================",originalText)
    // return new Promise((resolve,reject) =>{
    //     resolve(originalText)
    // })
    // return originalText;
};

//########

//###########
// async function decrypt(link){
//     var decrypted = await encryptor.decrypt(link);
//     return new Promise((resolve,reject) => {
//         console.log("Decrypted ===================================>",decrypted)
//         resolve(decrypted)
//     })
// }

module.exports = router;