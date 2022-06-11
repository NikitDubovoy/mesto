

export class UserInfo {
    constructor(profile){
        this._name = profile.name;
        this._description = profile.description;
        this.profile = profile;
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
    