export default class Card {
 constructor(data, templateSelector, openPopupFunc, handleDeleteClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._templateSelector = templateSelector;
    this._openPopupFunc = openPopupFunc;
    this._handleDeleteClick = handleDeleteClick;
}
 _getTemplate() {
   return document
   .querySelector(this._templateSelector)
   .content.querySelector('.cards__item')
   .cloneNode(true);
}

deleteCard() {
    this._element.remove();
    this._element = null;
}

 _toggleCardLike() {
    this._likeBtn.classList.toggle('cards__like_active');
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
        this._toggleCardLike();
      });
    }

_setLikes() {
  const likeCountElement = this._element.querySelector('.cards__like-count')
  likeCountElement.textContent = this._likes.length
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

    this._setLikes();
    
    return this._element;
}

}