
//Окнa 
const popUp = document.querySelector('.popup_type_edit-profile');//находим Pop-up окно
const popUpAdd = document.querySelector('.popup_type_add-card');//находим Popup Add окно
const popUpScaleOpen = document.querySelector('.popup_type_scale-image');//находим Pop-up scale окно

//Кнопки открытия
const popUpOpen = document.querySelector('.profile__edit-button');//находим Edit button
const popUpAddOpen = document.querySelector('.profile__add-button');//находим Add button

//Закрытие
const popUpClose = document.querySelectorAll('.popup__btn-close');//находим Close button

const authorName = document.querySelector('.profile__title');//находим имя автора на стр.
const authorProfession = document.querySelector('.profile__subtitle');//находим профессию на стр.
const authorNameEdit = document.querySelector('.popup__input_type_name'); // находим поле Имя
const authorProfessionEdit = document.querySelector('.popup__input_type_profession');// находим поле Профессия

const formSubmit = document.querySelector('.popup__form');

const placeNameEdit = document.querySelector('.popup__input_type_place'); // находим поле место
const linkImageEdit = document.querySelector('.popup__input_type_link');// находим поле ссылка

const formPopUpAdd = document.querySelector('.popup__form_type_add-card');
const popUpScaleImage = document.querySelector('.popup__image-scale');
const popUpScaleImageTitle = document.querySelector('.popup__title-scale');
const cardElement = document.querySelector('.elements');
const elementTemplate = document.querySelector('.template');


function openPopup(popup) {
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

function openPopUp() { //функция открытия
    openPopup(popUp);
    authorNameEdit.value = authorName.textContent;//присваиваем значение
    authorProfessionEdit.value = authorProfession.textContent;
};

function openPopUpAdd() { //функция открытия
    openPopup(popUpAdd);//добавляем класс 
};

//Функция открытия большого изобр
function openPopUpScale(cards) {
    openPopup(popUpScaleOpen);
    popUpScaleImage.src = cards.src;
    popUpScaleImage.alt = cards.alt;
    popUpScaleImageTitle.textContent = cards.alt;
};


function formSubmitHandler(evt) {//функция отправки формы с последующим закрытием popup окна
    evt.preventDefault();
    authorName.textContent = authorNameEdit.value;
    authorProfession.textContent = authorProfessionEdit.value;
    closePopup(popUp);
    formSubmit.reset();
};


//Функция удаления
const imageDelete = evt => {
    evt.target.closest('.element').remove();
};

//Функция лайка
const imageLike = evt => {
    evt.target.classList.toggle('element__like-icon_active');
};

//Функция вставки начальных 6 карточек
function createCard(link, name) {
    const cards = elementTemplate.content.querySelector('.element').cloneNode(true);
    const imageScale = cards.querySelector('.element__image');

    cards.querySelector('.element__title').textContent = name;
    imageScale.alt = name;
    imageScale.src = link;

    cards.querySelector('.element__btn-delete').addEventListener('click', imageDelete);
    cards.querySelector('.element__like-icon').addEventListener('click', imageLike);
    imageScale.addEventListener('click', () => openPopUpScale(imageScale));

    return cards;
};

function renderNewCard(elementName, element) {
    elementName.prepend(element);
};

initialCards.forEach((element) => {
    const el = createCard(element.link, element.name);
    renderNewCard(cardElement, el);
});


//функция отправки формы с последующим закрытием popup-add окна
const imageSubmit = evt => {
    evt.preventDefault();
    const newElement = createCard(linkImageEdit.value, placeNameEdit.value);
    renderNewCard(cardElement, newElement);
    formSubmit.reset();
    closePopup(popUpAdd);
};

popUpOpen.addEventListener('click', openPopUp);
popUpAddOpen.addEventListener('click', openPopUpAdd);
formSubmit.addEventListener('submit', formSubmitHandler);
formPopUpAdd.addEventListener('submit', imageSubmit);
popUpClose.forEach((item) => {
    item.addEventListener('click', () => closePopup(item.closest('.popup')));
});