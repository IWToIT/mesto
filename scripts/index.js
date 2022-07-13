import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const selectorsNamesForValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn-save",
  inactiveButtonClass: "popup__btn-save_inactive",
  inputErrorClass: "popup__input_border",
  errorClass: "popup__input-error_active",
};

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const profilePopup = document.querySelector('.popup_type_edit-profile');//находим Pop-up окно
const popUpAdd = document.querySelector('.popup_type_add-card');//находим Popup Add окно

const profileOpenBtn = document.querySelector('.profile__edit-button');//находим Edit button
const popUpAddOpen = document.querySelector('.profile__add-button');//находим Add button

const authorName = document.querySelector('.profile__title');//находим имя автора на стр.
const authorProfession = document.querySelector('.profile__subtitle');//находим профессию на стр.
const authorNameEdit = document.querySelector('.popup__input_type_name'); // находим поле Имя
const authorProfessionEdit = document.querySelector('.popup__input_type_profession');// находим поле Профессия

const profileForm = document.querySelector('.popup__form');
const cardAddForm = document.querySelector('.popup__form_type_add-card');
const popupFormEditAuthor = document.querySelector('.popup__form_type_edit-author');

const placeNameEdit = document.querySelector('.popup__input_type_place'); // находим поле место
const linkImageEdit = document.querySelector('.popup__input_type_link');// находим поле ссылка

const cardElement = document.querySelector('.elements');
const popups = document.querySelectorAll('.popup');

const validatorEditAuthor = new FormValidator(selectorsNamesForValidation, popupFormEditAuthor);
const validatorAddCard = new FormValidator(selectorsNamesForValidation, cardAddForm);


export function openPopup(popup) {
    popup.classList.add('popup_open');
    document.addEventListener('keydown', closePopupEsc);
};

function closePopup(popup) {
    popup.classList.remove('popup_open');
    document.removeEventListener('keydown', closePopupEsc);
};

function closePopupEsc(evt) {
    if(evt.key === 'Escape') {
        const popupOpen = document.querySelector('.popup_open');
        closePopup(popupOpen); 
    }
}

function openProfilePopup() { //функция открытия
    openPopup(profilePopup);
    authorNameEdit.value = authorName.textContent;
    authorProfessionEdit.value = authorProfession.textContent;
    validatorEditAuthor.resetValidation();
};

function handleProfileFormSubmit(evt) {//функция отправки формы с последующим закрытием popup окна
    evt.preventDefault();
    authorName.textContent = authorNameEdit.value;
    authorProfession.textContent = authorProfessionEdit.value;
    closePopup(profilePopup);
};


function renderNewCard(elementName, element) {
    elementName.prepend(element);
};

function handleNewCard(card) {
    const newCard = new Card(card, "#card").generateCard();
    return newCard;
}
  

function submitAddCard(evt) {
  evt.preventDefault();

  const cardContainer = [];
  cardContainer.link = linkImageEdit.value;
  cardContainer.name = placeNameEdit.value;

  renderNewCard(cardElement, handleNewCard(cardContainer));

  closePopup(popUpAdd);
  cardAddForm.reset();
} 

validatorEditAuthor.enableValidation();
validatorAddCard.enableValidation();

initialCards.forEach((element) => {
    renderNewCard(cardElement, handleNewCard(element));
});


popups.forEach((element) => {
    element.addEventListener('mousedown', (evt) => {
        if(evt.target.classList.contains('popup_open') || evt.target.classList.contains('popup__btn-close')) {
            closePopup(element);
        };
    });
});

profileOpenBtn.addEventListener('click', openProfilePopup);
popUpAddOpen.addEventListener('click', () => {
  cardAddForm.reset();
  validatorAddCard.resetValidation();
  openPopup(popUpAdd);
});
profileForm.addEventListener('submit', handleProfileFormSubmit);
cardAddForm.addEventListener('submit', submitAddCard);

