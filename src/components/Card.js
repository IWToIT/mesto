export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._title = data.name;
    this._imageLink = data.link;
    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._handleCardClick = handleCardClick;
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

  _setEventListener() {
    this._image = this._element.querySelector(".element__image");
    this._element
      .querySelector(".element__like-icon")
      .addEventListener("click", this._toggleLike);
    this._element
      .querySelector(".element__btn-delete")
      .addEventListener("click", this._deleteCard);
    this._image.addEventListener("click", this._handleCardClick);
  };

  generateCard() {
    this._setEventListener();

    this._image.src = this._imageLink;
    this._image.alt = this._title;
    this._element.querySelector(".element__title").textContent = this._title;

    return this._element;
  };
}