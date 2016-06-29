var fs = require("fs");
var filePath = process.argv[2];
var file = fs.readFileSync(filePath,"utf8");
var lines = file.split("\n");
console.log(lines.length-1);
