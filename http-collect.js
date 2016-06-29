let http = require("http");
let url = process.argv[2];
//let received = [];
let received = "";
let numberOfSymbols = 0;

http.get(url, (response) => {
    response.setEncoding("utf8");
    response
        .on("data", (data) => {
            numberOfSymbols += data.length;
            received += data;
        })
        .on("end", () => {
            console.log(numberOfSymbols);
            console.log(received);
        });
});
