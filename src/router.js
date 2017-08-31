import Vue from 'vue'
import VueRouter from 'vue-router'

// 录入
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

// 统计
import Survey from './pages/stata/survey'
import Basic from './pages/stata/basic'
import History from './pages/stata/history'
import Cure from './pages/stata/cure'

// 查询
import S_Basic from './pages/search/basic'
import S_History from './pages/search/history'
import S_Previous from './pages/search/previous'
import S_Check from './pages/search/check'
import S_Image from './pages/search/image'
import S_Cure from './pages/search/cure'
import S_Detail from './pages/search/detail'
import S_Comp from './pages/search/comparison'

// 设置
import O_Log from './pages/setting/log'
import O_Medicine from './pages/setting/medicine'
import O_Priviledge from './pages/setting/priviledge'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Survey},
  {path: '/stata_survey', component: Survey},
  {path: '/stata_basic', component: Basic},
  {path: '/stata_history', component: History},
  {path: '/stata_cure', component: Cure},

  {path: '/search_basic', component: S_Basic},
  {path: '/search_history', component: S_History},
  {path: '/search_previous', component: S_Previous},
  {path: '/search_check', component: S_Check},
  {path: '/search_image', component: S_Image},
  {path: '/search_cure', component: S_Cure},
  {path: '/search_detail', component: S_Detail},
  {path: '/search_comp', component: S_Comp},

  {path: '/record_1', component: RecordPage1},
  {path: '/record_2', component: RecordPage2},
  {path: '/record_3', component: RecordPage3},
  {path: '/record_4', component: RecordPage4},
  {path: '/record_5', component: RecordPage5},
  {path: '/record_6', component: RecordPage6},
  {path: '/record_7', component: RecordPage7},
  {path: '/record_8', component: RecordPage8},
  {path: '/record_end', component: RecordPage9},
  {path: '/record_preview', component: RecordPage10},
  {path: '/record_11', component: RecordPage11},

  {path: '/setting_log', component: O_Log},
  {path: '/setting_medicine_input', component: O_Medicine},
  {path: '/setting_priviledge', component: O_Priviledge},

];


export default new VueRouter({
  linkActiveClass:"active",
  routes // （缩写）相当于 routes: routes
})
