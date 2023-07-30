const zlib = require('zlib');
const fs = require('fs');

const inputFile = fs.createReadStream('Q6.zip');
const outputFile = fs.createWriteStream('Q5&Q6.txt');

inputFile.pipe(zlib.createUnzip()).pipe(outputFile);