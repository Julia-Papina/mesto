const initialCards = [
    {
      name: 'Липецк',
      link: 'https://avia-all.ru/uploads/posts/2019-09/1569322380_6288126_xlarge.jpg',
      
    },
    {
      name: 'Сочи',
      link: 'https://avatars.dzeninfra.ru/get-zen_doc/4727350/pub_6266ee06a61b041e4b4531b9_6266ee8b380894296340624b/scale_1200'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Екатеринбург',
      link: 'https://www.vladtime.ru/uploads/posts/2018-07/1531398275_33249437771_d929e87cd5_o.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

const validationOptions = {
  formSelector: '.popup__container',
  fieldSetSelector: '.popup__field',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};


const popups = document.querySelectorAll('.popup'); //все попапы
const profilePopup = document.querySelector('.popup_type_edit'); //попап редактирования профиля
const profileButtonEdit = document.querySelector('.profile__edit-button'); //кнопка редактирования профиля
const profileName = document.querySelector('.profile__info-name'); //имя в профиле
const profileJob = document.querySelector('.profile__info-job'); // о вас в профиле
const profileForm = profilePopup.querySelector('.popup__container'); //форма профиля
const inputProfileName = profileForm.querySelector('.popup__input_type_name'); //поле имя в форме
const inputProfileJob = profileForm.querySelector('.popup__input_type_job'); // поле - о вас в форме

const popupAddCard = document.querySelector('.popup_type_add'); //попап добавления карточки
const buttonAddCard = document.querySelector('.profile__add-button'); //кнопка добавления карточки
const formAddCard = popupAddCard.querySelector('.popup__container'); //форма добавления карточек
const inputCardAddName = formAddCard.querySelector('.popup__input_type_place'); // поле с названием места в форме
const inputCardAddLink = formAddCard.querySelector('.popup__input_type_link'); // поле с ссылкой на картинку в форме

const cadrsTemplate = document.querySelector('#cards').content; //содержимое темплейта с карточкой
const cardsItem = document.querySelector('.cards'); //место для карточек

const popupImage = document.querySelector('.popup_type_image'); //попап с большой картинкой
const openImage = popupImage.querySelector('.popup__open-image');  //картинка в попапе
const popapImagePlace = popupImage.querySelector('.popup__place'); //описание места под картинкой