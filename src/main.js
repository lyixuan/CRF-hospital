// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import ElementUI from 'element-ui'
import './theme/index.css'

Vue.use(VueResource);
Vue.use(ElementUI);
require('./config')
require('./proto')


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
