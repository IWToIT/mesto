import { openPopup } from "./index.js";

export default class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._imageLink = data.link;
    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._popupScaleImg = document.querySelector(".popup_type_scale-image");
    this._forImgScale = document.querySelector(".popup__image-scale");
    this._forImgTitleScale = document.querySelector(".popup__title-scale");
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  };

  _deleteCard = evt => {
    evt.target.closest('.element').remove();
  };

//Функция лайка
  _toggleLike = evt => {
    evt.target.classList.toggle('element__like-icon_active');
  };

  _scaleImage = evt => {
    this._forImgScale.src = evt.target.src;
    this._forImgScale.alt = evt.target.alt;
    this._forImgTitleScale.textContent = evt.target.alt;
    return openPopup(this._popupScaleImg);
  };

  _setEventListener() {
    this._image = this._element.querySelector(".element__image");
    this._element
      .querySelector(".element__like-icon")
      .addEventListener("click", this._toggleLike);
    this._element
      .querySelector(".element__btn-delete")
      .addEventListener("click", this._deleteCard);
    this._image.addEventListener("click", this._scaleImage);
  };

  generateCard() {
    this._setEventListener();

    this._image.src = this._imageLink;
    this._image.alt = this._title;
    this._element.querySelector(".element__title").textContent = this._title;

    return this._element;
  };
}