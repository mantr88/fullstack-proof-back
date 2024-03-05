const fs = require("fs");
const path = require("path");

const getAverage = (req, res) => {
  const htmlPath = path.join(__dirname, "../static", "avr-nmbrs.html");
  fs.readFile(htmlPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
};

module.exports = getAverage;
