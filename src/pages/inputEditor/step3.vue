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
      <el-form ref="jwsForm" :model="jwsForm" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="10">
            <el-form-item label="高血压:" required>
              <el-radio-group v-model="jwsForm.gxy.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="14" v-if="jwsForm.gxy.type == 1">
            <el-row>
              <el-col :span="12">
                <el-form-item label="年份:">
                  <el-date-picker v-model="jwsForm.gxy.info.date" align="right" type="year"
                                  placeholder="选择年"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="2" class="m-label">
                血压:
              </el-col>
              <el-col :span="3">
                <el-input v-model="jwsForm.gxy.info.xy_low_data"></el-input>
              </el-col>
              <el-col :span="1" class="m-label">
                /
              </el-col>
              <el-col :span="3">
                <el-input v-model="jwsForm.gxy.info.xy_high_data"></el-input>
              </el-col>
              <el-col :span="2" class="m-label">
                mmHg
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="10">
            <el-form-item label="糖尿病:" required>
              <el-radio-group v-model="jwsForm.tnb.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="14" v-if="jwsForm.tnb.type == 1">
            <el-row>
              <el-col :span="12">
                <el-form-item label="年份:">
                  <el-date-picker v-model="jwsForm.tnb.info.date" align="right" type="year"
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
          <el-col :span="10">
            <el-form-item label="冠心病:" required>
              <el-radio-group v-model="jwsForm.gxb.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="14" v-if="jwsForm.gxb.type == 1">
            <el-row>
              <el-col :span="12">
                <el-form-item label="年份:">
                  <el-date-picker v-model="jwsForm.gxb.info.date" align="right" type="year"
                                  placeholder="选择年"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="10">
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
          <el-col :span="10">
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
          <el-col :span="10">
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
          <el-col :span="10">
            <el-form-item label="脑梗:" required>
              <el-radio-group v-model="jwsForm.ng.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="14" v-if="jwsForm.ng.type == 1">
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
          <el-col :span="10">
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
          <el-col :span="10">
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
          <el-col :span="10">
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
          <el-col :span="10">
            <el-form-item label="肿瘤史:" required>
              <el-radio-group v-model="jwsForm.zls.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不祥</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="14" v-if="jwsForm.zls.type == 1">
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
              date: "",
              xy_high_data: "",
              xy_low_data: ""
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
      this.writeBack()
    },
    methods: {
      writeBack () {
        let info = JSON.parse(window.localStorage.getItem('x_step3_jws'))
        if (info) {
          this.jwsForm = info
        }
      },
      storage() {
        window.localStorage.setItem('x_step3_jws', JSON.stringify(this.jwsForm))
      },
      saveAndStepTo(num) {
        if (this.validate()) {
          this.storage()
          this.alertMsg("success", '"既往史" 已暂存')
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
              if (this.jwsForm[key].info[iKey] == '' || this.jwsForm[key].info[iKey] == null) {
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
  @import "../../style/info_input.css";

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
