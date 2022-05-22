export class FormValidator {
    _form;

    constructor(selector, form){
        this._selector = selector;
        this._form = form;
        this._submit = this._form.querySelector(this._selector.submitButtonSelector);
    }
     
    _unlockButton(){
      this._submit.disabled = !this._form.checkValidity();
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

