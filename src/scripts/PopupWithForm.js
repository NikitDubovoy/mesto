import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({submit}, popup){
        super(popup);
        this._popup = popup;
        this._submit = submit;
        this._form = this._popup.querySelector('.popup__form')
    }

    open(){
        super.open();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submit)
    }
    close() {
        super.close();
        this._form.reset();
    }
} 