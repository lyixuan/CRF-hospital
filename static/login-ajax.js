if (navigator.userAgent.toLocaleLowerCase().indexOf('msie') !== -1 && !+[1,]) {
  //ie8检测
  alert('您的浏览器版本过低,请升级浏览器或更换他浏览器再试！');
}

var loginObj = {
  loginSubmit: function (params, url) {
    var postData = {
      user_name: document.getElementById("account").value,
      password: document.getElementById("password").value
    }
    if (postData.user_name == '') {
      loginObj.loginError();
      return
    }
    params = JSON.stringify(postData);
    url = 'http://rap.taobao.org/mockjsdata/12461/api/login.php'
    var xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (window.sessionStorage) {
            sessionStorage.setItem("uusessions", params);
            var url = window.location.href.substring(0, window.location.href.indexOf(window.location.pathname) + 1) + "#/search";
            window.location.href = url;
          } else {
            //ie8以下
            alert('您的浏览器版本过低,请升级浏览器或更换他浏览器再试！');
          }
        } else {
          loginObj.loginError();
          return false;
        }
      }
    };
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(params);
  },
  loginError: function () {
    var error = document.getElementById("error");
    var tmp = parseInt(error.style.right)
    if (tmp > 5) {
      return
    }
    tmp += 10
    error.style.right = tmp + 'px';
    var timer = setTimeout(loginObj.loginError, 10)
    if (tmp > 5) {
      clearTimeout(timer)
    }
  },
  clearLoginErrorFn: function () {
    var error = document.getElementById("error");
    var tmp = parseInt(error.style.right)
    if (tmp < -100) {
      return
    }
    tmp -= 20
    error.style.right = tmp + 'px';
    var timer = setTimeout(loginObj.clearLoginErrorFn, 10)
    if (tmp < -100) {
      clearTimeout(timer)
    }
  }
}
document.getElementById("account").onfocus = loginObj.clearLoginErrorFn
document.getElementById("password").onfocus = loginObj.clearLoginErrorFn
// 登录
document.getElementById("submit").onclick = loginObj.loginSubmit;
// 回车登录
document.getElementById("password").onkeydown = function (event) {
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if (e && e.keyCode == 13) {
    document.getElementById("submit").onclick
  }
};
