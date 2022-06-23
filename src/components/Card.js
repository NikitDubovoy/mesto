export class Card {

    constructor (handleCardClick, link, name, temlateItem, likes, cardId, userId, handleLikeClick, ownerId, popup) {
        this._temlateItem = temlateItem;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._link = link;
        this._name = name;
        this.likes = likes;
        this._cardId = cardId;
        this._userId = userId;
        this._ownerId = ownerId;
        this._popup = popup;
    }

    removeCard = () => {
        this._view.remove();
        this._view = null;
    }
    

    makeActiveLike(isLiked) {
        this._view.querySelector('.items__like-button')
        .classList.toggle('items__like-button_active', isLiked);
    }

    getLikesLength (arrayLike) {
        this._view.querySelector('.items__like-counter').textContent = arrayLike.length;
    }

    isLiked() {
        return this.likes.some((like) => {
           return like._id === this._userId
        })
      }

    isCard() {
        if (this._ownerId != this._userId) {
            this._view.querySelector('.items__trash').classList.add('items__trash_no-visible')
        }
    }

    getViewCard = () => { 
        const templete = document.querySelector(this._temlateItem).content;
        this._view = templete.cloneNode(true).querySelector('.items__content');
        this._itemImg = this._view.querySelector('.items__image');
        this.isCard()
        this._itemImg.src = this._link;
        this._itemImg.alt = this._name;
        this.getLikesLength (this.likes);
        
        this._view.querySelector('.items__title').textContent = this._name;
        this._view.querySelector('.items__like-button').addEventListener('click', () => { 
            this._handleLikeClick(this._cardId);
        })
        this.makeActiveLike(this.isLiked());
        this._view.querySelector('.items__trash').addEventListener('click', () => {
            this._popup.open();
            this._popup.setEventListeners(this._cardId);
        }); 

        this._itemImg.addEventListener('click',  this._handleCardClick);

        return this._view;
    }
    
}

