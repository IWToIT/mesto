export default class UserInfo {
  constructor({userNameElement, userInfoElement}) {
    this._userNameElement = userNameElement;
    this._userInfoElement = userInfoElement;
  }

  getUserInfo() {
    this._userInfoValue = {
      userName: this._userNameElement.textContent,
      userInfo: this._userInfoElement.textContent,
    };
    return this._userInfoValue;
  }

  setUserInfo(newData) {
    this._userNameElement.textContent = newData.userName;
    this._userInfoElement.textContent = newData.userInfo;
  };
}