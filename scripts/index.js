//Окно изменения профиля

let popUp = document.querySelector('.popup');//находим Pop-up окно
let popUpOpen = document.querySelector('.profile__edit-button');//находим Edit button
let popUpClose = document.querySelector('.popup__btn-close');//находим Close button

let authorName = document.querySelector('.profile__title');//находим имя автора на стр.
let authorProfession = document.querySelector('.profile__subtitle');//находим профессию на стр.
let authorNameEdit = document.querySelector('.popup__input_type_name'); // находим поле Имя
let authorProfessionEdit = document.querySelector('.popup__input_type_profession');// находим поле Профессия

let formSubmit = document.querySelector('.popup__form');

let popUpAdd = document.querySelector('.popup-add');//находим Popup Add окно
let popUpAddOpen = document.querySelector('.profile__add-button');//находим Add button
let popUpAddClose = document.querySelector('.popup-add__btn-close');//находим Close button

let placeName = document.querySelector('.element__title');//находим имя автора на стр.
let linkImage = document.querySelector('.profile__subtitle');//находим профессию на стр.
let placeNameEdit = document.querySelector('.popup-add__input_type_place'); // находим поле Имя
let linkImageEdit = document.querySelector('.popup-add__input_type_link');// находим поле Профессия



const formPopUpAdd = document.querySelector('.popup-add__form');
const inputPlace = document.querySelector('.popup-add__input_type_place');
const inputLink = document.querySelector('.popup-add__input_type_link');

const popUpScaleOpen = document.querySelector('.popup-scale');
const popUpScaleImageOpen = document.querySelector('.element__image');
const popUpScaleClose = document.querySelector('.popup-scale__btn-close');

const popUpScaleImage = document.querySelector('.popup-scale__image');
const popUpScaleImageTitle = document.querySelector('.popup-scale__title');

const cardElement = document.querySelector('.elements');
const elementTemplate = document.querySelector('.template');


const deleteElementButton = evt => evt.currentTarget.closest('.element');
const likeElementButton = evt => evt.target.classList.toggle('element__like-icon_active');
const closePopUpScale = () =>  popUpScaleOpen.classList.remove('popup-scale_open');



function openPopUp() { //функция открытия
    popUp.classList.add('popup_open');//добавляем класс 
    authorNameEdit.value = authorName.textContent;//присваиваем значение
    authorProfessionEdit.value = authorProfession.textContent;
} ;

function closePopUp() {//функция закрытия
    popUp.classList.remove('popup_open');//удаляяем класс
};

function formSubmitHandler (evt) {//функция отправки формы с последующим закрытием popup окна
    evt.preventDefault();
    authorName.textContent = authorNameEdit.value;
    authorProfession.textContent = authorProfessionEdit.value;
    closePopUp();

    formSubmit.reset();
}

function openPopUpAdd() { //функция открытия
    popUpAdd.classList.add('popup-add_open');//добавляем класс 
    placeNameEdit.value = placeName.textContent;//присваиваем значение
    linkImageEdit.value = linkImage.src;
    popUpAddOpen.reset();
} ;

function closePopUpAdd () {
    popUpAdd.classList.remove('popup-add_open');
}

//Функция удаления
const imageDelete =  evt => {
    const cards = deleteElementButton(evt);

    cards.remove();
};

//Функция лайка
const imageLike = evt => {
    const cards = likeElementButton(evt);

    cards.remove();
};

//Функция вставки начальных 6 карточек
function openStartCard(link, name) {
    const cards = elementTemplate.content.querySelector('.element').cloneNode(true);
    const imageScale = cards.querySelector('.element__image');

    cards.querySelector('.element__title').textContent = name;
    imageScale.alt = name;
    imageScale.src = link;

    cards.querySelector('.element__btn-delete').addEventListener('click', imageDelete);//Вызов Функции удаления карточки
    cards.querySelector('.element__like-icon').addEventListener('click', imageLike);//Вызов функции добавления лайка под фото
    imageScale.addEventListener('click', () => openPopUpScale(imageScale));


    return cards;
};

initialCards.forEach((element) => {
    const el = openStartCard(element.link, element.name);
    cardElement.prepend(el);
});

//Функция открытия большого изобр
function openPopUpScale(cards) {
    popUpScaleOpen.classList.add('popup-scale_open');
    popUpScaleImage.src = cards.src;
    popUpScaleImage.alt = cards.alt;
    popUpScaleImageTitle.textContent = cards.alt;
};

function renderNewCard(elementName, element) {
    elementName.prepend(element);
  };
  
//функция отправки формы с последующим закрытием popup-add окна
const imageSubmit = evt => {
    evt.preventDefault();
    const newElement = openStartCard(linkImageEdit.value, placeNameEdit.value);
    renderNewCard(cardElement, newElement);
    formSubmit.reset();
    closePopUpAdd();
}

popUpOpen.addEventListener('click', openPopUp);
popUpClose.addEventListener('click', closePopUp);
formSubmit.addEventListener('submit', formSubmitHandler);
formPopUpAdd.addEventListener('submit', imageSubmit);
popUpAddOpen.addEventListener('click', openPopUpAdd);
popUpAddClose.addEventListener('click', closePopUpAdd);
popUpScaleClose.addEventListener('click', closePopUpScale);