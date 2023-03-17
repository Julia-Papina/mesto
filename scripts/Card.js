export default class Card {
 constructor(data, templateSelector, openPopupFunc) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopupFunc = openPopupFunc;
}
 _getTemplate() {
 const cardElement = document
    .querySelector(this._templateSelector)
    .content.querySelector('.cards__item')
    .cloneNode(true);

 return cardElement;

}

 _deleteCard() {
    this._element.remove();
    this._element = null;
}

 _toggleCardLike() {
    this._likeBtn.classList.toggle('cards__like_active');
}

 _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._openPopupFunc(this._name, this._link);
    });

    this._deleteBtn.addEventListener("click", () => {
        this._deleteCard();
      });

    this._likeBtn.addEventListener("click", () => {
        this._toggleCardLike();
      });
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
    
    return this._element;
}

}