let fs = require('fs');

module.exports = (dir, ext, callback) => {

    fs.readdir(dir, (err, list) => {
        if (err) return callback(err);
        list = list.filter((file) => {
            return file.split('.')[1] === ext;
        })
        callback(null, list);
    });
}
