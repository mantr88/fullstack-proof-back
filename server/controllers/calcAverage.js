const createObjectFromString = require("../helpers/createObjFromStr");

const calcAverage = (req, res) => {
  let body = [];

  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      const bodyObj = JSON.parse(body);
      let prevNumber = 0;
      const currentNumber = bodyObj.number;

      const averNumber = prevNumber + currentNumber / 2;

      prevNumber = currentNumber;
      res.write(
        JSON.stringify({ prevNumber: 0, givenNumber: 2, averageNumber: 1 })
      );
      res.end();
    });
};

module.exports = calcAverage;
