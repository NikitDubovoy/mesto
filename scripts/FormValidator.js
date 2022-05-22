export class FormValidator {
    _selector;
    _form;

    constructor(selector, form){
        this._selector = selector;
        this._form = form;
    }
     
    _unlockButton(){
      const button = this._form.querySelector(this._selector.submitButtonSelector);
      const form = this._form.querySelector(this._selector.formSelector);
      button.disabled = !form.checkValidity();
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
      this._unlockButton();
      
    }

}

