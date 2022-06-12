import { Card } from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import * as config from '../utils/config.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import './index.css';

const profileValidation = new FormValidator(config.selector, config.formProfile);
const newCardValidation = new FormValidator(config.selector, config.formItems);
profileValidation.checkValidionForm();
newCardValidation.checkValidionForm();  

const popupImage = new PopupWithImage(config.popupOverImg);

function createCard(item)
 {
  const card = new Card(() => {popupImage.open(item.link, item.name)}, item.link, item.name, config.template);
  const cardLayout = card.getViewCard(); 
  return cardLayout;
 }  

const cardElement = new Section({
 items: config.initialCards,
 renderer: (item) => {
  cardElement.addItem(createCard(item))
  }, 
},
config.itemCard)

cardElement.renderItems()

popupImage.setEventListeners();


const userInfo = new UserInfo({name: config.userName, description: config.userDescription})

const userProfile = userInfo.getUserInfo();

const popupProfileForm = new PopupWithForm({
    submit: (data) => {
    userInfo.setUserInfo(data.name, data.discription);
    popupProfileForm.close();
  }
}, config.popupProfileEdit)

popupProfileForm.setEventListeners();



config.editBtn.addEventListener('click', () => {
  config.nameInput.value = userProfile.name;
  config.discInput.value = userProfile.description;
  popupProfileForm.open();
});

const popupItemForm = new PopupWithForm({
  submit: (data) =>{
    cardElement.addItem(createCard(data)); 
    popupItemForm.close();
  }
}, config.popupItems)

config.addBtn.addEventListener('click', () => {
  popupItemForm.open();
  
} )

popupItemForm.setEventListeners();
