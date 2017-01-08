<template>
  <div class="input-step9">
    <steps :activee="8"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">完成</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(8)" size="mini">上一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <div class="tab-content">
        <div class="finish-tip">恭喜！信息录入完成</div>
        <div class="finish-btn">
          <el-button type="primary" @click="stepTo(10)">预览</el-button>
          <el-button type="primary" @click="openDia">保存</el-button>
        </div>
      </div>
    </div>
    <el-dialog title="消息提示" v-model="dialogVisible" size="tiny" :close-on-click-modal="false"
               :close-on-press-escape="false" :show-close="false">
      <span style="font-size: 16px;font-weight: bold;margin-left: 40%;">是否确定保存?</span>
      <span slot="footer" class="dialog-footer first"><el-button type="primary" @click="cancel">取消</el-button></span>
      <span slot="footer" class="dialog-footer"><el-button type="primary" @click="submitForm">保存,并开始下次录入</el-button></span>
    </el-dialog>

  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step9',
    components: {
      Steps
    },
    data () {
      return {
        dialogVisible: false,
        submitList: {}
      }
    },
    methods: {
      openDia(){
        this.dialogVisible = true;
      },
      submitForm() {
        this.getStep1()
        this.getStep2()
        this.getStep3()
        this.getStep4()
        this.getStep5()
        this.getStep6()
        this.getStep7()
        var resource = this.$resource(InputUrl + 'form_post.php')
        resource.save({}, this.submitList).then((response) => {
          if (response.status == 200) {
            this.clearAndStepTo(1)
          } else {
            this.alertMsg("error", response.status + ':' +response.body.msg + " - " + response.url)
          }
        }, (response) => {
          this.alertMsg("error", response.status + " - " + response.url)
        })
      },
      getStep1(){
        this.submitList.jbxx = JSON.parse(window.localStorage.getItem('x_step1_jbxx'))
      },
      getStep2(){
        this.submitList.bs = JSON.parse(window.localStorage.getItem('x_step2_bs'))
      },
      getStep3(){
        this.submitList.jws = JSON.parse(window.localStorage.getItem('x_step3_jws'))
      },
      getStep4(){
        this.submitList.jy = {}
        // 只提交有内容的检验,即date不为null
        let x_step4_jy = JSON.parse(window.localStorage.getItem('x_step4_jy'))
        for (let key in x_step4_jy) {
          if (x_step4_jy[key].date) {
            this.submitList.jy[key] = x_step4_jy[key]
          }
        }
      },
      getStep5(){
        this.submitList.yx = {}
        let temp = JSON.parse(window.localStorage.getItem('x_step5_yx'))
        let checkedList = JSON.parse(window.localStorage.getItem('x_step5_yx_checkedList'))
        for (let key in temp) {
          for (let i = 0; i < checkedList.length; i++) {
            if (key == checkedList[i]) {
              this.submitList.yx[key] = temp[key]
            }
          }
        }
      },
      getStep6(){
        this.submitList.zlfa = {}
        let temp = JSON.parse(window.localStorage.getItem('x_step6_zlfa'))
        let checkedList = JSON.parse(window.localStorage.getItem('x_step6_zlfa_checkedList'))
        this.x_step6_zlfa_date = temp.date
        for (let key in temp) {
          if (key != 'date') {
            for (let i = 0; i < checkedList.length; i++) {
              if (key == checkedList[i]) {
                delete temp[key].types
                this.submitList.zlfa[key] = temp[key]
              }
            }
          }
        }
      },
      getStep7(){
        this.submitList.pflb = {}
        let x_step7_pflb = JSON.parse(window.localStorage.getItem('x_step7_pflb'))
        for (let key in x_step7_pflb) {
          if (x_step7_pflb[key].No1 != '') {
            this.submitList.pflb[key] = x_step7_pflb[key]
          }
        }
      },
      clearAndStepTo(num){
        this.clearStorage()
        this.stepTo(num)
        this.dialogVisible = false
      },
      cancel(){
        this.dialogVisible=false
      }
    }
  }
</script>

<style scoped>
  @import "../../style/info_input.css";

  .x-content {
    border: none;
    padding: 0;
    background: #fff;
  }

  .finish-tip {
    font-size: 30px;
    text-align: center;
    margin-top: 13%;
    color: #00A2CA;
  }

  .finish-btn {
    margin-top: 50px;
    text-align: center;
    margin-bottom: 13%;
  }
  .first{
    margin-right: 10px;
  }
</style>
