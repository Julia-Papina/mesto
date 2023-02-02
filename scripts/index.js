let content = document.querySelector('.content')
let popup = document.querySelector('.popup');
let profileButtonEdit = content.querySelector('');
let popupClose = popup.querySelector('.popup__close');
let popupForm = popup.querySelector('.popup__container');
let nameInput = popupForm.querySelector('.popup__input_type_name');
let jobInput = popupForm.querySelector('.popup__input_type_job');

function popupChange() {
    popup.classList.toggle('popup_opened'); 
    popupForm.reset(); // 
  }
  
  profileButtonEdit.addEventListener('click', popupChange); 
  popupClose.addEventListener('click', popupChange); 
  
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
  
    popupChange();
  }
  
  popupForm.addEventListener('submit', handleFormSubmit);
