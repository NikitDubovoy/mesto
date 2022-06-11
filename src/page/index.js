import { Card } from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import * as config from '../components/config.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import './index.css';

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

const popupProfileForm = new PopupWithForm({
    submit: (data) => {
    userInfo.setUserInfo(data.name, data.discription);
    popupProfileForm.close();
  }
}, config.popupProfileEdit)

popupProfileForm.setEventListeners();

config.editBtn.addEventListener('click', () => {
  config.nameInput.value = userInfo.getUserInfo().name;
  config.discInput.value = userInfo.getUserInfo().description;
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
