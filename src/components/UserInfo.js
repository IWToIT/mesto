export default class UserInfo {
  constructor({userName, userInfo}) {
  this._userName = userName;
  this._userInfo = userInfo;
  }

  getUserInfo() {
    this._userInfoValue = {
      userName: this._userName.textContent,
      userInfo: this._userInfo.textContent,
    };
    return this._userInfoValue;
  }

  setUserInfo(newData) {
    this._userName.textContent = newData.userName;
    this._userInfo.textContent = newData.userInfo;
  }
}