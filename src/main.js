// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import './theme/index.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
