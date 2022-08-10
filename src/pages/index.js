import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import {
    selectorsNamesForValidation,
    profilePopup,
    popUpAdd,
    popupForScaleImage,
    profileOpenBtn,
    popUpAddOpen,
    authorName,
    authorProfession,
    authorNameEdit,
    authorProfessionEdit,
    cardAddForm,
    popupFormEditAuthor,
    cardElement,
    initialCards,
} from '../utils/constants.js';

const validatorEditAuthor = new FormValidator(selectorsNamesForValidation, popupFormEditAuthor);
const validatorAddCard = new FormValidator(selectorsNamesForValidation, cardAddForm);

const cardsSection = new Section(
    {
        items: initialCards,
        renderer: (item) => {
            const cardItem = handleNewCard(item)
            cardsSection.addNewItem(cardItem);
        },
    },
    cardElement
);

const dataUserInfo = new UserInfo (
    {
        userNameElement: authorName,
        userInfoElement: authorProfession,
    }
    
);

const popupProfile = new PopupWithForm (profilePopup, (data) => dataUserInfo.setUserInfo(data));

const popupNewCard = new PopupWithForm (popUpAdd, (data) => 
    {
        cardsSection.addNewItem(handleNewCard(data));
    }
);

const popupScaleImage = new PopupWithImage (popupForScaleImage);

function handleCardClick (evt) {
   return popupScaleImage.open(evt.target);
};

function handleNewCard(card) {
    const newCard = new Card(card, "#card", handleCardClick).generateCard();
    return newCard;
};

validatorEditAuthor.enableValidation();
validatorAddCard.enableValidation();
cardsSection.renderItems();
popupProfile.setEventListeners();
popupNewCard.setEventListeners();
popupScaleImage.setEventListeners();

profileOpenBtn.addEventListener('click', () => {
    popupProfile.open();
    const {userName, userInfo} = dataUserInfo.getUserInfo();
    authorNameEdit.value = userName;
    authorProfessionEdit.value = userInfo;
    validatorEditAuthor.resetValidation();
});
popUpAddOpen.addEventListener('click', () => {
    popupNewCard.open();
    validatorAddCard.resetValidation();
});
