let filterModule = require('./filter.js');
let dir = process.argv[2];
let filter = process.argv[3];

filterModule(dir, filter, (err, files) => {
    if (err) throw err;
    files.forEach((file) => console.log(file));
});
