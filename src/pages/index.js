import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithProcces from '../components/PopupWithProcces.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
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
    profileAvatar,
    popupAvatar,
    profileAvatarEdit,
    formForEditAvatar,
    popupForDeleteCard,
} from '../utils/constants.js';

let userID;

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-47', {
    authorization: '6db5ed96-35c5-440d-93a7-5d404ebdd013',
    'Content-Type': 'application.json',
});

const validatorEditAuthor = new FormValidator(selectorsNamesForValidation, popupFormEditAuthor);
const validatorAddCard = new FormValidator(selectorsNamesForValidation, cardAddForm);
const validatorEditAvatar = new FormValidator(selectorsNamesForValidation, formForEditAvatar);

const cardsSection = new Section((item) => {
    const cardItem = handleNewCard(item).generateCard();
    cardsSection.addNewItem(cardItem);
    }, cardElement);

const dataUserInfo = new UserInfo (
    {
        userNameElement: authorName,
        userInfoElement: authorProfession,
        userAvatarElement: profileAvatar,
    }
);

const popupProfile = new PopupWithForm (profilePopup, (data) => {
    popupProfile.downloadProcces(true, 'Сохранение...');
    api
        .changeProfile(data)
        .then((userInfo) => {
            dataUserInfo.setUserInfo(userInfo);
            popupProfile.close();
        })
        .catch((err) => console.log(`Ошибка: ${err}`))
        .finally(popupProfile.downloadProcces(false));
});


const popupNewCard = new PopupWithForm (popUpAdd, (data) => {
    popupNewCard.downloadProcces(true, 'Сохранение...');
    api
        .addCard(data)
        .then((card) => {
            cardsSection.addNewItem(handleNewCard(card).generateCard());
            popupNewCard.close();
        })
        .catch((err) => console.log(`Ошибка: ${err}`))
        .finally(popupNewCard.downloadProcces(false));
});

const popupScaleImage = new PopupWithImage (popupForScaleImage);

const popupDeleteCard = new PopupWithProcces (popupForDeleteCard,  function (data, card) {
    popupDeleteCard.downloadProcces(true, 'Удаление...');
    api
        .deleteCard(data._id)
        .then(() => {
            handleNewCard(data).deleteCard(card);
            popupDeleteCard.close();
        })
        .catch((err) => console.log(`Ошибка: ${err}`))
        .finally(popupDeleteCard.downloadProcces(false));
});

const popupEditAvatar = new PopupWithForm (popupAvatar, async function (data) {
    popupEditAvatar.downloadProcces(true, 'Сохранение...');
    api
        .changeAvatar(data.link)
        .then((data) => {
            dataUserInfo.setUserInfo(data);
            popupEditAvatar.close();
        })
        .catch((err) => console.log(`Ошибка: ${err}`))
        .finally(popupEditAvatar.downloadProcces(false));
});


Promise.all([api.getUserInfo(), api.getCards()])
    .then(([info, initialCards]) => {
        userID = info._id;
        dataUserInfo.setUserInfo(info);
        cardsSection.renderItems(initialCards);
    })
    .catch((err) => {
        console.log(err);
    });

async function handleCardClick (evt) {
    return popupScaleImage.open(evt.target);
};

async function handleDeleteCard(data, card) {
    return popupDeleteCard.open(data, card);
};

function handleNewCard(card) {
    const newCard = new Card(
        card,
        '#card',
        handleCardClick,
        userID,
        handleDeleteCard,
        () => {
            api
                .likeCard(card._id)
                .then((res) => {
                    newCard.likeAmount(res.likes);
                    newCard.like();
                })
                .catch((err) => console.log(`Ошибка: ${err}`));
        },
        () => {
            api
                .deleteLikeCard(card._id)
                .then((res) => {
                    newCard.likeAmount(res.likes);
                    newCard.disLike();
                })
                .catch((err) => console.log(`Ошибка: ${err}`));
        }
    );
    return newCard;
};

validatorEditAuthor.enableValidation();
validatorAddCard.enableValidation();
validatorEditAvatar.enableValidation();

popupProfile.setEventListeners();
popupNewCard.setEventListeners();
popupScaleImage.setEventListeners();
popupEditAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

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

profileAvatarEdit.addEventListener('click', () => {
    popupEditAvatar.open();
    validatorEditAvatar.resetValidation();
});


