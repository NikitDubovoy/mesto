export const selector = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };
  
  
export const initialCards = [
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
export const popupProfileEdit = '.popup_profile-edit';
export const template = '#items__template';
export const popup = '.popup';
export const editBtn = document.querySelector('.profile__edit-button');
export const nameInput = document.querySelector('.name-input');
export const discInput = document.querySelector('.discription-input');
export const userName = '.profile__name-user';
export const userDescription = '.profile__description';
export const userAvatarSelector = '.profile__img';
export const formProfile = document.querySelector('.popup__form_user');
export const popupItems = '.popup_items';
export const formItems = document.querySelector('.popup__form_item');
export const addBtn = document.querySelector('.profile__add-button');
export const popupOverImg = '.popup_over-img';
export const itemCard = '.items';
export const popupImage = '.popup__image';
export const avatar = document.querySelector('.profile__avatar');
export const avatarImg = document.querySelector('.profile__img');
export const formAvatarUpdate =  document.querySelector('.popup__form_update-avatar');
export const popupAvatarUpdate = '.popup_update-avatar';
export const formVerification = document.querySelector('.popup_verification')
export const popupVerificationSelector = '.popup_verification';
export const url = 'https://mesto.nomoreparties.co/v1/cohort-43';
export const token = '5d158af5-4ee3-4978-967e-9b9c8d1b1d67';