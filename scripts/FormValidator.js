export default class FormValidator {
 constructor(formElement, data){
    this._formElement = formElement;
    this._inputSelector =  data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
}

 _showInputError() {
    const errorElement = this._formElement.querySelector(
    `.${this._inputElement.id}-error`);
    errorElement.textContent = this._inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
    this._inputElement.classList.add(this._inputErrorClass);
}


    
 _hideInputError() {
    const errorElement = this._formElement.querySelector(
    `.${this._inputElement.id}-error`);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
    this._inputElement.classList.remove(this._inputErrorClass);
}

 _toggleInputState() {
    if (this._inputElement.validity.valid) {
      this._hideInputError();
    } else {
      this._showInputError();
    }
}

 _toggleSubmitButtonState() {
    const isFormValid = this._formElement.checkValidity();

    this._buttonElement.disabled = !isFormValid;
    this._buttonElement.classList.toggle(
      this._inactiveButtonClass,
      !isFormValid
    );
}

 _setEventListeners() {
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._inputElement = inputElement;
        this._toggleInputState();
        this._toggleSubmitButtonState();
      });
  });
}

  
resetValidation() {
    this._toggleSubmitButtonState();

    this._inputList.forEach((inputElement) => {
      this._inputElement = inputElement;
      this._hideInputError();
    });
}

enableValidation() {
    this._setEventListeners();
}
}



















  