let fs = require("fs");
let file = process.argv[2];

fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    let lines = data.toString().split("\n");
    /*eslint no-console: "error"*/
    console.log(lines.length - 1);
});
