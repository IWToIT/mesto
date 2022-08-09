import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageScale = this._popupSelector.querySelector('.popup__image-scale');
    this._imageTitleScale = this._popupSelector.querySelector('.popup__title-scale');
  }

  open(data){
    super.open();
    this._imageScale.src = data.src;
    this._imageScale.alt = data.alt;
    this._imageTitleScale.textContent = data.alt;
  }
}