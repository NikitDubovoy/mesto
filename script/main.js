let popup = document.querySelector('.popup');
let editBtn = document.querySelector('.profile__edit-button');
let nameInput = popup.querySelector('.popup__input-name');
let discInput = popup.querySelector('.popup__input-discription');
let userName = document.querySelector('.profile__name-user');
let userDescription = document.querySelector('.profile__description');

function callPopup(e) {
    e.preventDefault();
    popup.classList.add('popup_active');
    nameInput.value = userName.innerHTML;
    discInput.value = userDescription.innerHTML;
};

editBtn.addEventListener('click', callPopup);

let closedBtn = document.querySelector('.popup__closed');

function closePopup(e) {
    e.preventDefault();
    popup.classList.remove('popup_active');    
};

closedBtn.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__form'); 

function savePopup (e){
    if ((nameInput.value != '') && (discInput.value != '')){
    userName.innerHTML = nameInput.value;
    userDescription.innerHTML = discInput.value;
    }
    closePopup(e);
};

formElement.addEventListener('submit', savePopup);

