// create modifyPdf function to add watermark to pdf file
// Path: public\javascripts\addwatermark.js
const pdf = require('pdfjs');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');
const { PDFPage } = require('pdf-lib');
const { PDFPageLeaf } = require('pdf-lib');
const { PDFPageTree } = require('pdf-lib');
const { PDFPageTreeNode } = require('pdf-lib');
const { PDFPageTreeFactory } = require('pdf-lib');
const { PDFPageTreeFactoryFactory } = require('pdf-lib');

const modifyPdf = async (file, output, watermark) => {
    const pdfDoc = await PDFDocument.load(fs.readFileSync(file));
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
    const timesRomanFont = await pdfDoc.embedFont(pdf.StandardFonts.TimesRoman);
    firstPage.drawText(watermark, {
        x: 5,
        y: height / 2 + 300,
        size: 50,
        font: timesRomanFont,
        color: pdf.rgb(0.95, 0.1, 0.1),
        rotate: pdf.degrees(-45),
    });
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(output, pdfBytes);
}

module.exports = modifyPdf;

