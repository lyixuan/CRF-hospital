import Vue from 'vue'
import router from './router'
import bus from './bus';

// Vue.http.options.root = 'http://192.168.43.7:80'

Vue.prototype.alertMsg = function (type, msg) {
  //type : success/warning/info/error
  this.$message({
    type: type,
    message: msg
  })
};

Vue.prototype.stepTo = function (num) {
  router.push({path: '/record_' + num})
};

Vue.prototype.clearStorage = function () {
  sessionStorage.removeItem("x_step1_jbxx");
  sessionStorage.removeItem("x_step2_bs");
  sessionStorage.removeItem("x_step3_jws");
  sessionStorage.removeItem("x_step4_jy");
  sessionStorage.removeItem("x_step5_yx");
  sessionStorage.removeItem("x_step5_yx_checkList");
  sessionStorage.removeItem("x_step5_yx_checkedList");
  sessionStorage.removeItem("x_step6_zlfa");
  sessionStorage.removeItem("x_step6_zlfa_checkList");
  sessionStorage.removeItem("x_step6_zlfa_checkedList");
  sessionStorage.removeItem("x_step6_zlfa_dosageList");
  sessionStorage.removeItem("x_step6_zlfa_frequencyList");
  sessionStorage.removeItem("x_step6_zlfa_usageList");
  sessionStorage.removeItem("x_step7_pflb");
  sessionStorage.removeItem("x_step7_pflb_tabList");
  sessionStorage.removeItem("x_step8_sf");
  sessionStorage.removeItem("x_step9_img");
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
  if(request.url.indexOf('china')>0){

  } else {
    request.url = request.url + '.php'
  }
  next((response) => {
    if (response.status != 200) {
      Vue.prototype.alertMsg("error", response.status + " - " + response.url)
    }
  });
});

Vue.prototype.openDetail = function (cid,followId) {
  this.$router.push({path: 'search_detail/'+cid+'/'+followId})
}
Vue.prototype.addComparison = function (row) {
  let comparison = JSON.parse(window.sessionStorage.getItem('crf_comparison'))
  if (comparison) {
    if (comparison.length < 4) {
      for (let i = 0; i < comparison.length; i++) {
        if (comparison[i].card_id == row.card_id) {
          this.alertMsg("warning", "已存在")
          bus.$emit('COMP');
          return
        }
      }
      comparison.push({card_id: row.card_id, name: row.name, patient_id:row.patient_id})
      window.sessionStorage.setItem('crf_comparison', JSON.stringify(comparison))
      this.alertMsg("success", "已添加")
    } else {
      this.alertMsg("warning", "最多填加4条对比")
    }
  } else {
    let arr = [];
    arr.push({card_id: row.card_id, name: row.name, patient_id:row.patient_id})
    window.sessionStorage.setItem('crf_comparison', JSON.stringify(arr))
    this.alertMsg("success", "已添加")
  }
  bus.$emit('COMP');
}
