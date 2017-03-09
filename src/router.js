import Vue from 'vue'
import VueRouter from 'vue-router'

import RecordPage1 from './pages/record/step1'
import RecordPage2 from './pages/record/step2'
import RecordPage3 from './pages/record/step3'
import RecordPage4 from './pages/record/step4'
import RecordPage5 from './pages/record/step5'
import RecordPage6 from './pages/record/step6'
import RecordPage7 from './pages/record/step7'
import RecordPage8 from './pages/record/step8'
import RecordPage9 from './pages/record/step9'
import RecordPage10 from './pages/record/step10'
import RecordPage11 from './pages/record/step11'

import SearchIndex from './pages/search/index'
import SearchDetail from './pages/search/detail'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: RecordPage1},
  {path: '/record', component: RecordPage1},
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
  {path: '/record/page11', component: RecordPage11},

  {path: '/search', component: SearchIndex},
  {path: '/search/detail/:id', component: SearchDetail}
];


export default new VueRouter({
  linkActiveClass:"active",
  routes // （缩写）相当于 routes: routes
})
