export default class FormValidator {
  constructor(selectorsNames, formElement) {
    this._formElement = formElement;
    this._selectorsNames = selectorsNames;
    this._buttonElement = this._formElement.querySelector(
      this._selectorsNames.submitButtonSelector
    );
    this._inputList = Array.from(
      formElement.querySelectorAll(this._selectorsNames.inputSelector)
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._selectorsNames.inputErrorClass);
    errorElement.classList.add(this._selectorsNames.errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._selectorsNames.inputErrorClass);
    errorElement.classList.remove(this._selectorsNames.errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput = () => {
    return this._inputList.some((item) => {
    return !item.validity.valid;
  })
  }

  _disableButton = () => {
    this._buttonElement.classList.add(this._selectorsNames.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _buttonActive = () => {
    this._buttonElement.classList.remove(this._selectorsNames.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._buttonActive();
    };
  }

  resetValidation = () => {
    this._toggleButtonState();

    this._inputList.forEach((item) => {
      this._hideInputError(item);
    });
  }


  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',() => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation = () => {
    this._setEventListeners();
  }
}