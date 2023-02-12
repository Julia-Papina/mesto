let content = document.querySelector('.content')
let popup = document.querySelector('.popup_type_edit'); 
let profileButtonEdit = content.querySelector('.profile__edit-button'); 
let popupClose = popup.querySelector('.popup__close');  
let popupForm = popup.querySelector('.popup__form');  
let nameInput = popupForm.querySelector('.popup__input_type_name'); 
let jobInput = popupForm.querySelector('.popup__input_type_job');
let profileName = content.querySelector('.profile__info-name');  
let profileJob = content.querySelector('.profile__info-job');
let openAddButton = content.querySelector('.profile__add-button');
let popupAdd = document.querySelector('.popup_type_add');
let popupAddClose = popupAdd.querySelector('.popup__close');

function popupChange() {
    popup.classList.toggle('popup_opened'); 
  }
  

  profileButtonEdit.addEventListener("click", () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  
    popupChange();
  });


  function handleFormSubmit(evt) {
    evt.preventDefault(); 
    let name = nameInput.value;
    let job = jobInput.value;

    profileName.textContent = name;
    profileJob.textContent = job;
  
    popupChange();
  }
  
  popupClose.addEventListener('click', popupChange);
  popupForm.addEventListener('submit', handleFormSubmit);


  
function popupAddChange() {
  popupAdd.classList.toggle('popup_opened');
}
  openAddButton.addEventListener("click", popupAddChange);
  popupAddClose.addEventListener("click", popupAddChange);



  let initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
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
  initialCards.forEach(function (element) {
    let cadrsTemplate = document.querySelector('#cards').content;
    let cardsItem = document.querySelector('.elements');
    let cardsElement = cadrsTemplate.querySelector('.cards__item').cloneNode(true);
    cardsElement.querySelector('.cards__image').src = element.link;
    cardsElement.querySelector('.cards__title').textContent = element.name;
    cardsItem.append(cardsElement);
  });

 
 











   

 
    




