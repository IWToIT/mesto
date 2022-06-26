const showInputError = (formElement, inputElement, errorMessage, elements) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement, elements) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, elements) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, elements);
  } else {
    hideInputError(formElement, inputElement, elements);
  }
};

const buttonDisabled = (buttonElement, elements) => {
  buttonElement.classList.add('popup__btn-save_inactive');
  buttonElement.disabled = true;
};

const buttonActive = (buttonElement, elements) => {
  buttonElement.classList.remove('popup__btn-save_inactive');
  buttonElement.disabled = false;
};

const toggleButtonState = (inputList, buttonElement, elements) => {
  if (hasInvalidInput(inputList)) {
    buttonDisabled(buttonElement, elements);
  } else {
    buttonActive(buttonElement, elements);
  }
};

const setEventListeners = (formElement, elements) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__btn-save');
  toggleButtonState(inputList, buttonElement, elements);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input',() => {
      checkInputValidity(formElement, inputElement, elements);
      toggleButtonState(inputList, buttonElement, elements);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
});
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement, elements);
  });
};

enableValidation();
