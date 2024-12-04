const userName = document.getElementById("name");
const surname = document.getElementById("lastName");
const email = document.getElementById("email");
const queryType = document.querySelectorAll(".query-type");
const text = document.getElementById("message");
const concent = document.getElementById("concent");
const submit = document.getElementById("submit");
const errorMsg = document.querySelectorAll(".errorMsg");
const success = document.querySelector(".successMsg");

const nameError = document.getElementById("nameError");
const surnameError = document.getElementById("surnameError");
const emailError = document.getElementById("emailError");
const queryType_error = document.getElementById("queryType-error");
const messageError = document.getElementById("messageError");
const concentError = document.getElementById("concentError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const errorHandler = (input, error, validate, customError = null) => {
  const validationResult = validate(input.value);

  if (!validationResult) {
    let previousDisplay = window.getComputedStyle(error).display;
    error.style.display = "block";
    if (customError) {
      error.textContent = customError;
    }
    input.classList.add("errorMessage");

    setTimeout(() => {
      error.style.display = previousDisplay;
      input.classList.remove("errorMessage");
      if (customError) {
        error.textContent = "";
      }
    }, 4000);
  }

  return validationResult;
};

const radioBtn = () => {
  let isAnyChecked = false;

  for (i = 0; i < queryType.length; i++) {
    if (queryType[i].checked) {
      isAnyChecked = true;
      break;
    }
  }

  if (!isAnyChecked) {
    let previousDisplay = window.getComputedStyle(queryType_error).display;
    queryType_error.style.display = "block";

    setTimeout(() => {
      queryType_error.style.display = previousDisplay;
    }, 4000);
  }
};

const concentBtn = () => {
  if (!concent.checked) {
    let previousDisplay = window.getComputedStyle(concentError).display;
    concentError.style.display = "block";

    setTimeout(() => {
      concentError.style.display = previousDisplay;
    }, 4000);
  }
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  radioBtn();
  concentBtn();

  const isNameValid = errorHandler(
    userName,
    nameError,
    (value) => value !== ""
  );

  const isSurnameValid = errorHandler(
    surname,
    surnameError,
    (value) => value !== ""
  );

  const isTextValid = errorHandler(text, messageError, (value) => value !== "");

  let isEmailValid = errorHandler(
    email,
    emailError,
    (value) => value !== "" && emailRegex.test(value),
    "Input a valid email"
  );

  const isFormValid =
    isNameValid && isSurnameValid && isTextValid && isEmailValid;

  if (isFormValid) {
    success.classList.add("showMessage");
    setTimeout(() => {
      success.classList.remove("showMessage");
      document.querySelector("form").reset();
    }, 4000);

    console.log(userName.value);
    console.log(surname.value);
    console.log(email.value);
    console.log(queryType[i].value);
    console.log(text.value);
  }
});
