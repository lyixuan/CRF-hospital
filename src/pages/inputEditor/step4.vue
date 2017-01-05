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
        <span :class="{'t-active':'xcg' == checkedTab ?true:false}" @click="changeTab('xcg')">{{jyForm.xcg.name}}</span>
        <span :class="{'t-active':'xsh' == checkedTab ?true:false}" @click="changeTab('xsh')">{{jyForm.xsh.name}}</span>
        <span :class="{'t-active':'nxsx' == checkedTab ?true:false}"
              @click="changeTab('nxsx')">{{jyForm.nxsx.name}}</span>
        <span :class="{'t-active':'txbpas' == checkedTab ?true:false}" @click="changeTab('txbpas')">{{jyForm.txbpas.name}}</span>
        <span :class="{'t-active':'cmCfydb' == checkedTab ?true:false}" @click="changeTab('cmCfydb')">{{jyForm.cmCfydb.name}}</span>
        <span :class="{'t-active':'xlb' == checkedTab ?true:false}" @click="changeTab('xlb')">{{jyForm.xlb.name}}</span>
        <span :class="{'t-active':'thxhdb' == checkedTab ?true:false}" @click="changeTab('thxhdb')">{{jyForm.thxhdb.name}}</span>
        <span :class="{'t-active':'xxbjjsy' == checkedTab ?true:false}" @click="changeTab('xxbjjsy')">{{jyForm.xxbjjsy.name}}</span>
        <span :class="{'t-active':'dbCS' == checkedTab ?true:false}"
              @click="changeTab('dbCS')">{{jyForm.dbCS.name}}</span>
        <span :class="{'t-active':'knxmIII' == checkedTab ?true:false}" @click="changeTab('knxmIII')">{{jyForm.knxmIII.name}}</span>
      </div>
      <div style="clear: both;"></div>
      <div class="tab-content">
        <div class="table-box" v-if="'xcg' == checkedTab">
          <h1>{{jyForm.xcg.name}}</h1>
          <span class="span1">
          <el-date-picker v-model="jyForm.xcg.date" align="right" type="date"
                          placeholder="选择日期"></el-date-picker></span>
          <span class="span2">日期:</span>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.xcg.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-if="'xsh' == checkedTab">
          <h1>{{jyForm.xsh.name}}</h1>
          <span class="span1">
          <el-date-picker v-model="jyForm.xsh.date" align="right" type="date"
                          placeholder="选择日期"></el-date-picker></span>
          <span class="span2">日期:</span>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.xsh.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-if="'nxsx' == checkedTab">
          <h1>{{jyForm.nxsx.name}}</h1>
          <span class="span1">
          <el-date-picker v-model="jyForm.nxsx.date" align="right" type="date"
                          placeholder="选择日期"></el-date-picker></span>
          <span class="span2">日期:</span>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.nxsx.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-if="'txbpas' == checkedTab">
          <h1>{{jyForm.txbpas.name}}</h1>
          <span class="span1">
          <el-date-picker v-model="jyForm.txbpas.date" align="right" type="date"
                          placeholder="选择日期"></el-date-picker></span>
          <span class="span2">日期:</span>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.txbpas.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-if="'cmCfydb' == checkedTab">
          <h1>{{jyForm.cmCfydb.name}}</h1>
          <span class="span1">
          <el-date-picker v-model="jyForm.cmCfydb.date" align="right" type="date"
                          placeholder="选择日期"></el-date-picker></span>
          <span class="span2">日期:</span>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.cmCfydb.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-if="'xlb' == checkedTab">
          <h1>{{jyForm.xlb.name}}</h1>
          <span class="span1">
          <el-date-picker v-model="jyForm.xlb.date" align="right" type="date"
                          placeholder="选择日期"></el-date-picker></span>
          <span class="span2">日期:</span>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.xlb.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-if="'thxhdb' == checkedTab">
          <h1>{{jyForm.thxhdb.name}}</h1>
          <span class="span1">
          <el-date-picker v-model="jyForm.thxhdb.date" align="right" type="date"
                          placeholder="选择日期"></el-date-picker></span>
          <span class="span2">日期:</span>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.thxhdb.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-if="'xxbjjsy' == checkedTab">
          <h1>{{jyForm.xxbjjsy.name}}</h1>
          <span class="span1">
          <el-date-picker v-model="jyForm.xxbjjsy.date" align="right" type="date"
                          placeholder="选择日期"></el-date-picker></span>
          <span class="span2">日期:</span>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.xxbjjsy.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-if="'dbCS' == checkedTab">
          <h1>{{jyForm.dbCS.name}}</h1>
          <span class="span1">
          <el-date-picker v-model="jyForm.dbCS.date" align="right" type="date"
                          placeholder="选择日期"></el-date-picker></span>
          <span class="span2">日期:</span>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.dbCS.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-if="'knxmIII' == checkedTab">
          <h1>{{jyForm.knxmIII.name}}</h1>
          <span class="span1">
          <el-date-picker v-model="jyForm.knxmIII.date" align="right" type="date"
                          placeholder="选择日期"></el-date-picker></span>
          <span class="span2">日期:</span>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.knxmIII.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
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
        jyForm: {
          xcg: {
            items: [],
            name: "",
            date: ""
          },
          xsh: {
            items: [],
            name: "",
            date: ""
          },
          nxsx: {
            items: [],
            name: "",
            date: ""
          },
          txbpas: {
            items: [],
            name: "",
            date: ""
          },
          cmCfydb: {
            items: [],
            name: "",
            date: ""
          },
          xlb: {
            items: [],
            name: "",
            date: ""
          },
          dbCS: {
            items: [],
            name: "",
            date: ""
          },
          thxhdb: {
            items: [],
            name: "",
            date: ""
          },
          xxbjjsy: {
            items: [],
            name: "",
            date: ""
          },
          knxmIII: {
            items: [],
            name: ""
          },
        },
        checkedTab: "xcg"
      }
    },
    mounted(){
      this.getJy()
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
      changeTab(tab) {
        this.checkedTab = tab
      },
      getJy () {
        this.$resource(InputUrl + 'dict/jy.php').get().then((response) => {
          if (response.status == 200) {
            let result = response.body
            for (let key in result) {
              this.jyForm[key].name = result[key].name
              this.jyForm[key].items = result[key].items
//              for (let i = 0; i < result[key].items.length; i++) {
//                result[key].items[i].value = ''
//              }
            }
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

  .x-content {
    padding: 0;
    border: none;
  }

  .table-box > h1 {
    width: 100%;
    text-align: center;
    font-size: 16px;
  }

  .table-box > .span1, .table-box > .span2 {
    width: 150px;
    float: right;
    height: 40px;
    line-height: 40px;
  }

  .table-box > .span2 {
    width: 40px;
    float: right;
  }


</style>
