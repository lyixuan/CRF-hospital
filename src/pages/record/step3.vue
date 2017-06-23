<template>
  <div class="input-step3">
    <steps :activee="2"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">既往史</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="saveAndStepTo(2)" size="mini">上一步</el-button>
          <el-button type="primary" @click="saveAndStepTo(4)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <el-form ref="jwsForm" :model="jwsForm" :rules="rules" label-width="90px">
        <el-row>
          <el-col :span="7">
            <el-form-item label="高血压:" required>
              <el-radio-group v-model="jwsForm.gxy.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="17" v-if="jwsForm.gxy.type == 1">
            <el-row>
              <el-col :span="5">
                <el-form-item label="最高:" >
                  <el-date-picker v-model="jwsForm.gxy.info.zg_date" align="right" type="year" :clearable="false"
                                  placeholder="选择年"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="1" class="m-label">
                &nbsp;
              </el-col>
              <el-col :span="2">
                <el-input v-model="jwsForm.gxy.info.xy_zg_high" placeholder="收缩压"></el-input>
              </el-col>
              <el-col :span="1" class="m-label">
                /
              </el-col>
              <el-col :span="2">
                <el-input v-model="jwsForm.gxy.info.xy_zg_low" placeholder="舒张压"></el-input>
              </el-col>
              <el-col :span="1" class="m-label">
                mmHg
              </el-col>
              <el-col :span="5">
                <el-form-item label="现在:">
                  <el-date-picker v-model="jwsForm.gxy.info.now_date" align="right" type="year" :clearable="false"
                                  placeholder="选择年"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="1" class="m-label">
                &nbsp;
              </el-col>
              <el-col :span="2">
                <el-input v-model="jwsForm.gxy.info.xy_now_high" placeholder="收缩压"></el-input>
              </el-col>
              <el-col :span="1" class="m-label">
                /
              </el-col>
              <el-col :span="2">
                <el-input v-model="jwsForm.gxy.info.xy_now_low" placeholder="舒张压"></el-input>
              </el-col>
              <el-col :span="1" class="m-label">
                mmHg
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="糖尿病:" required>
              <el-radio-group v-model="jwsForm.tnb.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="17" v-if="jwsForm.tnb.type == 1">
            <el-row>
              <el-col :span="12">
                <el-form-item label="年份:">
                  <el-date-picker v-model="jwsForm.tnb.info.date" align="right" type="year" :clearable="false"
                                  placeholder="选择年"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="3" class="m-label">
                空腹血糖:
              </el-col>
              <el-col :span="3">
                <el-input v-model="jwsForm.tnb.info.xt_data"></el-input>
              </el-col>
              <el-col :span="2" class="m-label">
                mmol/L
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="冠心病:" required>
              <el-radio-group v-model="jwsForm.gxb.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="17" v-if="jwsForm.gxb.type == 1">
            <el-row>
              <el-col :span="12">
                <el-form-item label="年份:">
                  <el-date-picker v-model="jwsForm.gxb.info.date" align="right" type="year" :clearable="false"
                                  placeholder="选择年"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="高脂血症:" required>
              <el-radio-group v-model="jwsForm.gzxz.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="房颤:" required>
              <el-radio-group v-model="jwsForm.fc.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="TIA:" required>
              <el-radio-group v-model="jwsForm.tia.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="脑梗:" required>
              <el-radio-group v-model="jwsForm.ng.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="17" v-if="jwsForm.ng.type == 1">
            <el-row>
              <el-col :span="23">
                <el-form-item label="后遗症:">
                  <el-input v-model="jwsForm.ng.info.hyz"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="颈椎病:" required>
              <el-radio-group v-model="jwsForm.jzb.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="吸烟:" required>
              <el-radio-group v-model="jwsForm.xy.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="饮酒:" required>
              <el-radio-group v-model="jwsForm.yj.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="肿瘤史:" required>
              <el-radio-group v-model="jwsForm.zls.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="17" v-if="jwsForm.zls.type == 1">
            <el-row>
              <el-col :span="23">
                <el-form-item label="描述:">
                  <el-input v-model="jwsForm.zls.info.ms"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step3',
    components: {
      Steps
    },
    data () {
      return {
        jwsForm: {
          gxy: {
            type: "2",
            info: {
              now_date: "",
              xy_now_high: "",
              xy_now_low: "",
              zg_date: "",
              xy_zg_high: "",
              xy_zg_low: ""
            }
          },
          tnb: {
            type: "2",
            info: {
              date: "",
              xt_data: ""
            }
          },
          gxb: {
            type: "2",
            info: {
              date: ""
            }
          },
          gzxz: {
            type: "2"
          },
          fc: {
            type: "2"
          },
          tia: {
            type: "2"
          },
          ng: {
            type: "2",
            info: {
              hyz: ""
            }
          },
          jzb: {
            type: "2"
          },
          xy: {
            type: "2"
          },
          yj: {
            type: "2"
          },
          zls: {
            type: "2",
            info: {
              ms: ""
            }
          }
        },
        rules: {}
      }
    },
    mounted(){
      let info;
      try {
        info = JSON.parse(window.sessionStorage.getItem('x_step3_jws'))
      } catch (err) {
        sessionStorage.removeItem("x_step3_jws");
      }
      if (info) {
        this.writeBack(info)
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
        this.jwsForm = info
      },
      storage() {
        this.jwsForm.gxy.info.zg_date = this.formatDate(new Date(this.jwsForm.gxy.info.zg_date))
        this.jwsForm.gxy.info.now_date  = this.formatDate(new Date(this.jwsForm.gxy.info.now_date))
        this.jwsForm.tnb.info.date = this.formatDate(new Date(this.jwsForm.tnb.info.date))
        this.jwsForm.gxb.info.date = this.formatDate(new Date(this.jwsForm.gxb.info.date))
        window.sessionStorage.setItem('x_step3_jws', JSON.stringify(this.jwsForm))
      },
      saveAndStepTo(num) {
        if (this.validate()) {
          this.storage()
          this.alertMsg("success", '"既往史" 所填内容已暂存')
          this.stepTo(num)
        } else {
          this.alertMsg("warning", '存在既往史的项目必须填写完整信息')
          return false;
        }
      },
      validate() {
        for (let key in this.jwsForm) {
          if (this.jwsForm[key].type == '1' && this.jwsForm[key].info) {
            for (let iKey in this.jwsForm[key].info) {
              if (this.jwsForm[key].info[iKey] == '' || this.jwsForm[key].info[iKey] == null || this.jwsForm[key].info[iKey] =='NaN-NaN-NaN' ) {
                return false
                break
              }
            }
          }
        }
        return true
      }
    }
  }
</script>

<style scoped>
  @import "../../style/record.css";

  .el-form-item {
    margin-bottom: 3px !important;
  }

  .row-line {
    border-bottom: 1px solid #e0e6ed;
    margin-bottom: 20px;
  }

  .m-label {
    text-align: center;
    line-height: 30px;
    color: #666;
  }
</style>
