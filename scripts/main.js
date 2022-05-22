import { Card } from './Card.js';
import {FormValidator} from './FormValidator.js';

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

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

nameInput.value = userName.textContent;
discInput.value = userDescription.textContent;

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc);
    const formValidator = new FormValidator(selector, popup);
    formValidator.checkValidionForm();
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

const itemTemplate = document.querySelector('#items__template').content;

function addCard(item){
  const card = new Card(item.link, item.name, itemTemplate);
  
  const cardElement = card.getViewCard();
  document.querySelector('.items').append(cardElement);
}

initialCards.forEach((item) => addCard(item)); 

popupImageClosed.addEventListener('click', function(){
  closePopup(popupOverImg);
});

formItems.addEventListener('submit', function(event){
  event.preventDefault();
  const inputValue = {
    link: linkImage.value,
    name: nameItem.value
  }
    addCard(inputValue);
    closePopup(popupItems);
    formItems.reset();
});

const closedOverlay = (event) => {
  if (event.target === event.currentTarget){
    closePopup(event.target);
  }
};

const popupList = Array.from(document.querySelectorAll('.popup'));

popupList.forEach((element) => element.addEventListener('click', closedOverlay)); 

function closeEsc(e){
  if (e.key === 'Escape'){
    const  openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

const selector = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
