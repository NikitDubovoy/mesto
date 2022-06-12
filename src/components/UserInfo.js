

export class UserInfo {
    constructor(profile){
        this._name = document.querySelector(profile.name);
        this._description = document.querySelector(profile.description);
    }

    getUserInfo() {
         return {
            name: this._name.textContent,
            description: this._description.textContent
        } 
    }
    setUserInfo(userName, userDesc) {
        this._name.textContent = userName;
        this._description.textContent = userDesc;
    }
}
    