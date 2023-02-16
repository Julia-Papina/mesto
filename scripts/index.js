const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
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
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const popups = document.querySelectorAll('.popup'); //все попапы
const profilePopup = document.querySelector('.popup_type_edit'); //попап редактирования профиля
const profileButtonEdit = document.querySelector('.profile__edit-button'); //кнопка редактирования профиля
const profileName = document.querySelector('.profile__info-name'); //имя в профиле
const profileJob = document.querySelector('.profile__info-job'); // о вас в профиле
const profileForm = profilePopup.querySelector('.popup__form'); //форма профиля
const inputProfileName = profileForm.querySelector('.popup__input_type_name'); //поле имя в форме
const inputProfileJob = profileForm.querySelector('.popup__input_type_job'); // поле - о вас в форме

const popupAddCard = document.querySelector('.popup_type_add'); //попап добавления карточки
const buttonAddCard = document.querySelector('.profile__add-button'); //кнопка добавления карточки
const formAddCard = popupAddCard.querySelector('.popup__form_add_card'); //форма добавления карточек
const inputCardAddName = formAddCard.querySelector('.popup__input_type_place'); // поле с названием места в форме
const inputCardAddLink = formAddCard.querySelector('.popup__input_type_link'); // поле с ссылкой на картинку в форме

const cadrsTemplate = document.querySelector('#cards').content; //содержимое темплейта с карточкой
const cardsItem = document.querySelector('.cards'); //место для карточек

const popupImage = document.querySelector('.popup_type_image'); //попап с большой картинкой
const openImage = popupImage.querySelector('.popup__open-image');  //картинка в попапе
const popapImagePlace = popupImage.querySelector('.popup__place'); //описание места под картинкой

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

profileButtonEdit.addEventListener('click', () => openPopup(profilePopup));
buttonAddCard.addEventListener('click', () => openPopup(popupAddCard));

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//закрытие попапов
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

//обработчик клика по карточке
const handleClickCard = (link, name) => {
  openImage.setAttribute('src', link); //сслыка на картинку
  openImage.setAttribute('alt', name); //название изображения
  popapImagePlace.textContent = name; //вставили название
  openPopup(popupImage);
}


//карточка
const createCard = (element) => {
  const newCard = cadrsTemplate.querySelector('.cards__item').cloneNode(true); //клонирование содержимого
  newCard.querySelector('.cards__title').textContent = element.name; //название карточки
  cardImage = newCard.querySelector('.cards__image'); //картинка карточки
  cardImage.setAttribute('src', element.link); //ссылка на картинку
  cardImage.setAttribute('alt', element.name); //атрибут alt

  cardImage.addEventListener('click', () => handleClickCard(element.link, element.name)); //просмотр большого изображения
  newCard.querySelector('.cards__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('cards__like_active');
  }); //лайк
  newCard.querySelector('.cards__delete-button').addEventListener('click', (evt) => {
    evt.target.parentElement.remove();
  });

  return newCard;
}


initialCards.forEach((element) => {
  const newCard = createCard(element);
  cardsItem.append(newCard);
})
//обработчик отправки в создании карточки
const handleAddCardSubmit = (evt) => {
  evt.preventDefault();
  const element = {
    name: inputCardAddName.value,
    link: inputCardAddLink.value
  };

  const newCard = createCard(element);
  cardsItem.prepend(newCard);

  formAddCard.reset();
  closePopup(popupAddCard);
}

formAddCard.addEventListener('submit', handleAddCardSubmit); //обработчик формы

//обработчик в форме редактирования профиля
const handleFormEditSubmit = (evt) => {
  evt.preventDefault();
  const name = inputProfileName.value;
  const job = inputProfileJob.value;
  profileName.textContent = name;
  profileJob.textContent = job;
  

  closePopup(profilePopup);
}
profileForm.addEventListener('submit', handleFormEditSubmit);
































 



  



 











   

 
    




