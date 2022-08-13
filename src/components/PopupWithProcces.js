import Popup from "./Popup";

export default class PopupWithProcces extends Popup {
  constructor(popupElement, handleSubmit) {
    super(popupElement);
    this._handleSubmit = handleSubmit;
    this._popupFormContainer = this._popup.querySelector('.popup__form');
    this._submitBtn = this._popup.querySelector('.popup__btn-save');
    this._submitBtnText = this._submitBtn.textContent;
  };

  downloadProcces(download, line) {
    if(download){
      this._submitBtn.textContent = line;
    }
  };

  open(data, card) {
    super.open();
    this._data = data;
    this._card = card;
  };

  close() {
    super.close();
    this._popupFormContainer.reset();
    setTimeout(() => this._submitBtn.textContent = this._submitBtnText, 500);
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupFormContainer.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._data, this._card);
    });
  }
}