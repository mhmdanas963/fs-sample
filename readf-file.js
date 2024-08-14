const fs = require("fs");

const content = fs.readFileSync("./text2.txt"); // It will go search for the file text2.txt and reads the data stored which is 0s and 1s and create a buffer and allocate those binary into that buffer

console.log(content.toString("utf-8"));
