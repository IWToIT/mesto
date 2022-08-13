import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupElement, handleSubmit) { 
    super(popupElement);
    this._popupFormContainer = this._popup.querySelector('.popup__form');
    this._popupInputs = this._popupFormContainer.querySelectorAll('.popup__input');
    this._handleSubmit = handleSubmit;
    this._handleSubmitButton = this._popup.querySelector('.popup__btn-save');
  }

  downloadProcces(download, line) {
    if (download) {
      this._handleSubmitButton.textContent = line;
    }
  }

  _getInputValues() {
    this._formValues = {};
    this._popupInputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();
    this._popupFormContainer.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupFormContainer.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }
}