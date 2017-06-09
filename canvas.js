const pdfjs = require('pdfjs-dist');
const fs = require('fs');

document.addEventListener('DOMContentLoaded', function () {
    console.log('document is ready. I can sleep now');

    var testFile = new Uint8Array(fs.readFileSync('pdf-sample.pdf'));

    pdfjs.getDocument(testFile);
    // .then(function (pdfDocument) {
    //     console.log('num pages: ' + pdfDocument.numPages);
    // });
});
