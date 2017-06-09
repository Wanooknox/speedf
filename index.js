const {app, BrowserWindow} = require('electron');
const path = require('path');
const pdfjs = require('pdfjs-dist');
const fs = require('fs');

var testFile = new Uint8Array(fs.readFileSync('pdf-sample.pdf'));

app.on('ready', function () {
    var main = new BrowserWindow({
        width: 800,
        height: 600
    });
    main.webContents.openDevTools();
    // main.loadURL('file://' + __dirname + '/index.html');
    main.loadURL(path.join(__dirname, 'index.html'));

    pdfjs.getDocument(testFile).then(function (pdfDocument) {
        console.log('num pages: ' + pdfDocument.numPages);
    });
});
