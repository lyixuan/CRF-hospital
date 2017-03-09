
import Vue from 'vue'
import router from './router'

// Vue.http.options.root = 'http://192.168.43.7:80'

Vue.prototype.alertMsg = function (type, msg) {
  //type : success/warning/info/error
  this.$message({
    type: type,
    message: msg
  })
};

Vue.prototype.stepTo = function (num) {
  router.push({path: '/record/page' + num})
};

Vue.prototype.clearStorage = function () {
  localStorage.removeItem("x_step1_jbxx");
  localStorage.removeItem("x_step2_bs");
  localStorage.removeItem("x_step3_jws");
  localStorage.removeItem("x_step4_jy");
  localStorage.removeItem("x_step5_yx");
  localStorage.removeItem("x_step5_yx_checkList");
  localStorage.removeItem("x_step5_yx_checkedList");
  localStorage.removeItem("x_step6_zlfa");
  localStorage.removeItem("x_step6_zlfa_checkList");
  localStorage.removeItem("x_step6_zlfa_checkedList");
  localStorage.removeItem("x_step6_zlfa_dosageList");
  localStorage.removeItem("x_step6_zlfa_frequencyList");
  localStorage.removeItem("x_step6_zlfa_usageList");
  localStorage.removeItem("x_step7_pflb");
  localStorage.removeItem("x_step7_pflb_tabList");
  localStorage.removeItem("x_step8_img");
};

Vue.prototype.formatDate = function (date) {
  /**
   * format date to yyyy-MM-dd
   * @date 毫秒
   */
  return date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())

};
// 拦截器
Vue.http.interceptors.push((request, next) => {
  /**
   * 暂时增加.php后缀  ***注意***  图片上传的url无法拦截处理,需要单独修改
   *
   * 现有位置1. step8.vue
   */
  request.url = request.url + '.php'
  next((response) => {
    if (response.status != 200) {
      this.alertMsg("error", response.status + " - " + response.url)
    }
  });
});
