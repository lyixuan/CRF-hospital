<template>
  <div class="input-step4">
    <steps :activee="3"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">检验</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(3)" size="mini">上一步</el-button>
          <el-button type="primary" @click="stepTo(5)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <div class="tabs">
        <span class="t-active">血常规</span>
        <span>血生化</span>
        <span>凝血四项</span>
        <span>同型半胱氨酸</span>
        <span>超敏C反应蛋白</span>
        <span>血流变</span>
        <span>糖化血红蛋白</span>
        <span>血小板聚集试验</span>
        <span>蛋白C+S</span>
        <span>抗凝血酶III</span>
      </div>
      <div style="clear: both;"></div>
      <div class="tab-content table-box">
        <div>
          <span>血常规</span>
          <table>
            <tr>
              <td>课程名称</td>
              <td>日期</td>
              <td>状态</td>
              <td>备注</td>
              <td>操作</td>
            </tr>
            <tr>
              <td>1</td>
              <td>3</td>
              <td>3</td>
              <td>4</td>
              <td>删除</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step4',
    components: {
      Steps
    },
    data () {
      return {
        baseData:{
          cmCfydb: {
            items: [
              {
                "No": "1",
                "key": "HSCRP",
                "name": "超敏c反应蛋白",
                "std_high": "3",
                "std_low": "0",
                "unit": "mg/L"
              }
            ],
            name: "超敏C反应蛋白"
          },
          dbCS: {
            items: [
              {
                "No": "1",
                "key": "PC",
                "name": "蛋白C",
                "std_high": "140",
                "std_low": "65",
                "unit": "%"
              }
            ],
            name: "蛋白C+S"
          },
          knxmIII: {
            items: [
              {
                "No": "1",
                "key": "ATIII",
                "name": "抗凝血酶III",
                "std_high": "120",
                "std_low": "80",
                "unit": "%"
              }
            ],
            name: "抗凝血酶III"
          },
          nxsx: {
            items: [
              {
                "No": "1",
                "key": "PT%",
                "name": "凝血酶原时间活动度",
                "std_high": "120",
                "std_low": "70",
                "unit": "%"
              }

            ],
            name: "凝血四项"
          },
          thxhdb: {
            items: [
              {
                "No": "1",
                "key": "HbAlc",
                "name": "糖化血红蛋白",
                "std_high": "6",
                "std_low": "4",
                "unit": "%"
              }
            ],
            name: "糖化血红蛋白"
          },
          txbpas: {
            items: [
              {
                "No": "1",
                "key": "HCY",
                "name": "同型半胱氨酸",
                "std_high": "20",
                "std_low": "0",
                "unit": "umol/L"
              }
            ],
            name: "同型半胱氨酸"
          },
          xcg: {
            items: [
              {
                "No": "1",
                "key": "WBC",
                "name": "白细胞计数",
                "std_high": "10",
                "std_low": "4",
                "unit": "10^9/L"
              },
            ],
            name: "血常规"
          },
          xlb: {
            items: [
              {
                "No": "1",
                "key": "xjnd",
                "name": "血浆粘度",
                "std_high": "1.71",
                "std_low": "1.17",
                "unit": "mPa.s"
              },

            ],
            name: "血生化"
          },
          xxbjjsy: {
            items: [
              {
                "No": "1",
                "key": "ADP-Pagt",
                "name": "ADP诱导的血小板聚集实验",
                "std_high": "84",
                "std_low": "52",
                "unit": "%"
              }
            ],
            name: "血小板聚集试验"
          }
        },
        jyForm:''
      }
    },
    mounted(){
      this.writeBack()
    },
    methods: {
      writeBack () {
        let info = JSON.parse(window.localStorage.getItem('x_step4_jy'))
        if (info) {
          this.jyForm = info
        }
      },
      storage() {
        window.localStorage.setItem('x_step4_jy', JSON.stringify(this.jyForm))
      },
      saveAndStepTo(num) {
        if (this.validate()) {
          this.storage()
          this.alertMsg("success", '"检验" 已暂存')
          this.stepTo(num)
        } else {
          this.alertMsg("warning", '信息校验有误')
          return false;
        }
      },
      validate() {
        for (let key in this.jwsForm) {
          if (this.jwsForm[key].type == '1' && this.jwsForm[key].info) {
            for (let iKey in this.jwsForm[key].info) {
              if (this.jwsForm[key].info[iKey] == '' || this.jwsForm[key].info[iKey] == null) {
                return false
                break
              }
            }
          }
        }
        return true
      },
      getJy () {
        this.$resource(InputUrl + 'dict/jy.php').get().then((response) => {
          if (response.status == 200) {
            this.baseData = response.body
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../style/info_input.css";

  .x-content{
    padding: 0;
    border: none;
  }
  .tabs span {
    padding: 5px;
    background: #C0CCDA;
    color: #fff;
    display: inline-block;
    float: left;
    margin-right: 1px;
    margin-top: 5px;
    cursor: pointer;
  }
  .tabs .t-active{
    background: #49C5D9;
  }
</style>
