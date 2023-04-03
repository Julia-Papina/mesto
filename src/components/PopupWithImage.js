import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._openImage = document.querySelector(".popup__open-image");
    this._popapImagePlace = document.querySelector(".popup__place");
  }
  open = (name, link) => {
    this._openImage.src = link;
    this._openImage.alt = name;
    this._popapImagePlace.textContent = name;
    super.open();
  };
}
