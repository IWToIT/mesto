export default class Section {
  constructor({ renderer, items }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addNewItem(element) {
    this._container.prepend(element);
  }

  rendererItem() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}