const fs = require('fs');
const { degrees, PDFDocument, rgb, StandardFonts, BlendMode } = require('pdf-lib');

const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
async function modifyPdf(file,  watermark){
    // console.log("Modifying this file", file.originalname)
    // file = file.arrayBuffer();
    // const pdfDoc = await PDFDocument.load(fs.readFileSync(file.buffer));
    const pdfDoc = await PDFDocument.load(file.buffer);
    const pages = pdfDoc.getPages();
    // const firstPage = pages[0];
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    const textWidth = timesRomanFont.widthOfTextAtSize(watermark, 50);
    const textHeight = timesRomanFont.heightAtSize(50);
    for (let i = 0; i < pages.length; i++) {
        const { width, height } = pages[i].getSize();
        pages[i].drawText(watermark, {
            x: width / 2 - textWidth / 2,
            y: height / 2 - textHeight / 2,
            opacity: 0.6,
            size: 50,
            font: timesRomanFont,
            color: rgb(0, 0, 0),
            // rotate: degrees(45),
            blendMode: BlendMode.Overlay
        });
        
    }
    const pdfBytes = await pdfDoc.save();
    const firebaseStorage = getStorage();

    const filename = file.originalname.split('.')[0] + '-updated-' + Date.now()
    const storageRef = ref(firebaseStorage, filename );
    await uploadBytes(storageRef, pdfBytes).then((snapshot) => {
        // console.log("Snapshot ==========>", snapshot)
        console.log("Upload Success")
        getDownloadURL(ref(firebaseStorage, filename)).then(url => {
            console.log("URL ============> From addWatermark.js",url)
        })
    });
}

module.exports = modifyPdf;

