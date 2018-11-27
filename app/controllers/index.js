import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  username: 'aaaa',
  password: '123456',
  setCookie(name, value, sec) {
    let cookie = name + '=' + encodeURIComponent(value) + ';path=/';
    if (sec) {
      cookie += ";max-age=" + sec;
    }
    document.cookie = cookie;
  },
  checkifSupport () {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
  },
  setLocalStorage(key,value) {
    if(this.checkifSupport()) {
      try{
          window.localStorage.setItem(key, value);
      } catch(e) {
          throw new TypeError('Exceeded Storage Quota!');
      }
    } else {
        throw new TypeError("No support. Use a fallback such as browser cookies or store on the server.");
    }
  },
  actions: {
    doLogin() {
      let self = this,
        data = this.getProperties('username', 'password');
      $.ajax({
        type: 'post',
        url: 'http://localhost:3000/api/v1/auth/token',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
          self.setCookie('apiKey', data.token);//设置Cookie
          self.setLocalStorage("avatar",data.user.avatar);//设置localstorage存储数据
          self.setLocalStorage("username",data.user.username);
          self.setLocalStorage("email",data.user.email);
          self.transitionToRoute('/event'); //转入列表页
        }
      })
    }
  }
});
