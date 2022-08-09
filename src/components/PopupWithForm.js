import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleProfileFormSubmit) { 
    super(popupSelector);
    this._popupFormContainer = this._popupSelector.querySelector('.popup__form');
    this._popupInputs = this._popupFormContainer.querySelectorAll('.popup__input');
    this._handleProfileFormSubmit = handleProfileFormSubmit;
  }

  _getInputValues() {
    this._formsValue = {};
    console.log( this._formsValue);
    this._popupInputs.forEach((input) => {
      this._formsValue[input.name] = input.value;
    });
    return this._formsValue;
  }

  close() {
    super.close();
    this._popupFormContainer.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupFormContainer.addEventListener('submit', (evt) => {
      console.log(1);
      evt.preventDefault();
      this._handleProfileFormSubmit(this._getInputValues());
      this.close();
    })
  }

}