export const initialCards = [
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

export const validationOptions = {
  formSelector: '.popup__container',
  fieldSetSelector: '.popup__field',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};


export const popups = document.querySelectorAll('.popup'), //все попапы
  profileForm = document.querySelector('#edit-profile'), //форма редактирования профиля
  formAddCard = document.querySelector('#add-card'), //форма добавления карточек
  inputProfileName = document.querySelector('.popup__input_type_name'), //поле имя в форме редактирования профиля
  inputProfileJob = document.querySelector('.popup__input_type_job'), // поле - о вас в форме
  inputCardAddName = document.querySelector('.popup__input_type_place'), // поле с названием места в форме
  inputCardAddLink = document.querySelector('.popup__input_type_link'), // поле с ссылкой на картинку в форме
  profileButtonEdit = document.querySelector('.profile__edit-button'), //кнопка редактирования профиля
  buttonAddCard = document.querySelector('.profile__add-button'), //кнопка добавления карточки
  cardsItem = document.querySelector('.cards'); //место для карточек
















 