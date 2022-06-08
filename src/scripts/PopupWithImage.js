import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor(popupSelector, link, name, image, title){
        super(popupSelector, link, name);
        this._link = link;
        this._name = name;
        this._image = image;
        this._title = title;
    }
    open(){
        super.open();
        this._image.src = this._link;
        this._image.alt = this._title.textContent = this._name;
    }
    close(){
        super.close();
    }

}