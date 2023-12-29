const fs = require("fs");
const transformStream = require("stream");
let fileStream = fs.createReadStream(__dirname + "/input.txt");
// console.log("path here",fileStream.path);
let outputStream = process.stdout;

// readStream.pipe(writeStream);
fileStream.pipe(outputStream);

let middleStream = new transformStream.Transform({
    transform(chunk, enc, nextCB){
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCB, 1000);
        nextCB();;
    }
});

let newReadStream = fileStream.pipe(middleStream);
newReadStream.pipe(outputStream);