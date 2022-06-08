/* import {openPopup} from './main.js';
import {itemImage, titleImage} from './main.js'; */

export class Card{

    constructor (overImg, link, name) {
        this._overImg = overImg;
        this._link = link;
        this._name = name;
    }

    _handleCardClick () {
        this._itemImg.addEventListener('click', () => {
            this._overImg.open()
        })
        this._buttonClosed.addEventListener('click', () =>{
            this._overImg.setEventListeners();
        })
    }

    _removeCard = () => {
        this._view.remove();
        this._view = null;
    }

    _makeActiveLike = () => {
        this._view.querySelector('.items__like-button').classList.toggle('items__like-button_active');
    }


    getViewCard = () => { 
        this._overImagePopup = document.querySelector('.popup_over-img');
        this._buttonClosed = this._overImagePopup.querySelector('.popup__closed');
        const templete = document.querySelector('#items__template').content;
        this._view = templete.cloneNode(true).querySelector('.items__content');
        this._itemImg = this._view.querySelector('.items__image');
        this._itemImg.src = this._link;
        this._itemImg.alt = this._name;


        this._view.querySelector('.items__title').textContent = this._name;
        this._view.querySelector('.items__like-button').addEventListener('click', () => {
           this._makeActiveLike();
        })

        this._view.querySelector('.items__trash').addEventListener('click', () => {
            this._removeCard();
        }); 
        this._handleCardClick ()

        return this._view;
    }
    
}

