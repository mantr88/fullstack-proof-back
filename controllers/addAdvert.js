const fs = require("node:fs/promises");
const path = require("node:path");
const createObjectFromString = require("../helpers/createObjFromStr");
const createAdvertsTemplate = require("../helpers/createAdvertsTemplate");

const addAdvert = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data", "adverts.json");

    const advertsJson = await fs.readFile(filePath);
    let adverts = JSON.parse(advertsJson);

    let body = "";
    req
      .on("data", (chunk) => {
        body += chunk.toString();
      })
      .on("end", async () => {
        const objectFromBody = createObjectFromString(body);
        const newAdvert = {
          date: new Date().toLocaleString(),
          ...objectFromBody,
        };
        adverts.push(newAdvert);

        await fs.writeFile(filePath, JSON.stringify(adverts));

        const result = await createAdvertsTemplate(adverts);
        const markup = result.toString();

        res.writeHead(303, {
          "Content-Type": "text/html",
          Location: "/adverts",
        });
        res.write(markup);
        res.end();
      });
  } catch (error) {
    console.log("error:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.write("Internal Server Error");
    res.end();
  }
};

module.exports = addAdvert;
