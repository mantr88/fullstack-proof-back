const fs = require("fs");
const path = require("path");

const getHistory = (req, res) => {
  const historyFilePath = path.join(
    __dirname,
    "../data",
    "calcAverageHistory.json"
  );
  fs.readFile(historyFilePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    }
  });
};

module.exports = getHistory;
