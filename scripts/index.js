let content = document.querySelector('.content')
let popup = document.querySelector('.popup'); 
let profileButtonEdit = content.querySelector('.profile__edit-button'); 
let popupClose = popup.querySelector('.popup__close');  
let popupForm = popup.querySelector('.popup__form');  
let nameInput = popupForm.querySelector('.popup__input_type_name'); 
let jobInput = popupForm.querySelector('.popup__input_type_job');
let profileName = content.querySelector('.profile__info-name');  
let profileJob = content.querySelector('.profile__info-job');

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

