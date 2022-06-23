import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
    constructor({submit}, popupSelector){
        super(popupSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.popup__form');
    }
    
    setEventListeners(id){
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submit(id)
        });
    }
    close() {
        super.close();
    }
}