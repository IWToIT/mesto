export default class UserInfo {
  constructor({userNameElement, userInfoElement, userAvatarElement}) {
    this._userNameElement = userNameElement;
    this._userInfoElement = userInfoElement;
    this._userAvatarElement = userAvatarElement;
  }

  getUserInfo() {
    this._userInfoValue = {
      userName: this._userNameElement.textContent,
      userInfo: this._userInfoElement.textContent,
      userAvatar: this._userAvatarElement.src,
    };
    return this._userInfoValue;
  }

  setUserInfo(newData) {
    this._userNameElement.textContent = newData.name;
    this._userInfoElement.textContent = newData.about;
    this._userAvatarElement.src = newData.avatar;
  };
}