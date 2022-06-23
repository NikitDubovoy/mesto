export class Card {

    constructor (handleCardClick, link, name, temlateItem, likes, cardId, userId, handleLikeClick, ownerId, cardDeleted) {
        this._temlateItem = temlateItem;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._link = link;
        this._name = name;
        this.likes = likes;
        this._cardId = cardId;
        this._userId = userId;
        this._ownerId = ownerId;
        this._cardDeleted = cardDeleted;
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

    _isCard() {
        if (this._ownerId != this._userId) {
            this._view.querySelector('.items__trash').classList.add('items__trash_no-visible')
        }
    }

    _generateCard () {
        const templete = document.querySelector(this._temlateItem).content;
        this._view = templete.cloneNode(true).querySelector('.items__content');
        this._itemImg = this._view.querySelector('.items__image');
        this._itemImg.src = this._link;
        this._itemImg.alt = this._name;
        this._view.querySelector('.items__title').textContent = this._name;
        return
    }

    getViewCard = () => { 
        this._generateCard()
        
        this._view.querySelector('.items__like-button').addEventListener('click', () => { 
            this._handleLikeClick(this._cardId);
        })

        this.makeActiveLike(this.isLiked());
        
        this._view.querySelector('.items__trash').addEventListener('click', () => {
            this._cardDeleted(this._cardId);
        }); 

        this._itemImg.addEventListener('click',  this._handleCardClick);
        this._isCard();
        this.getLikesLength (this.likes);
        return this._view;
    }
    
}

