const http = require("node:http");

const {
  errorPage,
  getAdverts,
  addAdvert,
  getStyles,
  getHome,
  getImage,
  getAverage,
  getScript,
  calcAverage,
  getHistory,
  getFavicon,
  deleteAdvert,
} = require("./controllers/index");

const server = http.createServer((req, res) => {
  console.log("req.method + req.url: ", req.method + req.url);
  switch (req.method + req.url) {
    case "GET/":
      getHome(req, res);
      break;
    case "GET/adverts":
      getAdverts(req, res);
      break;
    case "POST/adverts":
      addAdvert(req, res);
      break;
    case "DELETE/adverts":
      deleteAdvert(req, res);
      break;
    case "GET/avr-numbers":
      getAverage(req, res);
      break;
    case "GET/avr-numbers/history":
      getHistory(req, res);
      break;
    case "POST/avr-numbers":
      calcAverage(req, res);
      break;
    case "GET/styles.css":
      getStyles(req, res);
      break;
    case "GET/script.js":
      getScript(req, res);
      break;
    case "GET/static/images/20191021_114316.jpg":
      getImage(req, res);
      break;
    case "GET/static/images/favicon.ico":
      getFavicon(req, res);
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
