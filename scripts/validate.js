// const showInputError = (formElement, inputElement, errorMessage, elements) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('popup__input-error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('popup__input-error_active');
// };

// const hideInputError = (formElement, inputElement, elements) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('form__input-error');
//   errorElement.classList.remove('form__input-error_active');
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement, elements) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, elements);
//   } else {
//     hideInputError(formElement, inputElement, elements);
//   }
// };

// const buttonDisabled = (buttonElement, elements) => {
//   buttonElement.classList.add('popup__btn-save_inactive');
//   buttonElement.disabled = true;
// };

// const buttonActive = (buttonElement, elements) => {
//   buttonElement.classList.remove('popup__btn-save_inactive');
//   buttonElement.disabled = false;
// };

// const toggleButtonState = (inputList, buttonElement, elements) => {
//   if (hasInvalidInput(inputList)) {
//     buttonDisabled(buttonElement, elements);
//   } else {
//     buttonActive(buttonElement, elements);
//   }
// };

// const setEventListeners = (formElement, elements) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//   const buttonElement = formElement.querySelector('.popup__btn-save');
//   toggleButtonState(inputList, buttonElement, elements);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input',() => {
//       checkInputValidity(formElement, inputElement, elements);
//       toggleButtonState(inputList, buttonElement, elements);
//     });
//   });
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
// });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.popup__form'));
//   formList.forEach((formElement) => {
//     setEventListeners(formElement, elements);
//   });
// };

// const selectors = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__btn-save',
//   inactiveButtonClass: '.popup__btn-save_inactive',
//   inputErrorClass: '.popup__input-error',
//   errorClass: '.popup__input-error_active'
// };

// enableValidation(selectors);


const showInputError = (formElement, inputElement, errorMessage, elements) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(elements.inputErrorClass);
  errorElement.classList.add(elements.errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, elements) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(elements.inputErrorClass);
  errorElement.classList.remove(elements.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, elements) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, elements);
  } else {
    hideInputError(formElement, inputElement, elements);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((item) => {
    return !item.validity.valid;
  });
};

const buttonDisabled = (buttonElement, elements) => {
  buttonElement.classList.add(elements.inactiveButtonClass);
  buttonElement.disabled = true;
};

const buttonActive = (buttonElement, elements) => {
  buttonElement.classList.remove(elements.inactiveButtonClass);
  buttonElement.disabled = false;
};

const toggleButtonState = (inputList, buttonElement, elements) => {
  if (hasInvalidInput(inputList)) {
    buttonDisabled(buttonElement, elements);
  } else {
    buttonActive(buttonElement, elements);
  };
};

const setEventListeners = (formElement, elements) => {
  const inputList = Array.from(formElement.querySelectorAll(elements.inputSelector));
  const buttonElement = formElement.querySelector(elements.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, elements);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, elements);
      toggleButtonState(inputList, buttonElement, elements);
    });
  });
};

const enableValidation = (elements) => {
  const formList = Array.from(document.querySelectorAll(elements.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, elements);
  });
};

const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup__btn-save_inactive',
  inputErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active'
};

enableValidation(selectors);