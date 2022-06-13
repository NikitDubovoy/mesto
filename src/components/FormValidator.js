export class FormValidator {

    constructor(selector, form){
        this._selector = selector;
        this._form = form;
        this._buttonSubmit = this._form.querySelector(this._selector.submitButtonSelector);
        console.log(this._form)
      }

    _unlockButton(){
      this._buttonSubmit.disabled = !this._form.checkValidity();
      this._buttonSubmit.classList.toggle(this._selector.inactiveButtonClass, this._buttonSubmit.disabled)
    }

    _handleFormInput(input){
      const error = document.querySelector(`#${input.id}-error`);
      if (!input.validity.valid){
        error.textContent = input.validationMessage;
      } else {
        error.textContent = '';
      }
      input.classList.toggle(this._selector.inputErrorClass, !input.validity.valid);
      this._unlockButton();
    }

    checkValidionForm(){
      const inputList = Array.from(this._form.querySelectorAll(this._selector.inputSelector));
      inputList.forEach((input) =>{
        input.addEventListener('input', () => 
          this._handleFormInput(input));
      });     
    }
}

