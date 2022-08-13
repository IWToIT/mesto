export default class Card {
  constructor(data, cardSelector, handleCardClick, userID, handleDeleteCard, handleLikeCard, handleDeleteLikeCard) {
    this._title = data.name;
    this._imageLink = data.link;
    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector('.element__like-icon')
    this._handleCardClick = handleCardClick;
    this._data = data;
    this._userID = userID;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._handleDeleteLikeCard = handleDeleteLikeCard;
    this._likes = data.likes;
    this._ownerID = data.owner._id;
  };

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  };

  _deleteCard(card) {
    card.remove();
    card = null;
  };

  likeAmount(likes) {
    this._likeAmount = this._element.querySelector('.element__like-amount');
    if (likes.length === 0) {
      this._likeAmount.textContent = '';
    } else {
      this._likeAmount.textContent = likes.length;
    }
  };

  _likeActive() {
    this._likes.forEach((likes) => {
      if (this._userID === likes._id) {
        this._elementLike.classList.add('element__like-icon_active');
      }
    });
  };

  like() {
    this._elementLike.classList.add('element__like-icon_active');
  };

  disLike() {
    this._elementLike.classList.remove('element__like-icon_active');
  };

  _setEventListener() {
    this._image = this._element.querySelector('.element__image');
    this._elementLike.addEventListener('click', () => {
      if (this._elementLike.classList.contains('element__like-icon_active')) {
        this._handleDeleteLikeCard();
      } else {
        this._handleLikeCard();
      }
    });
    this._element
      .querySelector(".element__btn-delete")
      .addEventListener("click", this._handleDeleteCard(this._data, this._element));
    this._image.addEventListener("click", this._handleCardClick);
  };

  generateCard() {
    this._setEventListener();

    this.likeAmount(this._likes);
    this._likeActive();
    this._image.src = this._imageLink;
    this._image.alt = this._title;
    this._element.querySelector(".element__title").textContent = this._title;
    if (this._ownerID === this._userID) {
      this._element.querySelector('.element__btn-delete').classList.add('element__btn-delete_active');
    }

    return this._element;
  };
}