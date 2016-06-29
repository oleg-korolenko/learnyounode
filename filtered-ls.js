let fs = require('fs');

let dir = process.argv[2];
let extension = process.argv[3];

fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
        if (file.split('.')[1] === extension) {
            console.log(file);
        }
    });
});
