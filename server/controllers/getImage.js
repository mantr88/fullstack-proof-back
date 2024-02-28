const fs = require("fs");
const path = require("path");

const getImage = (req, res) => {
  const cssPath = path.join(
    __dirname,
    "../static",
    "images",
    "20191021_114316.jpg"
  );
  console.log("cssPath: ", cssPath);
  fs.readFile(cssPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "multipart/form-data" });
      res.end(data);
    }
  });
};

module.exports = getImage;
