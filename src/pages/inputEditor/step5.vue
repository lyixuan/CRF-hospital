<template>
  <div class="input-step5">
    <steps :activee="4"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">影像学检查</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="saveAndStepTo(4)" size="mini">上一步</el-button>
          <el-button type="primary" @click="saveAndStepTo(6)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <h1 class="background-text">请选择项目</h1>
      <div class="checks">
        <el-checkbox-group v-model="checkedList">
          <el-checkbox :label=item.key v-for="item in checkList">{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div style="clear: both;"></div>
      <div class="tab-content">
        <el-form ref="yxForm" :model="yxForm" label-width="60px">
          <transition-group name="fade-list">
            <el-row class="line-out" v-for="item in checkedList" v-bind:key="item">
              <el-col :span="3">
                <el-button type="info">{{yxForm[item].name}}</el-button>
              </el-col>
              <el-col :span="5">
                <el-form-item label="日期:">
                  <el-date-picker v-model="yxForm[item].date" align="right" type="date"
                                  placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="描述:">
                  <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 3}" placeholder="限制512字内"
                            v-model=yxForm[item].ms
                            :maxlength="512"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="结论:">
                  <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 3}" placeholder="限制256字内"
                            v-model=yxForm[item].jl
                            :maxlength="256"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </transition-group>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step5',
    components: {
      Steps
    },
    data () {
      return {
        checkList: [],
        checkedList: [],
        yxForm: {
          tCT: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          tMRIDWI: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          tjCTA: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          tjCTV: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          tMRA: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          tjMRVortMRV: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          tDSA: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          jdmcs: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          TCD: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          jjmcs: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          nSPECT: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          },
          nPET: {
            name: "",
            ms: "",
            jl: "",
            date: ""
          }
        }
      }
    },
    mounted(){
      let info, info_checkedList, info_checkList;
      try {
        info = JSON.parse(window.localStorage.getItem('x_step5_yx'))
        info_checkedList = JSON.parse(window.localStorage.getItem('x_step5_yx_checkedList'))
        info_checkList = JSON.parse(window.localStorage.getItem('x_step5_yx_checkList'))
      } catch (err) {
        localStorage.removeItem("x_step5_yx");
        localStorage.removeItem("x_step5_yx_checkedList");
        localStorage.removeItem("x_step5_yx_checkList");
      }

      if (info) {
        this.writeBack(info, info_checkedList, info_checkList)
      } else {
        this.getYx()
      }
    },
    methods: {
      writeBack (info, info_checkedList, info_checkList) {
        this.yxForm = JSON.parse(JSON.stringify(info));
        this.checkedList = JSON.parse(JSON.stringify(info_checkedList));
        this.checkList = JSON.parse(JSON.stringify(info_checkList));
      },
      storage() {
        for (let key in this.yxForm) {
          this.yxForm[key].date ? this.yxForm[key].date = this.formatDate(new Date(this.yxForm[key].date)) : ""
        }
        window.localStorage.setItem('x_step5_yx', JSON.stringify(this.yxForm))
        window.localStorage.setItem('x_step5_yx_checkedList', JSON.stringify(this.checkedList))
        window.localStorage.setItem('x_step5_yx_checkList', JSON.stringify(this.checkList))
      },
      saveAndStepTo(num) {
        if (this.validate()) {
          this.storage()
          this.alertMsg("success", '"影像学检验" 所填内容已暂存')
          this.stepTo(num)
        }
      },
      validate() {
        // 勾选的项目必填
        for (let i = 0; i < this.checkedList.length; i++) {
          if (this.yxForm[this.checkedList[i]].date == '' || this.yxForm[this.checkedList[i]].ms == '' || this.yxForm[this.checkedList[i]].jl == '') {
            this.alertMsg("warning", '请将 "' + this.yxForm[this.checkedList[i]].name + '" 信息填写完整')
            return false
          }
        }
        return true
      },
      getYx () {
        this.$resource(InputUrl + 'dict/yx.php').get().then((response) => {
            if (response.status == 200) {
              let result = response.body.yx_items
              this.checkList = result
              for (let i = 0; i < result.length; i++) {
                for (let key in this.yxForm) {
                  if (key == result[i].key) {
                    this.yxForm[key].name = result[i].name
                  }
                }
              }
            } else {
              this.alertMsg("error", response.status + " - " + response.url)
            }
          }
        )
      }
    }
  }
</script>

<style scoped>
  @import "../../style/info_input.css";

  .x-content {
    border: none;
    padding: 0;
  }

  .checks {
    background: #F2F2F2;
    line-height: 30px;
    border-radius: 4px;
    padding: 0 15px;
  }

  .tab-content {
    background: #fff;
    border: none;
  }

  .line-out {
    border: 1px solid #00A2CA;
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
  }

  .el-button {
    padding: 5px;
    font-size: 12px;
  }

  .background-text {
    position: absolute;
    top: 100px;
    left: 45%;
    font-size: 18px;
    color: #00A2CA;
  }

</style>
