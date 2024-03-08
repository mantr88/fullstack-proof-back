const fs = require("fs");
const path = require("path");

const getFavicon = (req, res) => {
  const favIconPath = path.join(
    __dirname,
    "../static",
    "images",
    "favicon.ico"
  );
  console.log("favIconPath: ", favIconPath);
  fs.readFile(favIconPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "multipart/form-data" });
      res.end(data);
    }
  });
};

module.exports = getFavicon;
