export const selectorsNamesForValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn-save",
  inactiveButtonClass: "popup__btn-save_inactive",
  inputErrorClass: "popup__input_border",
  errorClass: "popup__input-error_active",
};

export const profilePopup = document.querySelector('.popup_type_edit-profile');//находим Pop-up окно
export const popUpAdd = document.querySelector('.popup_type_add-card');//находим Popup Add окно
export const popupForScaleImage = document.querySelector('.popup_type_scale-image');

export const profileOpenBtn = document.querySelector('.profile__edit-button');//находим Edit button
export const popUpAddOpen = document.querySelector('.profile__add-button');//находим Add button

export const authorName = document.querySelector('.profile__title');//находим имя автора на стр.
export const authorProfession = document.querySelector('.profile__subtitle');//находим профессию на стр.
export const authorNameEdit = document.querySelector('.popup__input_type_name'); // находим поле Имя
export const authorProfessionEdit = document.querySelector('.popup__input_type_profession');// находим поле Профессия

export const cardAddForm = document.querySelector('.popup__form_type_add-card');
export const popupFormEditAuthor = document.querySelector('.popup__form_type_edit-author');

export const placeNameEdit = document.querySelector('.popup__input_type_place'); // находим поле место
export const linkImageEdit = document.querySelector('.popup__input_type_link');// находим поле ссылка

export const cardElement = document.querySelector('.elements');
export const popups = document.querySelectorAll('.popup');

export const profileAvatar = document.querySelector('.profile__avatar');
export const popupAvatar = document.querySelector('.popup_type_edit-avatar');
export const profileAvatarEdit = document.querySelector('.profile__avatar-container');
export const formForEditAvatar = popupAvatar.querySelector('.popup__form_type_edit-avatar');

export const popupForDeleteCard = document.querySelector('.popup_type_remove-card');
