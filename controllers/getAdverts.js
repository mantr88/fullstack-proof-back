const fs = require("node:fs/promises");
const path = require("node:path");
const createAdvertsTemplate = require("../helpers/createAdvertsTemplate");
const { error } = require("node:console");

const getAdverts = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data", "adverts.json");

    let advertsString = await fs.readFile(filePath, { encoding: "utf8" });
    let adverts = JSON.parse(advertsString);

    res.writeHead(200, { "Content-Type": "text/html" });

    const result = await createAdvertsTemplate(adverts);
    const markup = result.toString();

    res.write(markup);
    res.end();
  } catch (error) {
    console.log("error:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.write("Internal Server Error");
    res.end();
  }
};

module.exports = getAdverts;
