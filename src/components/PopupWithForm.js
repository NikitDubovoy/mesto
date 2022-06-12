import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({submit}, popupSelector){
        super(popupSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {

            this._formValues[input.name] = input.value;
          });
        //console.log(this._formValues)
        return this._formValues;
      }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submit(this._getInputValues())
        });

       }
    close() {
        super.close();
        this._form.reset();
    }
} 