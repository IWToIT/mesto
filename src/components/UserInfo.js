export default class UserInfo {
  constructor({userName, userInfo}) {
    this._userNameElement = userName;
    this._userInfoElement = userInfo;
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
  }
}