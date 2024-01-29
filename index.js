const http = require("node:http");

const { errorPage, getAdverts } = require("./controllers/index");

const server = http.createServer((req, res) => {
  switch (req.url || req.method) {
    case "/adverts" || "GET":
      getAdverts(req, res);
      break;
    default:
      errorPage(req, res);
      break;
  }
});

server.listen(3000, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server started on port 3000");
});
