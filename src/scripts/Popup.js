export class Popup {

    constructor(popupSelector) {
        this._popup = popupSelector;
    }

    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose)
    }

     _handleEscClose  = (e) =>{
        if ((e.key === 'Escape') || (e.target === e.currentTarget)) {
            this.close();
        } 
    }
    setEventListeners () {
        const closedButton = this._popup.querySelector('.popup__closed');
        closedButton.addEventListener('click', () =>{
            this.close();
        });
        this._popup.addEventListener('click', (e) =>{
            if (e.target === e.currentTarget){
                this.close();
              }
        })

    }
}