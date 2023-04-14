import "./index.css";
import * as constants from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";

api.getProfile()
  .then(res => {
    userInfo.setUserInfo(res.name, res.about);
  })

api.getInitialCards()
  .then(cardList => {
    cardList.forEach(data => {
      const cardElement =  createCard(data)  
    
    userCards.addItem(cardElement)
    })
    
  })





const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-job",
});

// карточка
function createCard(data) {
  const cardElement = new Card(data, "#cards", openPopupImage);

  return cardElement.generateCard();
}

const userCards = new Section(
  {
    items: [],
    renderer: (card) => {
      userCards.addItem(createCard(card));
    },
  },
  '.cards');

userCards.renderItems();


//валидация
const profileFormValidation = new FormValidator(
  constants.profileForm,
  constants.validationOptions
);
profileFormValidation.enableValidation();

const newCardFormValidation = new FormValidator(
  constants.formAddCard,
  constants.validationOptions
);
newCardFormValidation.enableValidation();


//попап редактирования профиля
const popupEditProfile = new PopupWithForm(
  ".popup_type_edit",
  (inputData) => {
    userInfo.setUserInfo(inputData);
    popupEditProfile.close();
  }
);
popupEditProfile.setEventListeners();

//попап добавления карточки
const popupAddImage = new PopupWithForm(
  '.popup_type_add',
  (inputsValues) => {
    userCards.addItem(createCard(inputsValues));
    popupAddImage.close();
  } 
);
popupAddImage.setEventListeners();

//попап с большой картинкой
const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

function openPopupImage(name, link) {
  popupImage.open(name, link);
}

function openPopupEditProfile({ name, job }) {
  constants.inputProfileName.value = name;
  constants.inputProfileJob.value = job;

  popupEditProfile.open();
}

constants.profileButtonEdit.addEventListener("click", () => {
  openPopupEditProfile(userInfo.getUserInfo());
  profileFormValidation.resetValidation();
});


constants.buttonAddCard.addEventListener("click", () => {
  popupAddImage.open();
  newCardFormValidation.resetValidation();
});


















