<template>
  <div class="input-step6">
    <steps :activee="5"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">治疗方案</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="saveAndStepTo(5)" size="mini">上一步</el-button>
          <el-button type="primary" @click="saveAndStepTo(7)" size="mini">下一步</el-button>
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
        <el-form ref="zlfaForm" :model="zlfaForm" label-width="70px">
          <el-row>
            <el-col :span="19"> &nbsp;</el-col>
            <el-col :span="5">
              <el-form-item label="日期:">
                <el-date-picker v-model="zlfaForm.date" align="right" type="date"
                                placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <transition-group name="fade-list">
            <el-row class="line-out" v-for="item in checkedList" v-bind:key="item">
              <el-col :span="3">
                <el-button type="info">{{zlfaForm[item].name}}</el-button>
              </el-col>
              <el-col :span="21">
                <el-row :gutter="10" v-for="(value,key) in zlfaForm[item]" v-if="key != 'name' && key != 'types' && key != 'flag'">
                  <el-col :span="2" class="add-btn">
                    &nbsp;
                    <el-button type="info" @click="addType(item,key)" v-if="key == zlfaForm[item].flag">+</el-button>
                    <el-button type="danger" @click="delType(item,key)" v-if="key != 'z1' && key == zlfaForm[item].flag">-</el-button>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="种类:" class="zhong-lei-label">
                      <el-select v-model="zlfaForm[item][key].type" placeholder="请选择">
                        <el-option v-for="item in zlfaForm[item].types" :label="item.name"
                                   :value="item.key"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="用量:">
                      <el-select v-model="zlfaForm[item][key].dosage" placeholder="请选择">
                        <el-option v-for="item in dosageList" :label="item.name" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="次数:">
                      <el-select v-model="zlfaForm[item][key].frequency" placeholder="请选择">
                        <el-option v-for="item in frequencyList" :label="item.name" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="服用方式:">
                      <el-select v-model="zlfaForm[item][key].usage" placeholder="请选择">
                        <el-option v-for="item in usageList" :label="item.name" :value="item.id"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
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
    name: 'input-step6',
    components: {
      Steps
    },
    data () {
      return {
        checkList: [],
        checkedList: [],
        dosageList: [],
        frequencyList: [],
        usageList: [],
        zlfaForm: {
          date: '',
          RIC: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          },
          jty: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          }
          ,
          jyy: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          },
          jzy: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          },
          kn: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          },
          kxxby: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          },
          other: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          }
        }
      }
    },
    mounted(){
      let info, info_checkedList, info_checkList, info_dosageList, info_frequencyList, info_usageList;
      try {
        info = JSON.parse(window.sessionStorage.getItem('x_step6_zlfa'))
        info_checkedList = JSON.parse(window.sessionStorage.getItem('x_step6_zlfa_checkedList'))
        info_checkList = JSON.parse(window.sessionStorage.getItem('x_step6_zlfa_checkList'))
        info_dosageList = JSON.parse(window.sessionStorage.getItem('x_step6_zlfa_dosageList'))
        info_frequencyList = JSON.parse(window.sessionStorage.getItem('x_step6_zlfa_frequencyList'))
        info_usageList = JSON.parse(window.sessionStorage.getItem('x_step6_zlfa_usageList'))
      } catch (err) {
        sessionStorage.removeItem("x_step6_zlfa");
        sessionStorage.removeItem("x_step6_zlfa_checkedList");
        sessionStorage.removeItem("x_step6_zlfa_checkList");
        sessionStorage.removeItem("x_step6_zlfa_dosageList");
        sessionStorage.removeItem("x_step6_zlfa_frequencyList");
        sessionStorage.removeItem("x_step6_zlfa_usageList");
      }

      if (info) {
        this.writeBack(info, info_checkedList, info_checkList, info_dosageList, info_frequencyList, info_usageList)
      } else {
        this.getZlfa()
      }
    },
    methods: {
      writeBack (info, info_checkedList, info_checkList, info_dosageList, info_frequencyList, info_usageList) {
        this.zlfaForm = JSON.parse(JSON.stringify(info));
        this.checkedList = JSON.parse(JSON.stringify(info_checkedList));
        this.checkList = JSON.parse(JSON.stringify(info_checkList));
        this.dosageList = JSON.parse(JSON.stringify(info_dosageList));
        this.frequencyList = JSON.parse(JSON.stringify(info_frequencyList));
        this.usageList = JSON.parse(JSON.stringify(info_usageList));
      },
      storage() {
        this.zlfaForm.date ? this.zlfaForm.date = this.formatDate(new Date(this.zlfaForm.date)) : ""
        window.sessionStorage.setItem('x_step6_zlfa', JSON.stringify(this.zlfaForm))
        window.sessionStorage.setItem('x_step6_zlfa_checkedList', JSON.stringify(this.checkedList))
        window.sessionStorage.setItem('x_step6_zlfa_checkList', JSON.stringify(this.checkList))
        window.sessionStorage.setItem('x_step6_zlfa_dosageList', JSON.stringify(this.dosageList))
        window.sessionStorage.setItem('x_step6_zlfa_frequencyList', JSON.stringify(this.frequencyList))
        window.sessionStorage.setItem('x_step6_zlfa_usageList', JSON.stringify(this.usageList))
      },
      saveAndStepTo(num) {
        if (this.validate()) {
          this.storage()
          this.alertMsg("success", '"治疗方案" 所填内容已暂存')
          this.stepTo(num)
        }
      },
      validate() {
        // 勾选的项目必填
        for (let i = 0; i < this.checkedList.length; i++) {
          for(let k in this.zlfaForm[this.checkedList[i]]){
            if(k != 'name' && k != 'types'){
              if (this.zlfaForm[this.checkedList[i]][k].type == ''
                || this.zlfaForm[this.checkedList[i]][k].dosage == ''
                || this.zlfaForm[this.checkedList[i]][k].frequency == ''
                || this.zlfaForm[this.checkedList[i]][k].usage == '') {
                this.alertMsg("warning", '请将 "' + this.zlfaForm[this.checkedList[i]].name + '" 信息填写完整')
                return false
              }
            }
          }
          if (this.zlfaForm.date == '') {
            this.alertMsg("warning", '请选择治疗方案日期')
            return false
          }
        }
        return true
      },
      getZlfa () {
        this.$resource(PATH_RECORD + 'dict/zlfa').get().then((response) => {
            if (response.status == 200) {
              let result_items = response.body.items
              this.dosageList = response.body.dosage.items
              this.frequencyList = response.body.frequency.items
              this.usageList = response.body.usage.items
              for (let key in result_items) {
                this.checkList.push({key: key, name: result_items[key].name})
                for (let key1 in this.zlfaForm) {
                  if (key == key1) {
                    this.zlfaForm[key1].name = result_items[key].name
                    this.zlfaForm[key1].types = result_items[key].items
                    this.zlfaForm[key1].flag = "z1"
                  }
                }
              }
            } else {
              this.alertMsg("error", response.status + " - " + response.url)
            }
          }
        )
      },
      addType(m, k){
        let kn = parseInt(k.substr(1, 1))
        let str = 'z' + ++kn
        this.zlfaForm[m].flag = str;
        this.$set(this.zlfaForm[m], str, {
          type: "",
          dosage: "",
          frequency: "",
          usage: ""
        });

      },
      delType(m, k){
        this.$set(this.zlfaForm[m], k, null);
        delete this.zlfaForm[m][k]
        let kn = parseInt(k.substr(1, 1))
        this.zlfaForm[m].flag ='z'+ --kn;
      }
    }
  }
</script>

<style scoped>
  @import "../../style/record.css";

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
    padding-left: 10px;
    padding-top: 15px;
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
