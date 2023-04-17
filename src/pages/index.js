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
      const cardElement = createCard({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id
      })
      userCards.addItem(cardElement)
    })  
  })

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-job"
});

// карточка
function createCard(data) {
  const cardElement = new Card(
    data, 
    "#cards", 
    openPopupImage,
    (id) => {
      
      confirmPopup.open()
      confirmPopup.changeSubmitHandler(() => {
        api.deleteCard(id)
        .then(() => {
          cardElement.deleteCard()
          confirmPopup.close()
        })
      })
    }
    );

  return cardElement.generateCard();
}

const userCards = new Section(
  {
    items: [], //constants.initialCards,
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


//сабмит редактирования профиля
function submitEditProfile(data) {
  const { name, job } = data
  api.editProfile(name, job)
  .then(() => {
    userInfo.setUserInfo(name, job);
  })
   popupEditProfile.close();
}
//попап редактирования профиля
const popupEditProfile = new PopupWithForm(
  ".popup_type_edit",
  submitEditProfile
);
popupEditProfile.setEventListeners();



//попап добавления карточки
function submitPopupAddImage(inputsValues) {

  api.addCard(inputsValues)
  .then(res => {
    const card = createCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      id: res._id
    })
    userCards.addItem(card)
    popupAddImage.close();
  })
 // userCards.addItem(createCard(inputsValues));
  //popupAddImage.close();
} 

const popupAddImage = new PopupWithForm(
  '.popup_type_add',
  submitPopupAddImage
);
popupAddImage.setEventListeners();

//попап с большой картинкой
const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

function openPopupImage(name, link) {
  popupImage.open(name, link);
}
//открытие попапа редактирования профиля
const openPopupEditProfile = () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  profileFormValidation.resetValidation();
  popupEditProfile.open();
};

constants.profileButtonEdit.addEventListener("click", openPopupEditProfile);
constants.buttonAddCard.addEventListener("click", () => {
  popupAddImage.open();
  newCardFormValidation.resetValidation();
});


constants.buttonAddCard.addEventListener("click", () => {
  popupAddImage.open();
  newCardFormValidation.resetValidation();
});

//попап удаления карточки
const confirmPopup = new PopupWithForm('.popup_type_delete-confirm')

confirmPopup.setEventListeners()





















