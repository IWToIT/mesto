export default class UserInfo {
  constructor({userNameElement, userInfoElement}) {
    this._userNameElement = userNameElement;
    this._userInfoElement = userInfoElement;
  }

  getUserInfo() {
    this._userInfoValue = {
      userNameElement: this._userNameElement.textContent,
      userInfoElement: this._userInfoElement.textContent,
    };
    return this._userInfoValue;
  }

  setUserInfo(newData) {
    this._userNameElement.textContent = newData.userNameElement;
    this._userInfoElement.textContent = newData.userInfoElement;
  }
}