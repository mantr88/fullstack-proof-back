console.log("Hello!");

const refs = {
  formRef: document.querySelector("#avr-form"),
  btnRef: document.querySelector(".submit-btn"),
  resultRef: document.querySelector("#result"),
  prevResultListRef: document.querySelector(".prev-result-list"),
};

const submitHandler = (e) => {
  e.preventDefault();
  const number = e.target.number.value;
  const isNegative = e.target.negative.checked;
  const isFraction = e.target.fraction.checked;
  if (number !== "")
    fetch("./avr-numbers", {
      method: "POST",
      body: JSON.stringify({ number, isNegative, isFraction }),
    })
      .then((res) => res.json())
      .then((data) => {
        renderResult(data);
      })
      .catch((error) => console.log(error.message));
};

refs.formRef.addEventListener("submit", () => submitHandler(event));

const renderResult = (obj) => {
  refs.resultRef.textContent = `  Previous number: ${obj.prevNumber}, Given number: ${obj.givenNumber}, Average number: ${obj.averageNumber}.`;
};

const renderPrevResult = (array) => {
  const markup = array
    .map((item) => {
      return `<li>
           Previous number: ${item.prevNumber}, Given number: $
          {item.givenNumber}, Average number: ${item.givenNumber}.
        </li>`;
    })
    .join("");

  refs.prevResultListRef.innerHTML = markup;
};
