export class Api {
    constructor(url, token) {
        this._url = url,
        this._token = token
    }
    
    _getResponseData(data) {
        if (data.ok){
            return data.json()
        }
        return Promise.reject('Error')
    }

    getInitialCards() {
    return  fetch(`${this._url}/cards`,  
       { headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }})
            .then((res) => {
                return this._getResponseData(res)
            })         
    }
    addCard(card){
        const body = {
            name: card.name,
            link: card.link,
        }
        return  fetch(`${this._url}/cards`,  
        {
        method: 'POST', 
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(body)
        })
        .then((res) => {
           return res.json();
        })
    }
    
    deletedCard(cardId) {
        return  fetch(`${this._url}/cards/${cardId}`,  
        {
        method: 'DELETE', 
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
            },
        })
    }
    
    putLike(id) {
        return  fetch(`${this._url}/cards/${id}/likes`,  
        {
        method: 'PUT', 
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            return this._getResponseData(res);
         })

    }
    deleteLike(id) {
        return  fetch(`${this._url}/cards/${id}/likes`,  
        {
        method: 'DELETE', 
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            return this._getResponseData(res);
         })

    }           
    
    getUser() {
        return  fetch(`${this._url}/users/me`,  
        { headers: {
         authorization: this._token,
         'Content-Type': 'application/json'
         }})
        .then((res) => {
            return this._getResponseData(res);
        })         

    }
    editUser(user) {
        const body = {
            name: user.name,
            about: user.about
        }
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }); 

    }
    
    editAvatar(avatar) {
        const body = {
            avatar: avatar
        }
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }); 
    }

  }
  
