export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._items = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  //отрисовка всех элементов
    renderItems() {
      this._items.forEach((item) => {
        this._renderer(item); //отрисовка каждого отдельного элемента
      });
    }
  //принимает дом элемент и добавляет в контейнер
    addItem(element) {
      this._container.prepend(element);
    }
  }
  