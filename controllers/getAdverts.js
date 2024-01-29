const fs = require("node:fs/promises");
const path = require("node:path");
const createAdvertsTemplate = require("../helpers/createAdvertsTemplate");

const getAdverts = async (req, res) => {
  console.log(req.url, req.method);
  try {
    const filePath = path.join(__dirname, "../data", "adverts.json");

    let advertsString = await fs.readFile(filePath, { encoding: "utf8" });
    let adverts = JSON.parse(advertsString);

    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(
      `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fullstack</title>
    </head>
    <body>
    <h1>Adverts page</h1>
    <form id="adverts-form" method="post" action="./adverts">
      <label for="author">
      Author
      <input type="text" name="author" id="author"/>
      </label>
      <label for="text">
      Text your adverts
      <input type="text" name="text" id="text" />
      </label>
      <button type="submit">Add adverts</button>
    </form>
    <p>Adverts</p>
    <ul>${await createAdvertsTemplate(adverts)}
    </ul>
    </body>
    </html>`
    );
    res.end();
  } catch (error) {
    console.log("error:", error);
  }
};

module.exports = getAdverts;
