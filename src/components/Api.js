class Api {
    constructor({ baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
      
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)  
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)   
    }
  
    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method:"PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
              }),
          })
          .then(res => res.ok ? res.json() : Promise.reject(res.status))
          .catch(console.log)   
    }

    addCard(inputsValues) {
        return fetch(`${this._baseUrl}/cards`, {
            method:"POST",
            headers: this._headers,
            body: JSON.stringify({
                name: inputsValues.name,
                link: inputsValues.link
              }),
          })
          .then(res => res.ok ? res.json() : Promise.reject(res.status))
          .catch(console.log)   
    }



    deleteCard(id) {
      return fetch(`${this._baseUrl}/cards/${id}`, {
          method:"DELETE",
          headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)   
  }



  
   deleteLike(id) {
     return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method:"DELETE",
        headers: this._headers
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)   
  }


  
  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method:"PUT",
      headers: this._headers
      })
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .catch(console.log)   
  }



  
  




  }
  
  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
      authorization: '1abf7f9d-c23d-4867-8bbb-e68949373c5f',
      'Content-Type': 'application/json'
    }
  }); 