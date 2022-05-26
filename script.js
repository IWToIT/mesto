
let popUp = document.querySelector('.popup');//находим Pop-up окно
let popUpOpen = document.querySelector('.profile__edit-button');//находим Edit button
let popUpClose = document.querySelector('.form__btn-close');//находим Close button

let authorName = document.querySelector('.profile__title');//находим имя автора на стр.
let authorProfession = document.querySelector('.profile__subtitle');//находим профессию на стр.
let authorNameEdit = document.querySelector('.form__input-name'); // находим поле Имя
let authorProfessionEdit = document.querySelector('.form__input-profession');// находим поле Профессия

let formSubmit = document.querySelector('.form');

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