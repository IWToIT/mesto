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

  _patchFetch(pathUrl, bodyConstructor) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(bodyConstructor),
    }).then((res) => this._getResponseServer(res));
  }

  _postFetch(pathUrl, bodyConstructor) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'POST',
      headers: this._headers,
      body: bodyConstructor,
    }).then((res) => this._getResponseServer(res));
  }

  _deleteFetch(pathUrl) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._getResponseServer(res));
  }

  _putFetch(pathUrl) {
    return fetch(`${this._baseUrl}${pathUrl}`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._getResponseServer(res));
  }

  getUserInfo() {
    return this._getFetch('/users/me');
  }

  getCards() {
    return this._getFetch('/cards')
  }

  changeProfile(data) {
   this._patchFetch('/users/me', 
      {
        name: data.userName,
        about: data.userInfo,
      }
    );
  }

  changeAvatar(data) {
    return this._patchFetch(`/users/me/avatar`, 
      JSON.stringify({
        avatar: data,
      })
    );
  }

  addCard(data) {
    return this._postFetch('/cards',
      JSON.stringify({
        name: data.name,
        link: data.link,
      })
    );
  }

  deleteCard(id) {
    return this._deleteFetch(`/cards/${id}`);
  }

  likeCard(id) {
    return this._putFetch(`/cards/${id}/likes`);
  }

  deleteLikeCard(id) {
    return this._deleteFetch(`/cards/${id}/likes`);
  }
}
