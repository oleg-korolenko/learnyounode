const http = require("http");
const bl = require("bl");
let collected = [];
let cpt = 0;

for (let i = 0; i < 3; i++) {
    http.get(process.argv[2 + i], (response) => {
        response.pipe(bl((err, data) => {
            if (err) throw err;
            data = data.toString();
            collected[i] = data;
            cpt++;
            if (cpt == 3) printAll();
        }));
    });
}

function printAll() {
    collected.forEach((data) => console.log(data));
}
