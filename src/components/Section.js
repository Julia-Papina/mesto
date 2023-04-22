export default class Section {
    constructor({ renderer }, containerSelector) {
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  //отрисовка всех элементов
    renderItems(cards) {
        cards.forEach((item) => {
        this._renderer(item); //отрисовка каждого отдельного элемента
      });
    }
  //принимает дом элемент и добавляет в контейнер
    addItem(element) {
      this._container.prepend(element);
    }
  }
  