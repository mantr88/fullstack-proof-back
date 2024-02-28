const errorPage = (req, res) => {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.write(
    `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Fullstack</title></head><body></html><h1>404</h1><p>Not Found!</p></body>`
  );
  res.end();
};

module.exports = errorPage;
