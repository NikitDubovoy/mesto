const popupProfileEdit = document.querySelector('.popup_profile-edit');
const popupForm = document.querySelector('.popup__form');
const popupOpened = document.querySelector('.popap_opened');
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
const popupImageTitle = document.querySelector('.popup__title-img');  
const popupImage = document.querySelector('.popup__image');
const popupBtn = document.querySelector('.popup__button');
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
};

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

// open popup item
const items = document.querySelector('.items');

addBtn.addEventListener('click', function(){
  openPopup(popupItems);
});
// close popup item

itemCloseBtn.addEventListener('click', function(){
  closePopup(popupItems);
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
  });

  items.prepend(itemElement);

  itemImage.addEventListener('click', function(event){
    event.preventDefault();
    popupImage.src = value.link;
    popupImage.alt = value.name;
    popupImageTitle.textContent = value.name;
    openPopup(popupOverImg, event);
  });


};
const popupImageClosed = popupOverImg.querySelector('.popup__closed');

popupImageClosed.addEventListener('click', function(){
  closePopup(popupOverImg);
});

  initialCards.forEach(element => renderItems(element));

formItems.addEventListener('submit', function(event){
  event.preventDefault();
  const newCard = { name: nameItem.value, link: linkImage.value};
  if (newCard.name && newCard.link){
    renderItems(newCard);
    closePopup(popupItems);
    formItems.reset();
  };
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
      popupList.forEach((element) => closePopup(element));
    } 
}


