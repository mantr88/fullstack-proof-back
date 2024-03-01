console.log("Hello!");

const refs = {
  formRef: document.querySelector("#avr-form"),
  btnRef: document.querySelector(".submit-btn"),
  resultRef: document.querySelector(".result"),
  prevResultRef: document.querySelector(".prev-result"),
};

const submitHandler = (e) => {
  e.preventDefault();
  console.log(e);
};

refs.formRef.addEventListener("submit", submitHandler(e));
