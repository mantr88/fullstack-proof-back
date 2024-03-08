const createAdvertsTemplate = async (adverts) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./images/favicon.ico" />
    <link rel="stylesheet" href='/styles.css'/>
    <title>Adverts</title>
    </head>
    <body>
      <header class="header">
      <nav>
        <ul class="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/adverts">Adverts</a></li>
          <li><a href="/avr-numbers">Average numbers</a></li>
        </ul>
      </nav>
    </header>
    <main>
    <h1 class='title'>Adverts</h1>
    <form id="adverts-form" method="post" class='form'>
      <label for="author" class="form-field">
        Author
        <input class='form-input' type="text" name="author" id="author" placeholder="Enter your name"/>
      </label>
      <label for="text" class="form-field">
        Text your adverts
        <textarea class='form-input' type="text" name="text" id="text" rows="5" placeholder="Enter text of ads"></textarea>
      </label>
      <button type="submit" class='submit-btn'>Add adverts</button>
    </form>
    <h3>Published adverts</h3>
    <ul class='adverts-list'>${
      adverts.length === 0
        ? `<li>
    <p>Same author</p>
    <p>Same text of advert<p/>
    </li>`
        : adverts
            .map((item) => {
              return `<li>
    <p class="adverts-list-text"><span class="adverts-list-text">Author: </span>${item.author}</p>
    <p class="adverts-list-text"><span>Text: </span>${item.text}<p/>
    </li>`;
            })
            .join("")
    }
    </ul>
    </main>
    </body>
    </html>`;
};

module.exports = createAdvertsTemplate;
