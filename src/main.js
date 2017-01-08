// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import './theme/index.css'

import InputEditorPage1 from './pages/inputEditor/step1.vue'
import InputEditorPage2 from './pages/inputEditor/step2.vue'
import InputEditorPage3 from './pages/inputEditor/step3.vue'
import InputEditorPage4 from './pages/inputEditor/step4.vue'
import InputEditorPage5 from './pages/inputEditor/step5.vue'
import InputEditorPage6 from './pages/inputEditor/step6.vue'
import InputEditorPage7 from './pages/inputEditor/step7.vue'
import InputEditorPage8 from './pages/inputEditor/step8.vue'
import InputEditorPage9 from './pages/inputEditor/step9.vue'
import InputEditorPage10 from './pages/inputEditor/step10.vue'
import InputEditorPage11 from './pages/inputEditor/step11.vue'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
require('./config')

const routes = [
  {path: '/', component: InputEditorPage1},
  {path: '/inputEditor/page1', component: InputEditorPage1},
  {path: '/inputEditor/page2', component: InputEditorPage2},
  {path: '/inputEditor/page3', component: InputEditorPage3},
  {path: '/inputEditor/page4', component: InputEditorPage4},
  {path: '/inputEditor/page5', component: InputEditorPage5},
  {path: '/inputEditor/page6', component: InputEditorPage6},
  {path: '/inputEditor/page7', component: InputEditorPage7},
  {path: '/inputEditor/page8', component: InputEditorPage8},
  {path: '/inputEditor/page9', component: InputEditorPage9},
  {path: '/inputEditor/page10', component: InputEditorPage10},
  {path: '/inputEditor/page11', component: InputEditorPage11}
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
  router.push({path: '/inputEditor/page' + num})
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
  localStorage.removeItem("x_step8_tpsc");
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
