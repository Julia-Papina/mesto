export default class UserInfo {
    constructor( {nameSelector, jobSelector, avatarSelector} ) {
      this._name = document.querySelector(nameSelector);
      this._job = document.querySelector(jobSelector);
      this._avatar = document.querySelector(avatarSelector);
    }
  //возвращает объект с данными пользователя
    getUserInfo() {
      return {
        name: this._name.textContent,
        job: this._job.textContent
      };
    }
  //принимает новые данные и добавляет их на страницу
    setUserInfo( name, job ) {
     if (name) this._name.textContent = name;
     if (job) this._job.textContent = job;
    }

    setUserAvatar( avatar ) {
      if (avatar) this._avatar.src = avatar
    }


  }