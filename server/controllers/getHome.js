const fs = require("fs");
const path = require("path");

const getHome = (req, res) => {
  const cssPath = path.join(__dirname, "../static", "home.html");
  fs.readFile(cssPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
};

module.exports = getHome;
