const zlib = require('zlib');
const fs = require('fs');

const inputFile = fs.createReadStream('Q5&Q6.txt');
const outputFile = fs.createWriteStream('../Q6/Q6.zip');

inputFile.pipe(zlib.createGzip()).pipe(outputFile);