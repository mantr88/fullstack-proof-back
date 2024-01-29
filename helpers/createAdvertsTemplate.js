const createAdvertsTemplate = async (adverts) => {
  if (adverts.length === 0) {
    return `<li>
    <p>Same author</p>
    <p>Same text of advert<p/>
    </li>`;
  } else {
    return adverts.map((item) => {
      return `<li>
    <p>${item.author}</p>
    <p>${item.text}<p/>
    </li>`;
    });
  }
};

module.exports = createAdvertsTemplate;
