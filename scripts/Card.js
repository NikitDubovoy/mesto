export class Card {
    _link;
    _name;
    _templete;
    _overImagePopup = document.querySelector('.popup_over-img');

    constructor (link, name, templete) {
        this._link = link;
        this._name = name;
        this._templete = templete;
    }

    _closeOverImageEsc = (e) => {
        if (e.key === 'Escape'){
            this._overImagePopup.classList.remove('popup_opened');
        };
        document.removeEventListener('keydown', this._closeOverImageEsc);
    }

    _removeCard = () => {
        this._view.remove();
    }
    
    _makeActiveLike = () => {
        this._view.querySelector('.items__like-button').classList.toggle('items__like-button_active');
    }

    _openOverImage = () => {
        this._overImagePopup.classList.add('popup_opened');
        this._overImagePopup.querySelector('.popup__image').src = this._link;
        this._overImagePopup.querySelector('.popup__title-img').textContent = this._name;
        document.addEventListener('keydown',  this._closeOverImageEsc);
        this._overImagePopup.querySelector('.popup__closed').addEventListener('click', () => {
            document.removeEventListener('keydown', this._closeOverImageEsc)
        } )
    }

    getViewCard = () => { 
        this._view = this._templete.cloneNode(true).querySelector('.items__content');
        this._view.querySelector('.items__image').src = this._link;
        this._view.querySelector('.items__title').textContent = this._name;
        this._view.querySelector('.items__like-button').addEventListener('click', () => {
           this._makeActiveLike();
        })
        this._view.querySelector('.items__trash').addEventListener('click', () => {
            this._removeCard();
        });
        this._view.querySelector('.items__image').addEventListener('click', () => {
            this._openOverImage();
        })
        
        
        return this._view;
    }
    
}

