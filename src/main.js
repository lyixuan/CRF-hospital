// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import './theme/index.css'

import RecordPage1 from './pages/record/step1.vue'
import RecordPage2 from './pages/record/step2.vue'
import RecordPage3 from './pages/record/step3.vue'
import RecordPage4 from './pages/record/step4.vue'
import RecordPage5 from './pages/record/step5.vue'
import RecordPage6 from './pages/record/step6.vue'
import RecordPage7 from './pages/record/step7.vue'
import RecordPage8 from './pages/record/step8.vue'
import RecordPage9 from './pages/record/step9.vue'
import RecordPage10 from './pages/record/step10.vue'
import RecordPage11 from './pages/record/step11.vue'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
require('./config')

const routes = [
  {path: '/', component: RecordPage1},
  {path: '/record/page1', component: RecordPage1},
  {path: '/record/page2', component: RecordPage2},
  {path: '/record/page3', component: RecordPage3},
  {path: '/record/page4', component: RecordPage4},
  {path: '/record/page5', component: RecordPage5},
  {path: '/record/page6', component: RecordPage6},
  {path: '/record/page7', component: RecordPage7},
  {path: '/record/page8', component: RecordPage8},
  {path: '/record/page9', component: RecordPage9},
  {path: '/record/page10', component: RecordPage10},
  {path: '/record/page11', component: RecordPage11}
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});


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
// // 拦截器
// Vue.http.interceptors.push((request, next) => {
//   next((response) => {
//     if (response.status != 200) {
//       this.alertMsg("error", response.status + " - " + response.url)
//     }
//   });
// });

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
