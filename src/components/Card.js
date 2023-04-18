export default class Card {
 constructor(data, templateSelector, openPopupFunc, handleDeleteClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

    this._templateSelector = templateSelector;
    this._openPopupFunc = openPopupFunc;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
}
 _getTemplate() {
   return document
   .querySelector(this._templateSelector)
   .content.querySelector('.cards__item')
   .cloneNode(true);
}

isLiked() {
  const userLikedCard = this._likes.find(user => user._id === this._userId)

  return userLikedCard

}

deleteCard() {
    this._element.remove();
    this._element = null;
}

 _addCardLike() {
   this._likeBtn.classList.add('cards__like_active');
}


_removeCardLike() {
  this._likeBtn.classList.remove('cards__like_active');
}

//открытие попапа с картинкой при клике на карточку
 _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._openPopupFunc(this._name, this._link);
    });

    this._deleteBtn.addEventListener("click", () => {
      this._handleDeleteClick(this._id);
    });

    this._likeBtn.addEventListener("click", () => {
      this._handleLikeClick(this._id);
    });

    //this._likeBtn.addEventListener("click", () => {
     //   this._toggleCardLike();
     // });
    }

setLikes(newLikes) {
  this._likes = newLikes
  const likeCountElement = this._element.querySelector('.cards__like-count')
  likeCountElement.textContent = this._likes.length

  
  if(this.isLiked()) {
    this._addCardLike()
  } else {
    this._removeCardLike()
  }
  
}

 generateCard() {
    this._element = this._getTemplate();
    this._title = this._element.querySelector('.cards__title');
    this._image = this._element.querySelector('.cards__image');
    this._likeBtn = this._element.querySelector('.cards__like');
    this._deleteBtn = this._element.querySelector('.cards__delete-button');
    
    this._setEventListeners();
    
    this._title.textContent = this._name;
    this._image.alt = this._name;
    this._image.src = this._link;

    this.setLikes(this._likes);

    if(this._ownerId !== this._userId) {
      this._deleteBtn.style.display = 'none'
    }

 


    return this._element;
}

}