import './styles/index.css';
import { Card } from './Card.js';
import {FormValidator} from './FormValidator.js';
import * as config from './config.js';
import { PopupWithImage } from './PopupWithImage.js';
import {UserInfo} from './UserInfo.js';
import {Section} from './Section.js';
import { PopupWithForm } from './PopupWithForm.js';

function validationForms (selector, form) {
  const formValidator = new FormValidator(selector, form);
  formValidator.checkValidionForm();
}

const addCard = new Section({
 items: config.initialCards,
 renderer: (item) => {
  const openImg = new PopupWithImage(config.popupOverImg, item.link, item.name, config.itemImage, config.titleImage);
  const card = new Card(openImg, item.link, item.name);
  const cardElement = card.getViewCard();
  return cardElement;
 }, 
},
config.itemCard)

addCard.renderItems()

const userInfo = new UserInfo({name: config.userName, description: config.userDescription})

const popupProfileForm = new PopupWithForm({
    submit: (e) => {
    userInfo.setUserInfo(config.nameInput, config.discInput, e);
    popupProfileForm.close();
    
  }
}, config.popupProfileEdit)

config.editBtn.addEventListener('click', () => {
  config.nameInput.value = userInfo.getUserInfo().name;
  config.discInput.value = userInfo.getUserInfo().description; 
  popupProfileForm.open();
  popupProfileForm.setEventListeners();
  validationForms(config.selector, config.formProfile)

});

const popupItemForm = new PopupWithForm({
  submit: (e) =>{
    e.preventDefault();
    addCard.addItem({name: config.nameItem.value, link: config.linkImage.value});
    popupItemForm.open();
    popupItemForm.close();
  }
}, config.popupItems)

config.addBtn.addEventListener('click', () => {
  popupItemForm.open();
  popupItemForm.setEventListeners();
  validationForms(config.selector, config.formItems)
} )


