const createAdvertsTemplate = async (adverts) => {
  return `<!DOCTYPE html>
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
    <input type="text" name="author" id="author" />
  </label>
  <label for="text">
    Text your adverts
    <input type="text" name="text" id="text" />
  </label>
  <button type="submit">Add adverts</button>
</form>
    <p>Adverts</p>
    <ul>${
      adverts.length === 0
        ? `<li>
    <p>Same author</p>
    <p>Same text of advert<p/>
    </li>`
        : adverts
            .map((item) => {
              return `<li>
    <p>${item.author}</p>
    <p>${item.text}<p/>
    </li>`;
            })
            .join("")
    }
    </ul>
    </body>
    </html>`;
};

module.exports = createAdvertsTemplate;
