
//Окнa 
const popUp = document.querySelector('.popup');//находим Pop-up окно
const popUpAdd = document.querySelector('.popup-add');//находим Popup Add окно
const popUpScaleOpen = document.querySelector('.popup-scale');//находим Pop-up scale окно

//Кнопки открытия
const popUpOpen = document.querySelector('.profile__edit-button');//находим Edit button
const popUpAddOpen = document.querySelector('.profile__add-button');//находим Add button
const popUpScaleImageOpen = document.querySelector('.element__image');

//Закрытие
const popUpClose = document.querySelector('.popup__btn-close');//находим Close button


const authorName = document.querySelector('.profile__title');//находим имя автора на стр.
const authorProfession = document.querySelector('.profile__subtitle');//находим профессию на стр.
const authorNameEdit = document.querySelector('.popup__input_type_name'); // находим поле Имя
const authorProfessionEdit = document.querySelector('.popup__input_type_profession');// находим поле Профессия

const formSubmit = document.querySelector('.popup__form');




const linkImage = document.querySelector('.profile__subtitle');
const placeNameEdit = document.querySelector('.popup-add__input_type_place'); // находим поле место
const linkImageEdit = document.querySelector('.popup-add__input_type_link');// находим поле ссылка



const formPopUpAdd = document.querySelector('.popup-add__form');
const inputPlace = document.querySelector('.popup-add__input_type_place');
const inputLink = document.querySelector('.popup-add__input_type_link');




const popUpScaleImage = document.querySelector('.popup-scale__image');
const popUpScaleImageTitle = document.querySelector('.popup-scale__title');

const cardElement = document.querySelector('.elements');
const elementTemplate = document.querySelector('.template');
const deleteButton = document.querySelector('.element__btn-delete');



// const deleteElementButton = evt => evt.currentTarget.closest('.element');
const likeElementButton = evt => evt.target.classList.toggle('element__like-icon_active');

function openPopup(popup) {
    popup.classList.add('popup_open');
};

function closePopup(popup) {
    popup.classList.remove('popup_open');
};


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


function formSubmitHandler (evt) {//функция отправки формы с последующим закрытием popup окна
    evt.preventDefault();
    authorName.textContent = authorNameEdit.value;
    authorProfession.textContent = authorProfessionEdit.value;
    closePopup();
    formSubmit.reset();
};


function closePopUpAdd () {
    popUpAdd.classList.remove('popup-add_open');
    formPopUpAdd.reset();
};

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
function createCard(link, name) {
    const cards = elementTemplate.content.querySelector('.element').cloneNode(true);
    const imageScale = cards.querySelector('.element__image');

    cards.querySelector('.element__title').textContent = name;
    imageScale.alt = name; 
    imageScale.src = link;

     //Вызов Функции удаления карточки
    cards.querySelector('.element__like-icon').addEventListener('click', imageLike);  //Вызов функции добавления лайка под фото
    imageScale.addEventListener('click', () => openPopUpScale(imageScale));

    return cards;
};



initialCards.forEach((element) => {
    const el = createCard(element.link, element.name);
    cardElement.prepend(el);
});



function renderNewCard(elementName, element) {
    elementName.prepend(element);
  };

//функция отправки формы с последующим закрытием popup-add окна
const imageSubmit = evt => {
    evt.preventDefault();
    const newElement = createCard(linkImageEdit.value, placeNameEdit.value);
    renderNewCard(cardElement, newElement);
    formSubmit.reset();
    closePopUpAdd();
}

popUpOpen.addEventListener('click', openPopUp);
popUpAddOpen.addEventListener('click', openPopUpAdd);
popUpScaleImageOpen.addEventListener('click', openPopUpScale);
formSubmit.addEventListener('submit', formSubmitHandler);
formPopUpAdd.addEventListener('submit', imageSubmit);

popUpClose.forEach((item) => {
    item.addEventListener('click', () => closePopup(item.closest('.popup')));
  });