import { Card } from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import * as config from '../utils/config.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import './index.css';
import { Api } from '../components/Api.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

const profileValidation = new FormValidator(config.selector, config.formProfile);
const newCardValidation = new FormValidator(config.selector, config.formItems);
const updateAvatarValidation = new FormValidator(config.selector, config.formAvatarUpdate);

profileValidation.checkValidionForm();
newCardValidation.checkValidionForm()
updateAvatarValidation.checkValidionForm();

const api = new Api(config.url, config.token); 
const popupImage = new PopupWithImage(config.popupOverImg);

popupImage.setEventListeners();

const userInfo = new UserInfo({
    name: config.userName, 
    description: config.userDescription, 
    avatar: config.userAvatarSelector})

const popupProfileForm = new PopupWithForm({
      submit: (data) => {
      popupProfileForm.renderLoading(true);
      userInfo.setUserInfo(data.name, data.discription);
      api.editUser({name: data.name, about: data.discription})
      .then(() => {
        popupProfileForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupProfileForm.renderLoading(false)
      });

      
            }
      }, config.popupProfileEdit)

      popupProfileForm.setEventListeners();

Promise.all([
  api.getUser(),
  api.getInitialCards()
])
.then(() => {

    api.getUser()
    .then((dataUser) =>{
    userInfo.setUserId(dataUser._id);
    userInfo.setUserInfo(dataUser.name, dataUser.about);
    userInfo.setAvatar(dataUser.avatar)
    })
    .then(() => {
      const popupAvatar = new PopupWithForm({
        submit: (data) => {
          popupAvatar.renderLoading(true)
          userInfo.setAvatar(data.avatar);
          api.editAvatar(data.avatar)
          .then(() => {
            popupAvatar.close()
          })
          .finally(() => {
            popupAvatar.renderLoading(false);
          });
          
        }
      },config.popupAvatarUpdate);
      
      popupAvatar.setEventListeners();
      
      config.avatar.addEventListener('click', () => {
        updateAvatarValidation.unlockButton();
        popupAvatar.open();
      }) 
      
    })
    .catch((err) => {
      console.log(err);
    }); 

    config.editBtn.addEventListener('click', () => {
      const userProfile = userInfo.getUserInfo();
      config.nameInput.value = userProfile.name;
      config.discInput.value = userProfile.description;
      profileValidation.unlockButton()
      popupProfileForm.open();
    });

    api.getInitialCards()
    .then((data) => {
      
      function createCard(item)
      {

        const popupWithConfirmation = new PopupWithConfirmation({
          submit: (id) => {
            api.deletedCard(id)
            .then(() => {
            })
            .catch((err) => {
              console.log(err);
            }); 
            popupWithConfirmation.close();
            card.removeCard()
          }
        }, config.popupVerificationSelector);
      
        
        
      const card = new Card(() =>
        
      {popupImage.open(item.link, item.name)},
      item.link, 
      item.name, 
      config.template,
      item.likes,
      item._id,
      userInfo.getUserId(),
      handleLikeClick, 
      item.owner._id,
      cardDeleted
      );
      /* console.log(item) */

      function cardDeleted (id) {
        popupWithConfirmation.open();
        popupWithConfirmation.setEventListeners(id)
      }

      function handleLikeClick(id){
        
        if (!card.isLiked()){
          api.putLike(id)
          .then((res) => { 
          card.likes = res.likes
          card.getLikesLength(res.likes)
          card.makeActiveLike(card.isLiked())
          })
          .catch((err) => {
          console.log(err);
          }); 
        } 
        else {
          api.deleteLike(id)
          .then((res) => { 
            card.getLikesLength(res.likes)
            card.makeActiveLike(!card.isLiked())
            card.likes = res.likes
          })
          .catch((err) => {
            console.log(err);
          }); 
        }
      }
      
      const cardLayout = card.getViewCard();
      return cardLayout;
      }  

        const cardElement = new Section({
          items: data.reverse(),
          renderer: (item) => {
            cardElement.addItem(createCard(item))
            }, 
        }, config.itemCard)

        cardElement.renderItems();

        const popupItemForm = new PopupWithForm({
          submit: (data) =>{
            popupItemForm.renderLoading(true)
            api.addCard(data)
            .then((res) => {
              cardElement.addItem(createCard(res));
              popupItemForm.close();
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              popupItemForm.renderLoading(false)
            })
          

          }
        }, config.popupItems)
        
        config.addBtn.addEventListener('click', () => {
          newCardValidation.unlockButton()
          popupItemForm.open();
        } )
        
        popupItemForm.setEventListeners();

    }) 
    .catch((err) => {
      console.log(err)
    })
})
.catch((err) => {
  console.log(err)
})







