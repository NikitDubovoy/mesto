

export class UserInfo {
    constructor(profile){
        this._name = profile.name;
        this._description = profile.description;
    }

    getUserInfo() {
         return {
            name: this._name.textContent,
            description: this._description.textContent
        } 
    }
    setUserInfo(userName, userDescription, e) {
        e.preventDefault();
        this._name.textContent = userName.value;
        this._description.textContent = userDescription.value; 
    }
}
    