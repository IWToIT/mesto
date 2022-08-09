import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupElement, handleSubmit) { 
    super(popupElement);
    this._popupFormContainer = this._popupSelector.querySelector('.popup__form');
    this._popupInputs = this._popupFormContainer.querySelectorAll('.popup__input');
    this._handleSubmit = handleSubmit;
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
      this.close();
    })
  }
}