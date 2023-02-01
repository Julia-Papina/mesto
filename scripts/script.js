let content = document.querySelector('.content')
let popup = document.querySelector('.popup');
let profileEditButton = content.querySelector('.profile__button_edit');
let popupButtonClose = popup.querySelector('.popup__close');
let popupForm = popup.querySelector('.popup__container');
let nameInput = popupForm.querySelector('.popup__input_name');
let jobInput = popupForm.querySelector('.popup__input_job');

function popupStateChange() {
    popup.classList.toggle('popup_opened'); 
    popupForm.reset(); // 
  }
  
  profileEditButton.addEventListener('click', popupStateChange); 
  popupButtonClose.addEventListener('click', popupStateChange); 
  
  function handleFormSubmit(evt) {
    evt.preventDefault(); 
    let name = nameInput.value;
    let job = jobInput.value;
  
    let profileName = content.querySelector('.profile__info-name');
    let profileJob = content.querySelector('.profile__info-job');
  
    profileName.textContent = name;
    profileJob.textContent = job;
  
    nameInput.setAttribute('value', name);
    jobInput.setAttribute('value', job);
  
    popupStateChange();
  }
  
  popupForm.addEventListener('submit', handleFormSubmit);
