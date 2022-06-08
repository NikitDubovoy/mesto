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
export const popupProfileEdit = document.querySelector('.popup_profile-edit');
export const editBtn = document.querySelector('.profile__edit-button');
export const nameInput = document.getElementsByName('name')[0];
export const discInput = document.getElementsByName('discription')[0];
export const nameItem = document.getElementsByName('name-item')[0];
export const linkImage = document.getElementsByName('link')[0];
export const userName = document.querySelector('.profile__name-user');
export const userDescription = document.querySelector('.profile__description');
export const formProfile = popupProfileEdit.querySelector('.popup__form');
export const popupItems = document.querySelector('.popup_items');
export const formItems = popupItems.querySelector('.popup__form');
export const addBtn = document.querySelector('.profile__add-button');
export const popupOverImg = document.querySelector('.popup_over-img');
export const itemImage = popupOverImg.querySelector('.popup__image');
export const titleImage = popupOverImg.querySelector('.popup__title-img');
export const itemCard = '.items';