let popup = document.querySelector('.popup');
let popupProfileEdit = document.querySelector('.popup_profile-edit');
let editBtn = document.querySelector('.profile__edit-button');
let nameInput = document.getElementsByName('name')[0];
let discInput = document.getElementsByName('discription')[0];
let nameItem = document.getElementsByName('name-item')[0];
let linkImage = document.getElementsByName('link')[0];
let userName = document.querySelector('.profile__name-user');
let userDescription = document.querySelector('.profile__description');
let closedProfileBtn = popupProfileEdit.querySelector('.popup__closed');
let formProfile = popupProfileEdit.querySelector('.popup__form');
let popupItems = document.querySelector('.popup_items');
let closedItemsBtn = popupItems.querySelector('.popup__closed');
let formItems = popupItems.querySelector('.popup__form');
let addBtn = document.querySelector('.profile__add-button');

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

function callPopupProfileEdit(event) {
    event.preventDefault();
    popupProfileEdit.classList.add('popup_profile-edit_active');
    nameInput.value = userName.innerHTML;
    discInput.value = userDescription.innerHTML;
};

editBtn.addEventListener('click', callPopupProfileEdit);

function closePopupProfileEdit(event) {
    event.preventDefault();
    popupProfileEdit.classList.remove('popup_profile-edit_active');    
};

closedProfileBtn.addEventListener('click', closePopupProfileEdit);

function saveProfile (){
    if ((nameInput.value != '') && (discInput.value != '')){
        userName.innerHTML = nameInput.value;
        userDescription.innerHTML = discInput.value;
    }
    closePopupProfileEdit(event);
};

formProfile.addEventListener('submit', saveProfile);

// open popup item
const items = document.querySelector('.items');

function callPopupItems(event) {
    event.preventDefault();
    popupItems.classList.add('popup_items_active');
};

addBtn.addEventListener('click', callPopupItems);
// close popup item
function closedPopupItems(event){
    event.preventDefault();
    popupItems.classList.remove('popup_items_active');
}

closedItemsBtn.addEventListener('click', closedPopupItems);

// render items
function renderItems(value){
    const itemTemplate = document.querySelector('#items__template').content;
    const itemElement = itemTemplate.querySelector('.items__content').cloneNode  (true);

    itemElement.querySelector('.items__image').src = value.link;
    itemElement.querySelector('.items__image').alt = value.name;
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
      initialCards.pop();
      thisItem.remove();
    })

    items.append(itemElement);
    
    const itemImage = itemElement.querySelector('.items__image');
    const popupImage = document.querySelector('.popup_over-img');

    itemImage.addEventListener('click', function(event){
      event.preventDefault();
      popupImage.classList.add('popup_over-img_active');
      popupImage.querySelector('.popup__image').src = value.link;
      popupImage.querySelector('.popup__image').alt = value.name;
      popupImage.querySelector('.popup__title_img').textContent = value.name;
    });

    const popupImageClosed = popupImage.querySelector('.popup__closed');

    popupImageClosed.addEventListener('click', function(event){
      event.preventDefault();
      popupImage.classList.remove('popup_over-img_active');
    });
};

    initialCards.forEach(element => renderItems(element));

//add item
function addItems() {
    newItem = {
      name:  nameItem.value,
      link:  linkImage.value,
    };

    if ((newItem.name != '') && (newItem.link != '')){
      initialCards.push(newItem);
      closedPopupItems(event);
      renderItems(newItem);
    }
    
    nameItem.value = '';
    linkImage.value = '';
};

formItems.addEventListener('submit', addItems);



