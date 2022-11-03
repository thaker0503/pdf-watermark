// create modifyPdf function to add watermark to pdf file
// Path: public\javascripts\addwatermark.js
// const pdf = require('pdfjs');
const { atob } = require('buffer');
const fs = require('fs');
// const path = require('path');
const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { encode, decode } = require('uint8-to-base64');

const modifyPdf = async (file, output, watermark) => {
    console.log("Modifying this file", file)
    // file = file.arrayBuffer();
    // const pdfDoc = await PDFDocument.load(fs.readFileSync(file.buffer));
    const pdfDoc = await PDFDocument.load(file.buffer);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    firstPage.drawText(watermark, {
        x: width / 2,
        y: height / 2,
        size: 50,
        font: timesRomanFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(-45),
    });
    const pdfBytes = await pdfDoc.save();
    await fs.writeFileSync("output.pdf", pdfBytes );
    
}

module.exports = modifyPdf;

