import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({submit}, popupSelector){
        super(popupSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._button = this._form.querySelector('.popup__button')
    }

    renderLoading (isLoading) {
        if (isLoading) {
            this._button.textContent = 'Сохраниение...';
            
        } else {
            this._button.textContent = 'Сохранить'
        }
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {

            this._formValues[input.name] = input.value;
          });
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