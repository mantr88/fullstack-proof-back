const http = require("node:http");

const {
  errorPage,
  getAdverts,
  addAdverts,
  getStyles,
} = require("./controllers/index");

const server = http.createServer((req, res) => {
  console.log(req.method + req.url);
  switch (req.method + req.url) {
    case "GET/adverts":
      getAdverts(req, res);
      break;
    case "POST/adverts":
      addAdverts(req, res);
      break;
    case "GET/styles.css":
      getStyles(req, res);
      break;
    default:
      errorPage(req, res);
      break;
  }
});

server.listen(3022, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server started on port 3022");
});
