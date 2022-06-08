export class Section {
    constructor({items, renderer}, containerSelector){
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    renderItems() {
        this._renderedItems.forEach((item) => this._container.prepend(this._renderer(item)));
    }
    addItem(element) {
       this._container.prepend(this._renderer(element)) /* console.log(element) */
    }
}