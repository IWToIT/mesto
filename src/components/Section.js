export default class Section {
  constructor(renderer, containerElement) {
    this._renderer = renderer;
    this._container = containerElement;
  }

  addNewItem(element) {
    this._container.prepend(element);
  }

  renderItems(cards) {
    return cards.reverse().forEach((item) => {
      this._renderer(item);
    });
  }
}