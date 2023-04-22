import "./index.css";
import * as constants from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

 const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '1abf7f9d-c23d-4867-8bbb-e68949373c5f',
    'Content-Type': 'application/json'
  }
}); 

let userId 

 Promise.all([
  api.getProfile(),
  api.getInitialCards(),
 ])
  .then(([user, cards]) => {
   userInfo.setUserInfo(user.name, user.about);
   userInfo.setUserAvatar(user.avatar);
   userId = user._id;

   userCards.renderItems(cards.reverse());  
  })
  .catch((err) => {
    console.log(err);
  });

  // карточка
function createCard(data) {
  const cardElement = new Card(
    {name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      userId: userId,
      ownerId: data.owner._id},
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
        .catch((err) => {
          console.log(err);
        });
      })
    },
    (id) => {
      if(cardElement.isLiked()) {
        api.deleteLike(id)
        .then(res => {
          cardElement.setLikes(res.likes)
        })
        .catch((err) => {
          console.log(err);
        });

      } else {
        api.addLike(id)
        .then(res => {
          cardElement.setLikes(res.likes)
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }  
    );

  return cardElement.generateCard();
  
}

  const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-job",
  avatarSelector: ".profile__avatar"
});


const userCards = new Section(
  {
    //items: [],  
    renderer: (item) => {
      userCards.addItem(createCard(item));
    },
  },
  '.cards');
  
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

const avatarFormValidation = new FormValidator(
  constants.formAvatar,
  constants.validationOptions
);
avatarFormValidation.enableValidation();

//сабмит редактирования профиля
function submitEditProfile(data) {
  const { name, job } = data
  popupEditProfile.isLoadingMessage(true);
  api.editProfile(name, job)
  .then(() => {
    userInfo.setUserInfo(name, job);
    popupEditProfile.close();
  })
  .catch((err) => {
    console.log(err);})
  .finally(() => {
    popupEditProfile.isLoadingMessage(false);
  })  
}

//попап редактирования профиля
const popupEditProfile = new PopupWithForm(
  ".popup_type_edit",
  submitEditProfile
);
popupEditProfile.setEventListeners();


//попап добавления карточки
function submitPopupAddImage(inputsValues) {
  popupAddImage.isLoadingMessage(true);
  api.addCard(inputsValues)
  .then((inputsValues) => {
    userCards.addItem(createCard(inputsValues));
    popupAddImage.close();
  })
  .catch((err) => {
    console.log(err);})
  .finally(() => {
    popupAddImage.isLoadingMessage(false);
  })   
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

//попап изменения аватара
constants.buttonAvatar.addEventListener('click', () => {
  popupAvatar.open();
})
const popupAvatar = new PopupWithForm('.popup_type_avatar', changeUserAvatar)

function changeUserAvatar(data) {
  const { avatar } = data
  popupAvatar.isLoadingMessage(true);
  api.changeUserAvatar(avatar)
  .then(() => {
    
    userInfo.setUserAvatar(avatar);
    popupAvatar.close();
  })
  .catch((err) => {
    console.log(err);})
  .finally(() => {
    popupAvatar.isLoadingMessage(false);
  })
}
popupAvatar.setEventListeners();





















