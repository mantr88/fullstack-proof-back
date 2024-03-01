const fs = require("fs");
const path = require("path");

const getScript = (req, res) => {
  const scriptPath = path.join(__dirname, "../static", "script.js");
  fs.readFile(scriptPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/js" });
      res.end(data);
    }
  });
};

module.exports = getScript;
