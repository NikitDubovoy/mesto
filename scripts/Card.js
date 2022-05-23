import {openPopup} from './main.js';
import {itemImage, titleImage} from './main.js';

export class Card {

    constructor (link, name) {
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

    _openOverImage = () => {
        itemImage.src = this._link;
        itemImage.alt = this._name;
        titleImage.textContent = this._name;
    }

    getViewCard = () => { 
        const overImagePopup = document.querySelector('.popup_over-img');
        const templete = document.querySelector('#items__template').content;
        this._view = templete.cloneNode(true).querySelector('.items__content');
        const itemImg = this._view.querySelector('.items__image');
        itemImg.src = this._link;
        itemImg.alt = this._name;

        itemImg.addEventListener('click', () => {
            openPopup(overImagePopup);
            this._openOverImage();
        });

        this._view.querySelector('.items__title').textContent = this._name;
        this._view.querySelector('.items__like-button').addEventListener('click', () => {
           this._makeActiveLike();
        })

        this._view.querySelector('.items__trash').addEventListener('click', () => {
            this._removeCard();
        });     
        
        return this._view;
    }
    
}

