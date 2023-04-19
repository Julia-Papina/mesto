import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(".popup__container"); //селектор формы в index.html
    this._formSubmitButton = this._form.querySelector(".popup__button");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }
   //собирает данные всех поей формы
  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
  setInputValues(data) {
    this._inputList.forEach((input) => {
      if (data[input.name]) {
        input.value = data[input.name];
      }
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  changeSubmitHandler(newSubmitHandler) {
    this._submitHandler = newSubmitHandler
  }


  //обработчик сабмита формы
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
    });
  }

  isLoadingMessage(isLoading) {
    if (isLoading === true) {
      this._formSubmitButton.textContent = 'Сохранение...';
    } else {
      this._formSubmitButton.textContent = 'Сохранить';
    }
  }
}

