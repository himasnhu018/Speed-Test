const fs = require("fs");

const fileName = "largeFile.bin";
const fileSizeInMB = 10;
const buffer = Buffer.alloc(1024 * 1024, "0");

const writeStream = fs.createWriteStream(fileName);
for (let i = 0; i < fileSizeInMB; i++) {
  writeStream.write(buffer);
}
writeStream.end(() => console.log("File created:", fileName));
