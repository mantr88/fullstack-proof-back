const errorPage = (req, res) => {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.write(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style type="text/css">
        main {
            height: 70vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: black;
            font-size: 24px;
        }
         a {
            color: inherit;
            text-decoration: none;
            font-style: normal;
            cursor: pointer;
            
            &:hover {
              color:blue;
        }
  }
  </style>
    <title>Error page</title>
    </head>
    <body>
    <main>
    <h1>404</h1>
    <p>Not Found!</p>
    <a href="/">Go to the home page ➡️</a>
</main>
    </body>
    </html>`
  );
  res.end();
};

module.exports = errorPage;
