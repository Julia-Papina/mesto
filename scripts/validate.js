const showInputError = (formElement, inputElement, errorMessage, object) => {
    // находим ошибку
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(object.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(object.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, object) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(object.inputErrorClass);
    errorElement.classList.remove(object.errorClass);
    errorElement.textContent = '';
  };
  
  // проверить валидность поля
  const isValid = (formElement, inputElement, object) => {
    if (!inputElement.validity.valid) {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        object
      );
    } else {
      hideInputError(formElement, inputElement, object);
    }
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    });
  };
  const disabledBtn = (buttonElement, object) => {
    buttonElement.classList.add(object.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  };

  const toggleButtonState = (inputList, buttonElement, object) => {
    if (hasInvalidInput(inputList)) {
      disabledBtn(buttonElement, object);
    } else {
      buttonElement.classList.remove(object.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };
  
  const setEventListeners = (formElement, object) => {
    const inputList = Array.from(
      formElement.querySelectorAll(object.inputSelector)
    );

    const buttonElement = formElement.querySelector(object.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, object);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, object);
        toggleButtonState(inputList, buttonElement, object);
      });
    });
  };
  
  const enableValidation = (object) => {
    const formList = Array.from(document.querySelectorAll(object.formSelector));
  
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
      formElement.addEventListener('reset', () => {
        const buttonElement = formElement.querySelector(
          object.submitButtonSelector
        );
        disabledBtn(buttonElement, object);
      });
  
      const fieldsetList = Array.from(
        formElement.querySelectorAll(object.fieldSetSelector)
      );
      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet, object);
      });
    });
  };
  
  enableValidation({
    formSelector: '.popup__container',
    fieldSetSelector: '.popup__field',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
  });
