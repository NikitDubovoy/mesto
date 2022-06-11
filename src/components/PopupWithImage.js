import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor(popupSelector, link, name){
        super(popupSelector);
        this._link = link;
        this._name = name;
        this._image = this._popup.querySelector('.popup__image');
        this._title = this._popup.querySelector('.popup__title-img');
    }
    open(link, name){
        super.open();
        this._image.src = link;
        this._image.alt = name;
        this._title.textContent = name;
    }
    close(){
        super.close();
    }

}