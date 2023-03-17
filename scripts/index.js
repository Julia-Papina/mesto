import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  initialCards,
  validationOptions,
  popups,
  profilePopup,
  profileButtonEdit,
  profileName,
  profileJob,
  profileForm,
  inputProfileName,
  inputProfileJob,
  popupAddCard,
  buttonAddCard,
  formAddCard,
  inputCardAddName,
  inputCardAddLink,
  cadrsTemplate,
  cardsItem,
  popupImage,
  openImage,
  popapImagePlace,
} from './consts.js';

initialCards.forEach((item) => {
  addCard(createCard(item));
});

const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

function createCard(data) {
  const cardElement = new Card(data, "#cards", handleClickCard);

  return cardElement.generateCard();
}

function addCard(card) {
  cardsItem.prepend(card);
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileJob.textContent = inputProfileJob.value;
  closePopup(profilePopup);
}


function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const newCard = {
    name: inputCardAddName.value,
    link: inputCardAddLink.value
  };

  addCard(createCard(newCard));

  closePopup(popupAddCard);
}

function handleEditProfile() {
  inputProfileName.value = profileName.textContent;
  inputProfileJob.value = profileJob.textContent;

  openPopup(profilePopup);
}

function handleClickCard(name, link) {
  openImage.src = link; //сслыка на картинку
  openImage.alt = name; //название изображения
  popapImagePlace.textContent = name; //вставили название
  openPopup(popupImage);
}

profileButtonEdit.addEventListener('click', () => {
  handleEditProfile();
  profileFormValidation.resetValidation();
});
 

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
  formAddCard.reset();
  newCardFormValidation.resetValidation();
});


popups.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(item);
    }
  });
});

profileForm.addEventListener("submit", handleFormEditSubmit);
formAddCard.addEventListener('submit', handleAddCardSubmit);


















