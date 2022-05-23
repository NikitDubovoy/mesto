import { Card } from './Card.js';
import {FormValidator} from './FormValidator.js';
import {selector, initialCards} from './config.js'

const popupProfileEdit = document.querySelector('.popup_profile-edit');
const editBtn = document.querySelector('.profile__edit-button');
const nameInput = document.getElementsByName('name')[0];
const discInput = document.getElementsByName('discription')[0];
const nameItem = document.getElementsByName('name-item')[0];
const linkImage = document.getElementsByName('link')[0];
const userName = document.querySelector('.profile__name-user');
const userDescription = document.querySelector('.profile__description');
const buttonCloseProfile = popupProfileEdit.querySelector('.popup__closed');
const formProfile = popupProfileEdit.querySelector('.popup__form');
const popupItems = document.querySelector('.popup_items');
const itemCloseBtn = popupItems.querySelector('.popup__closed');
const formItems = popupItems.querySelector('.popup__form');
const addBtn = document.querySelector('.profile__add-button');
const popupOverImg = document.querySelector('.popup_over-img');
const popupImageClosed = popupOverImg.querySelector('.popup__closed');
const itemImage = popupOverImg.querySelector('.popup__image');
const titleImage = popupOverImg.querySelector('.popup__title-img');
const itemCard = document.querySelector('.items');
const submitPopupItem = popupItems.querySelector(selector.submitButtonSelector);


nameInput.value = userName.textContent;
discInput.value = userDescription.textContent;


export {itemImage, titleImage}

export function openPopup(popup) {
        popup.classList.add('popup_opened');
        document.addEventListener('keydown', closeEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc); 
};

editBtn.addEventListener('click', function(){ 
  openPopup(popupProfileEdit);
});

buttonCloseProfile.addEventListener('click', function(){
  closePopup(popupProfileEdit);
  
});
  
function saveProfile (event){
  event.preventDefault();
  if (nameInput.value && discInput.value){
    userName.textContent = nameInput.value;
    userDescription.textContent = discInput.value;
    closePopup(popupProfileEdit);
  };
};

formProfile.addEventListener('submit', saveProfile);

addBtn.addEventListener('click', function(){
  openPopup(popupItems);
});

itemCloseBtn.addEventListener('click', function(){
  closePopup(popupItems);
});

function addCard(item){
  const card = new Card(item.link, item.name);
  const cardElement = card.getViewCard();
  return cardElement;
}

initialCards.forEach((item) => itemCard.prepend(addCard(item))); 

popupImageClosed.addEventListener('click', function(){
  closePopup(popupOverImg);
});

formItems.addEventListener('submit', function(event){
  event.preventDefault();
  const inputValue = {
    link: linkImage.value,
    name: nameItem.value
  }
    itemCard.prepend(addCard((inputValue)));
    closePopup(popupItems);
    formItems.reset();
    submitPopupItem.disabled = true;
    
});

const closeOverlay = (event) => {
  if (event.target === event.currentTarget){
    closePopup(event.target);
  }
};

const popupList = Array.from(document.querySelectorAll('.popup'));

popupList.forEach((element) => element.addEventListener('click', closeOverlay)); 

function closeEsc(e){
  if (e.key === 'Escape'){
    const  openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

const formList = Array.from(document.querySelectorAll(selector.formSelector));

function validationForms (selector, form) {
  const formValidator = new FormValidator(selector, form);
  formValidator.checkValidionForm();
}

formList.forEach((form) => validationForms(selector, form));

