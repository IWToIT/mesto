export default class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseServer(res) {
    if(!res.ok) {
      return Promise.reject (`Ошибка ${res.status}`); 
    }
    return res.json();
  }

  _getFetch(pathUrl) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      headers: this._headers,
    }).then((res) => this._getResponseServer(res));
  }

  changeProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: '6db5ed96-35c5-440d-93a7-5d404ebdd013',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:data.userName, about: data.userInfo,})
    }).then((res) => this._getResponseServer(res));
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: '6db5ed96-35c5-440d-93a7-5d404ebdd013',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: data.name, link: data.link,})
    }).then((res) => this._getResponseServer(res));
  }

  changeAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: '6db5ed96-35c5-440d-93a7-5d404ebdd013',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({avatar: data,})
    }).then((res) => this._getResponseServer(res));
  }

  getUserInfo() {
    return this._getFetch('/users/me');
  }

  getCards() {
    return this._getFetch('/cards')
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: '6db5ed96-35c5-440d-93a7-5d404ebdd013',
        'Content-Type': 'application/json'
      },
    }).then((res) => this._getResponseServer(res));
  }

  likeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '6db5ed96-35c5-440d-93a7-5d404ebdd013',
        'Content-Type': 'application/json'
      },
    }).then((res) => this._getResponseServer(res));
  }

  deleteLikeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: '6db5ed96-35c5-440d-93a7-5d404ebdd013',
        'Content-Type': 'application/json'
      },
    }).then((res) => this._getResponseServer(res));
  }
}
