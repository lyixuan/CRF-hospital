<template>
  <div class="input-step4">
    <steps :activee="3"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">检验</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="saveAndStepTo(3)" size="mini">上一步</el-button>
          <el-button type="primary" @click="saveAndStepTo(5)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <div class="tabs">
        <span v-for="item in tabList" :class="{'t-active': item.key == checkedTab ?true:false}"
              @click="changeTab(item.key)">
           {{item.name}}
          <i class="el-icon-check" v-show="jyForm[item.key].date"
             :class="{ green: item.key == checkedTab?false:true }"></i>
        </span>
      </div>
      <div style="clear: both;"></div>
      <div class="tab-content">
        <transition name="fade">
          <div class="table-box" v-show="'xcg' == checkedTab">
            <h1>{{jyForm.xcg.name}}</h1>
            <span class="span1">
          <el-date-picker v-model="jyForm.xcg.date" align="right" type="date"
                          placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker></span>
            <span class="span2">日期:</span>
            <span class="span3"><el-button icon="delete" size="mini" @click="clearTable('xcg')">清空</el-button></span>
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
        </transition>
        <transition name="fade">
          <div class="table-box" v-show="'xsh' == checkedTab">
            <h1>{{jyForm.xsh.name}}</h1>
            <span class="span1">
          <el-date-picker v-model="jyForm.xsh.date" align="right" type="date"
                          placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker></span>
            <span class="span2">日期:</span>
            <span class="span3"><el-button icon="delete" size="mini" @click="clearTable('xsh')">清空</el-button></span>
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
        </transition>
        <transition name="fade">
          <div class="table-box" v-show="'nxsx' == checkedTab">
            <h1>{{jyForm.nxsx.name}}</h1>
            <span class="span1">
          <el-date-picker v-model="jyForm.nxsx.date" align="right" type="date"
                          placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker></span>
            <span class="span2">日期:</span>
            <span class="span3"><el-button icon="delete" size="mini" @click="clearTable('nxsx')">清空</el-button></span>
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
        </transition>
        <transition name="fade">
          <div class="table-box" v-show="'txbpas' == checkedTab">
            <h1>{{jyForm.txbpas.name}}</h1>
            <span class="span1">
          <el-date-picker v-model="jyForm.txbpas.date" align="right" type="date"
                          placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker></span>
            <span class="span2">日期:</span>
            <span class="span3"><el-button icon="delete" size="mini" @click="clearTable('txbpas')">清空</el-button></span>
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
        </transition>
        <transition name="fade">
          <div class="table-box" v-show="'cmCfydb' == checkedTab">
            <h1>{{jyForm.cmCfydb.name}}</h1>
            <span class="span1">
          <el-date-picker v-model="jyForm.cmCfydb.date" align="right" type="date"
                          placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker></span>
            <span class="span2">日期:</span>
            <span class="span3"><el-button icon="delete" size="mini"
                                           @click="clearTable('cmCfydb')">清空</el-button></span>
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
        </transition>
        <transition name="fade">
          <div class="table-box" v-show="'xlb' == checkedTab">
            <h1>{{jyForm.xlb.name}}</h1>
            <span class="span1">
          <el-date-picker v-model="jyForm.xlb.date" align="right" type="date"
                          placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker></span>
            <span class="span2">日期:</span>
            <span class="span3"><el-button icon="delete" size="mini" @click="clearTable('xlb')">清空</el-button></span>
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
        </transition>
        <transition name="fade">
          <div class="table-box" v-show="'thxhdb' == checkedTab">
            <h1>{{jyForm.thxhdb.name}}</h1>
            <span class="span1">
          <el-date-picker v-model="jyForm.thxhdb.date" align="right" type="date"
                          placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker></span>
            <span class="span2">日期:</span>
            <span class="span3"><el-button icon="delete" size="mini"
                                           @click="clearTable('thxhdb')">清空</el-button></span>
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
        </transition>
        <transition name="fade">
          <div class="table-box" v-show="'xxbjjsy' == checkedTab">
            <h1>{{jyForm.xxbjjsy.name}}</h1>
            <span class="span1">
          <el-date-picker v-model="jyForm.xxbjjsy.date" align="right" type="date"
                          placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker></span>
            <span class="span2">日期:</span>
            <span class="span3"><el-button icon="delete" size="mini"
                                           @click="clearTable('xxbjjsy')">清空</el-button></span>
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
        </transition>
        <transition name="fade">
          <div class="table-box" v-show="'dbCS' == checkedTab">
            <h1>{{jyForm.dbCS.name}}</h1>
            <span class="span1">
          <el-date-picker v-model="jyForm.dbCS.date" align="right" type="date"
                          placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker></span>
            <span class="span2">日期:</span>
            <span class="span3"><el-button icon="delete" size="mini" @click="clearTable('dbCS')">清空</el-button></span>
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
        </transition>
        <transition name="fade">
          <div class="table-box" v-show="'knxmIII' == checkedTab">
            <h1>{{jyForm.knxmIII.name}}</h1>
            <span class="span1">
          <el-date-picker v-model="jyForm.knxmIII.date" align="right" type="date"
                          placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker></span>
            <span class="span2">日期:</span>
            <span class="span3"><el-button icon="delete" size="mini"
                                           @click="clearTable('knxmIII')">清空</el-button></span>
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
        </transition>

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
            date: null
          },
          xsh: {
            items: [],
            name: "",
            date: null
          },
          nxsx: {
            items: [],
            name: "",
            date: null
          },
          txbpas: {
            items: [],
            name: "",
            date: null
          },
          cmCfydb: {
            items: [],
            name: "",
            date: null
          },
          xlb: {
            items: [],
            name: "",
            date: null
          },
          dbCS: {
            items: [],
            name: "",
            date: null
          },
          thxhdb: {
            items: [],
            name: "",
            date: null
          },
          xxbjjsy: {
            items: [],
            name: "",
            date: null
          },
          knxmIII: {
            items: [],
            name: "",
            date: null
          }
        },
        tabList: [],
        checkedTab: ""
      }
    },
    mounted(){
      let info;
      try {
        info = JSON.parse(window.sessionStorage.getItem('x_step4_jy'))
      } catch (err) {
        sessionStorage.removeItem("x_step4_jy");
      }
      if (info) {
        this.writeBack(info)
      } else {
        this.getJy()
      }
    },
    beforeDestroy: function () {
      this.$el.innerHTML='';
      for(let k in this.$data){
        delete this.$data[k]
      }
    },
    methods: {
      writeBack (info) {
        // 信息回显,value值在json转为vue的obj时,总是丢失,未找到原因,用下面方式暂时可以解决
        for (let key in info) {
          this.tabList.push({key: key, name: info[key].name})
          this.jyForm[key].name = info[key].name
          this.jyForm[key].date = info[key].date
          for (var i = 0; i < info[key].items.length; i++) {
            this.jyForm[key].items[i] = {}
            this.jyForm[key].items[i].No = info[key].items[i].No
            this.jyForm[key].items[i].key = info[key].items[i].key
            this.jyForm[key].items[i].name = info[key].items[i].name
            this.jyForm[key].items[i].unit = info[key].items[i].unit
            this.jyForm[key].items[i].value = info[key].items[i].value
            this.jyForm[key].items[i].std_high = info[key].items[i].std_high
            this.jyForm[key].items[i].std_low = info[key].items[i].std_low
          }
        }
        // 初始化选中tab
        this.checkedTab = this.tabList[0].key
        this.jyForm = JSON.parse(JSON.stringify(info));
      },
      storage() {
        for (let key in this.jyForm) {
          this.jyForm[key].date ? this.jyForm[key].date = this.formatDate(new Date(this.jyForm[key].date)) : ""
        }
        window.sessionStorage.setItem('x_step4_jy', JSON.stringify(this.jyForm))
      },
      saveAndStepTo(num) {
        for (let key in this.jyForm) {
          if (!this.validate(key)) {
            return
          }
        }
        this.storage()
        this.alertMsg("success", '"检验" 所填内容已暂存')
        this.stepTo(num)
      },
      validate(pTab) {
        // 校验,信息要么全填,要么全不填,emptyFlag和fullFlag如果都为1了,说明有空也有填的,校验不通过
        let emptyFlag = 0, fullFlag = 0;
        if (this.jyForm[pTab].date == null || this.jyForm[pTab].date == '') {
          emptyFlag = 1
        } else {
          fullFlag = 1;
        }
        for (var i = 0; i < this.jyForm[pTab].items.length; i++) {
          if (this.jyForm[pTab].items[i].value == '' || this.jyForm[pTab].items[i].value == null) {
            emptyFlag = 1;
          } else {
            fullFlag = 1;
          }
        }
        if (emptyFlag == 1 && fullFlag == 1) {
          this.alertMsg("warning", '请将 "' + this.jyForm[pTab].name + '" 信息填写完整,或清空不填')
          return false
        }
        return true
      },
      changeTab(tab) {
        if (this.validate(this.checkedTab)) {
          // 校验通过才可切换
          this.checkedTab = tab
        }
      },
      clearTable(tab) {
        this.jyForm[tab].date = null
        for (var i = 0; i < this.jyForm[tab].items.length; i++) {
          this.$set(this.jyForm[tab].items[i], 'value', null);
        }
      },
      getJy () {
        this.$resource(PATH_RECORD + 'dict/jy').get().then((response) => {
          if (response.status == 200) {
            let result = response.body
            for (let key in result) {
              this.jyForm[key].name = result[key].name
              this.jyForm[key].items = result[key].items
              for (let v = 0; v < this.jyForm[key].items.length; v++) {
                this.$set(this.jyForm[key].items[v], 'value', null);
              }
              this.tabList.push({key: key, name: result[key].name})
            }
            // 初始化选中tab
            this.checkedTab = this.tabList[0].key
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../style/record.css";

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

  .table-box > .span3 {
    width: 60px;
    float: left;
    margin-top: 8px;
  }

  .green {
    color: #13CE66;
  }


</style>
