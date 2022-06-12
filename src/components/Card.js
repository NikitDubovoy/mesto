/* import {openPopup} from './main.js';
import {itemImage, titleImage} from './main.js'; */

export class Card {

    constructor (handleCardClick, link, name, temlateItem) {
        this._temlateItem = temlateItem;
        this._handleCardClick = handleCardClick;
        this._link = link;
        this._name = name;
    }

    _removeCard = () => {
        this._view.remove();
        this._view = null;
    }

    _makeActiveLike = () => {
        this._view.querySelector('.items__like-button').classList.toggle('items__like-button_active');
    }


    getViewCard = () => { 
        const templete = document.querySelector(this._temlateItem).content;
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

        this._itemImg.addEventListener('click',  this._handleCardClick);

        return this._view;
    }
    
}

