const fs = require("fs");
const path = require("path");

const getStyles = (req, res) => {
  const cssPath = path.join(__dirname, "../public", "styles.css");
  fs.readFile(cssPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    }
  });
};

module.exports = getStyles;
