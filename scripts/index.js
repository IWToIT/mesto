//Окно изменения профиля

let popUp = document.querySelector('.popup');//находим Pop-up окно
let popUpOpen = document.querySelector('.profile__edit-button');//находим Edit button
let popUpClose = document.querySelector('.popup__btn-close');//находим Close button

let authorName = document.querySelector('.profile__title');//находим имя автора на стр.
let authorProfession = document.querySelector('.profile__subtitle');//находим профессию на стр.
let authorNameEdit = document.querySelector('.popup__input_type_name'); // находим поле Имя
let authorProfessionEdit = document.querySelector('.popup__input_type_profession');// находим поле Профессия

let formSubmit = document.querySelector('.popup__form');

function openPopUp() { //функция открытия
    popUp.classList.add('popup_open');//добавляем класс 
    authorNameEdit.value = authorName.textContent;//присваиваем значение
    authorProfessionEdit.value = authorProfession.textContent;
} ;

popUpOpen.addEventListener('click', openPopUp);

function closePopUp() {//функция закрытия
    popUp.classList.remove('popup_open');//удаляяем класс
};

popUpClose.addEventListener('click', closePopUp);

function formSubmitHandler (evt) {//функция отправки формы с последующим закрытием popup окна
    evt.preventDefault();
    authorName.textContent = authorNameEdit.value;
    authorProfession.textContent = authorProfessionEdit.value;
    closePopUp();
}

formSubmit.addEventListener('submit', formSubmitHandler);

//Окно добавления фото

let popUpAdd = document.querySelector('.popup-add');//находим Popup Add окно
let popUpAddOpen = document.querySelector('.profile__add-button');//находим Add button
let popUpAddClose = document.querySelector('.popup-add__btn-close');//находим Close button

let placeName = document.querySelector('.element__title');//находим имя автора на стр.
let linkImage = document.querySelector('.profile__subtitle');//находим профессию на стр.
let placeNameEdit = document.querySelector('.popup-add__input_type_place'); // находим поле Имя
let linkImageEdit = document.querySelector('.popup-add__input_type_link');// находим поле Профессия

function openPopUpAdd() { //функция открытия
    popUpAdd.classList.add('popup-add_open');//добавляем класс 
    placeNameEdit.value = placeName.textContent;//присваиваем значение
} ;

popUpAddOpen.addEventListener('click', openPopUpAdd);

const closePopUpAdd = () =>  popUpAdd.classList.remove('popup-add_open');

popUpAddClose.addEventListener('click', closePopUpAdd);