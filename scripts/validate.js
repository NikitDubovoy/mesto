function enableValidation (selector){
  const formlist = Array.from(document.querySelectorAll(selector.formSelector));
  formlist.forEach((form) =>{
    form.addEventListener('input', (event) => handleFormInput(event, selector, form));
    //form.addEventListener('submit',() => handleFormSubmit(form));
    checkInitValue(selector, form);
  });
}

function checkInitValue(selector, form){
  const inputs = Array.from(form.querySelectorAll(selector.inputSelector));
  inputs.forEach((element) =>{
    if (!element.value){
      unlockButton(selector, form)
    }
  })
}

function unlockButton(selector, form){
  const button = form.querySelector(selector.submitButtonSelector);
  button.disabled = !form.checkValidity();
  button.classList.toggle(selector.inactiveButtonClass, button.disabled);
}

function handleFormInput(event, selector, form){
  const input = event.target;
  const error = document.querySelector(`#${input.id}-error`);
  if (!input.validity.valid){
    error.textContent = input.validationMessage;
  } else {
    error.textContent = '';
  }
  input.classList.toggle(selector.inputErrorClass, !input.validity.valid);
    unlockButton(selector, form);
  
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 

