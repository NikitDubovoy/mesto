import { Card } from './Card.js';
import {FormValidator} from './FormValidator.js';
import * as config from './config.js';
import { PopupWithImage } from './PopupWithImage.js';
import {UserInfo} from './UserInfo.js';
import {Section} from './Section.js';
import { PopupWithForm } from './PopupWithForm.js';

const profileValidation = new FormValidator(config.selector, config.popupProfileEdit);
const newCardValidation = new FormValidator(config.selector, config.popupItems);
profileValidation.checkValidionForm();
newCardValidation.checkValidionForm();  

const openPopupImage = new PopupWithImage(config.popupOverImg);

const addCard = new Section({
 items: config.initialCards,
 renderer: (item) => {
  const card = new Card(openPopupImage, item.link, item.name);
  const cardElement = card.getViewCard(); 
  return cardElement;
  }, 
},
config.itemCard)

addCard.renderItems()

const userInfo = new UserInfo({name: config.userName, description: config.userDescription})

const userInfoValue = userInfo.getUserInfo()

const popupProfileForm = new PopupWithForm({
    submit: (data) => {
    userInfo.setUserInfo(data.name, data.discription);
    popupProfileForm.close();
  }
}, config.popupProfileEdit)

popupProfileForm.setEventListeners();

config.editBtn.addEventListener('click', () => {
  config.nameInput.value = userInfoValue.name;
  config.discInput.value = userInfoValue.description; 
  popupProfileForm.open();
});

const popupItemForm = new PopupWithForm({
  submit: (data) =>{
    addCard.addItem(data); 
    popupItemForm.close();
  }
}, config.popupItems)

config.addBtn.addEventListener('click', () => {
  popupItemForm.open();
  
} )

popupItemForm.setEventListeners();
