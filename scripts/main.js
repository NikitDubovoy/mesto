const popupProfileEdit = document.querySelector('.popup_profile-edit');
const popupOpened = document.querySelector('.popap_opened');
const editBtn = document.querySelector('.profile__edit-button');
const nameInput = document.getElementsByName('name')[0];
const discInput = document.getElementsByName('discription')[0];
const nameItem = document.getElementsByName('name-item')[0];
const linkImage = document.getElementsByName('link')[0];
const userName = document.querySelector('.profile__name-user');
const userDescription = document.querySelector('.profile__description');
const closedProfileBtn = popupProfileEdit.querySelector('.popup__closed');
const formProfile = popupProfileEdit.querySelector('.popup__form');
const popupItems = document.querySelector('.popup_items');
const closedItemsBtn = popupItems.querySelector('.popup__closed');
const formItems = popupItems.querySelector('.popup__form');
const addBtn = document.querySelector('.profile__add-button');
const closePopup = document.querySelector('.popup__closed');
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

function openPopup(popup, event) {
    popup.classList.add('popup_opened');
    event.preventDefault();
    
    if (popup = popupProfileEdit){
    nameInput.value = userName.textContent;
    discInput.value = userDescription.textContent;
    }

    closePopup.addEventListener('click', function(){
      closedPopup(popup,event);
    });
};

editBtn.addEventListener('click', function(){
  openPopup(popupProfileEdit,event);
});


function closedPopup(popup, event) {
  event.preventDefault();
  popup.classList.remove('popup_opened');    
};

function saveProfile (){
    if ((nameInput.value != '') && (discInput.value != '')){
        userName.textContent = nameInput.value;
        userDescription.textContent = discInput.value;
    }
    closedPopup(popupProfileEdit, event);
};

formProfile.addEventListener('submit', saveProfile);

// open popup item
const items = document.querySelector('.items');

addBtn.addEventListener('click', function(){
  openPopup(popupItems,event);
  console.log(popupItems);
});
// close popup item

closedItemsBtn.addEventListener('click', function(){
  closedPopup(popupItems, event);
});


// render items
function renderItems(value){
    const itemTemplate = document.querySelector('#items__template').content;
    const itemElement = itemTemplate.querySelector('.items__content').cloneNode(true);
    const itemImage = itemElement.querySelector('.items__image');
    itemImage.src = value.link;
    itemImage.alt = value.name;
    itemElement.querySelector('.items__title').textContent = value.name;
    //like button
    const itemsLikeBtn = itemElement.querySelector('.items__like-button');
    
    itemsLikeBtn.addEventListener('click', function(event){
      event.target.classList.toggle('items__like-button_active');
    });
    //trah button
    const trashBtn = itemElement.querySelector('.items__trash');
    trashBtn.addEventListener('click', function(){
      const thisItem = trashBtn.closest('.items__content');
      thisItem.remove();
    })

    items.prepend(itemElement);

    const popupImage = document.querySelector('.popup_over-img');

    itemImage.addEventListener('click', function(event){
      event.preventDefault();
      openPopup(popupImage, event);
      popupImage.querySelector('.popup__image').src = value.link;
      popupImage.querySelector('.popup__image').alt = value.name;
      popupImage.querySelector('.popup__title-img').textContent = value.name;
    });

    const popupImageClosed = popupImage.querySelector('.popup__closed');

    popupImageClosed.addEventListener('click', function(event){
      closedPopup(popupImage, event);
    });
};

    initialCards.forEach(element => renderItems(element));

formItems.addEventListener('submit', function(event){
  event.preventDefault();
  initialCards.unshift({ name: nameItem.value, link: linkImage.value});
  initialCards.shift(element => renderItems(element));
});



