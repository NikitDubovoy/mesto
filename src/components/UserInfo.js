export class UserInfo {
    constructor(profile){
        this._name = document.querySelector(profile.name);
        this._description = document.querySelector(profile.description);
        this._avatar = document.querySelector(profile.avatar);
    }

    getUserInfo() {
         return {
            name: this._name.textContent,
            description: this._description.textContent,
            avatar: this._avatar.src
        } 
    }
    setUserInfo(userName, userDesc) {
        this._name.textContent = userName;
        this._description.textContent = userDesc;

    }

    setAvatar(userAvatar){
        this._avatar.src = userAvatar

    }
    setUserId (id){
            this._id = id;
    }
    
    getUserId(){
        return this._id;
    }
}
    