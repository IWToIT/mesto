export default class Section {
  constructor({ renderer, items }, containerElement) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerElement;
  }

  addNewItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}