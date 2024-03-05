const fs = require("node:fs/promises");
const path = require("node:path");

const calcAverage = async (req, res) => {
  try {
    const historyFilePath = path.join(
      __dirname,
      "../data",
      "calcAverageHistory.json"
    );

    const historyBlob = await fs.readFile(historyFilePath);
    const history = JSON.parse(historyBlob);

    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", async () => {
        body = Buffer.concat(body).toString();
        const { number, isNegative, isFraction } = JSON.parse(body);
        let prevNumber = 0;

        if (history[history.length - 1] !== undefined) {
          prevNumber = history[history.length - 1].givenNumber;
        }
        const currentNumber = Number(number.replace(",", "."));
        let averageNumber = null;
        if (isFraction === true || isNegative === true) {
          averageNumber = (prevNumber + currentNumber) / 2;
        } else {
          averageNumber =
            (prevNumber + Math.trunc(Math.abs(currentNumber))) / 2;
        }

        const resultingObj = {
          prevNumber,
          givenNumber: currentNumber,
          averageNumber,
        };

        history.push(resultingObj);
        await fs.writeFile(historyFilePath, JSON.stringify(history));

        res.write(JSON.stringify(resultingObj));
        res.end();
      });
  } catch (error) {
    console.log("error:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.write("Internal Server Error");
    res.end();
  }
};

module.exports = calcAverage;
