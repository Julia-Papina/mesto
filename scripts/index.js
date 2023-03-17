
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

const handleEditProfile = () => {
  profileForm.reset();
  inputProfileName.setAttribute('value', profileName.textContent); 
  inputProfileJob.setAttribute('value', profileJob.textContent); 
  resetValidation(profileForm, validationOptions);
  openPopup(profilePopup); 
}; 


const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

//закрытие попапов
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  });
});

//обработчик клика по карточке
const handleClickCard = (link, name) => {
  openImage.setAttribute('src', link); //сслыка на картинку
  openImage.setAttribute('alt', name); //название изображения
  popapImagePlace.textContent = name; //вставили название
  openPopup(popupImage);
}


//карточка
const createCard = (element) => {
  const newCard = cadrsTemplate
  .querySelector('.cards__item')
  .cloneNode(true); //клонирование содержимого
  newCard.querySelector('.cards__title').textContent = element.name; //название карточки
  
  const cardImage = newCard.querySelector('.cards__image'); //картинка карточки
  cardImage.setAttribute('src', element.link); //ссылка на картинку
  cardImage.setAttribute('alt', element.name); //атрибут alt

  cardImage.addEventListener('click', () => 
   handleClickCard(element.link, element.name)); //просмотр большого изображения
  
   newCard.querySelector('.cards__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('cards__like_active');
  }); //лайк
 
  newCard.querySelector('.cards__delete-button')
  .addEventListener('click', (evt) => {
    evt.target.closest('.cards__item');
    newCard.remove() //удалить
  });

  return newCard;
};

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
};

const handleFormEditSubmit = (evt) => {
  evt.preventDefault();

  const name = inputProfileName.value;
  const job = inputProfileJob.value;

  profileName.textContent = name;
  profileJob.textContent = job;

  closePopup(profilePopup);
};


profileButtonEdit.addEventListener('click', handleEditProfile);
buttonAddCard.addEventListener('click', () => {
  resetValidation(formAddCard, validationOptions);
  openPopup(popupAddCard);
});


profileForm.addEventListener('submit', handleFormEditSubmit);
formAddCard.addEventListener('submit', handleAddCardSubmit);

enableValidation(validationOptions);































 



  



 











   

 
    




