export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
      this._name = document.querySelector(nameSelector);
      this._job = document.querySelector(jobSelector);
    }
  //возвращает объект с данными пользователя
    getUserInfo() {
      return {
        name: this._name.textContent,
        job: this._job.textContent,
      };
    }
  //принимает новые данные и добавляет их на страницу
    setUserInfo(name, job) {
      this._name.textContent = name;
      this._job.textContent = job;
    }
  }