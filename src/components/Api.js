class Api {
    constructor({ baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
      
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)   
    }



  
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)   
    }
  
    // другие методы работы с API
  }
  
  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
    headers: {
      authorization: '1abf7f9d-c23d-4867-8bbb-e68949373c5f',
      'Content-Type': 'application/json'
    }
  }); 