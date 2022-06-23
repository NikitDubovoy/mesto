export class Api {
    constructor(options) {

    }
  
    getInitialCards() {
    return  fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards',  
       { headers: {
        authorization: '5d158af5-4ee3-4978-967e-9b9c8d1b1d67',
        'Content-Type': 'application/json'
      }})
            .then((res) => {
                if (res.ok){
                    return res.json()
                }
                return Promise.reject('Error')
            })         
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
                }); 
            }
    addCard(card){
        const body = {
            name: card.name,
            link: card.link,
        }
        return  fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards',  
        {
        method: 'POST', 
        headers: {
            authorization: '5d158af5-4ee3-4978-967e-9b9c8d1b1d67',
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(body)
        })
        .then((res) => {
           return res.json();
        })


    }
    
    deletedCard(cardId) {
        return  fetch(`https://mesto.nomoreparties.co/v1/cohort-43/cards/${cardId}`,  
        {
        method: 'DELETE', 
        headers: {
            authorization: '5d158af5-4ee3-4978-967e-9b9c8d1b1d67',
            'Content-Type': 'application/json'
            },
        })
    }
    
    putLike(id) {
        return  fetch(`https://mesto.nomoreparties.co/v1/cohort-43/cards/${id}/likes`,  
        {
        method: 'PUT', 
        headers: {
            authorization: '5d158af5-4ee3-4978-967e-9b9c8d1b1d67',
            'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            return res.json();
         })
    }
    deleteLike(id) {
        return  fetch(`https://mesto.nomoreparties.co/v1/cohort-43/cards/${id}/likes`,  
        {
        method: 'DELETE', 
        headers: {
            authorization: '5d158af5-4ee3-4978-967e-9b9c8d1b1d67',
            'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            return res.json();
         })
    }           
    
    getUser() {
        return  fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me',  
        { headers: {
         authorization: '5d158af5-4ee3-4978-967e-9b9c8d1b1d67',
         'Content-Type': 'application/json'
       }})
             .then((res) => {
                 if (res.ok){
                     return res.json()
                 }
                 return Promise.reject('Error')
             })         
             .catch((err) => {
                 console.log(err); // выведем ошибку в консоль
                 }); 

    }
    editUser(user) {
        const body = {
            name: user.name,
            about: user.about
        }
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '5d158af5-4ee3-4978-967e-9b9c8d1b1d67',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }); 

    }
    
    editAvatar(avatar) {
        const body = {
            avatar: avatar
        }
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me/avatar', {
            method: 'PATCH',
            headers: {
                authorization: '5d158af5-4ee3-4978-967e-9b9c8d1b1d67',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }); 
    }

  }
  
