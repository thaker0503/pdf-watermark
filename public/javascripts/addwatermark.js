// create modifyPdf function to add watermark to pdf file
// Path: public\javascripts\addwatermark.js
// const pdf = require('pdfjs');
const { atob } = require('buffer');
const fs = require('fs');
// const path = require('path');
const { degrees, PDFDocument, rgb, StandardFonts, BlendMode } = require('pdf-lib');
const { encode, decode } = require('uint8-to-base64');

const modifyPdf = async (file, output, watermark) => {
    console.log("Modifying this file", file)
    // file = file.arrayBuffer();
    // const pdfDoc = await PDFDocument.load(fs.readFileSync(file.buffer));
    const pdfDoc = await PDFDocument.load(file.buffer);
    const pages = pdfDoc.getPages();
    // const firstPage = pages[0];
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    for (let i = 0; i < pages.length; i++) {
        const { width, height } = pages[i].getSize();
        pages[i].drawText(watermark, {
            x: 20,
            y: height / 2 + 250,
            opacity: 0.5,
            size: 50,
            font: timesRomanFont,
            color: rgb(0, 0, 0.67),
            rotate: degrees(-45),
            blendMode: BlendMode.Overlay
        });
        
    }
    const pdfBytes = await pdfDoc.save();
    await fs.writeFileSync("output.pdf", pdfBytes );
    
}

module.exports = modifyPdf;

