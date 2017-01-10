<template>
  <div class="input-step1">
    <steps :activee="0"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">基本信息</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="clearAndStepTo(1)" size="mini">全部清空</el-button>
          <el-button type="primary" @click="saveAndStepTo(2)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <el-form ref="jbxxForm" :model="jbxxForm" :rules="rules" label-width="90px">
        <el-row>
          <el-col :span="7">
            <el-form-item label="诊疗卡号:" prop="card_id">
              <el-input v-model="jbxxForm.card_id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;
            <span class="js-text" @click="checkout">检索<span class="js-line1"></span><span
              class="js-line2"></span></span>
          </el-col>
          <el-col :span="7">
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="jbxxForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="7">
            <el-form-item label="就诊日期:" prop="visit_date">
              <el-date-picker v-model="jbxxForm.visit_date" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="性别:" prop="sex">
              <el-select v-model="jbxxForm.sex" placeholder="请选择">
                <el-option v-for="item in sexOptions" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="7">
            <el-form-item label="年龄:" prop="age">
              <el-input v-model="jbxxForm.age"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="7">
            <el-form-item label="出生日期:" prop="birthday">
              <el-date-picker v-model="jbxxForm.birthday" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="联系电话:" prop="mobile">
              <el-input v-model="jbxxForm.mobile"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="15">
            <el-form-item label="住址:" prop="addr">
              <el-input v-model="jbxxForm.addr"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="7">
            <el-form-item label="疾病分类:" required>
              <el-radio-group v-model="jbxxForm.sick_type.type">
                <el-radio label="jm">静脉</el-radio>
                <el-radio label="dm">动脉</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="23">
            <el-form-item label="疾病名称:" prop="sick_type.sick">
              <el-radio-group v-model="jbxxForm.sick_type.sick">
                <el-radio :label=item.key v-for="item in baseData.jm" v-if="jbxxForm.sick_type.type == 'jm'">
                  {{item.name}}
                </el-radio>
                <el-radio :label=item.key v-for="item in baseData.dm" v-if="jbxxForm.sick_type.type == 'dm'">
                  {{item.name}}
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step1',
    components: {
      Steps
    },
    data () {
      var validateMobile = (rule, value, callback) => {
        let exp = /^[0-9 ]+$/;
        if (!exp.test(value)) {
          callback(new Error('电话号码格式有误'))
        }
        callback()
      };
      var validateAge = (rule, value, callback) => {
        let exp = /^[0-9]+$/;
        if (!exp.test(value)) {
          callback(new Error('年龄格式应该为正整数'))
        }
        callback()
      };
      return {
        baseData: '',
        sexOptions: [
          {value: "male", label: "男"},
          {value: "female", label: "女"}
        ],
        jbxxForm: {
          card_id: '',
          name: '',
          visit_date: '',
          sex: 'male',
          age: '',
          birthday: '',
          mobile: '',
          addr: '',
          sick_type: {
            type: 'jm',
            sick: ''
          }
        },
        rules: {
          card_id: [
            {required: true, message: '请输入诊疗卡号', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ],
          visit_date: [
            {type: 'date', required: true, message: '请选择就诊日期', trigger: 'change'}
          ],
          sex: [
            {required: true, message: '请选择性别', trigger: 'blur'}
          ],
          age: [
            {required: true, message: '请输入年龄', trigger: 'blur'},
            {validator: validateAge, trigger: 'blur'}
          ],
          birthday: [
            {type: 'date', required: true, message: '请选择出生日期', trigger: 'change'}
          ],
          mobile: [
            {required: true, message: '请输入联系电话', trigger: 'blur'},
            {validator: validateMobile, trigger: 'blur'}
          ],
          addr: [
            {required: true, message: '请输入地址', trigger: 'blur'}
          ],
          'sick_type.sick': [
            {required: true, message: '请选择疾病', trigger: 'blur'}
          ]
        },
        writeFlag: false
      }
    },
    mounted () {
      let info, base;
      try {
        info = JSON.parse(window.localStorage.getItem('x_step1_jbxx'))
      } catch (err) {
        localStorage.removeItem("x_step1_jbxx");
      }
      if (info) {
        this.writeBack(info)
      }

      try {
        base = JSON.parse(window.sessionStorage.getItem('x_step1_jbxx_base'))
      } catch (err) {
        localStorage.removeItem("x_step1_jbxx_base");
      }

      if (base) {
        this.baseData = base;
      } else {
        this.getJbxx()
      }
    },
    methods: {
      writeBack (info) {
        this.jbxxForm.card_id = info.card_id
        this.jbxxForm.name = info.name
        this.jbxxForm.visit_date = new Date(info.visit_date)
        this.jbxxForm.sex = info.sex
        this.jbxxForm.age = info.age
        this.jbxxForm.birthday = new Date(info.birthday)
        this.jbxxForm.mobile = info.mobile
        this.jbxxForm.addr = info.addr
        this.writeFlag = true
        this.jbxxForm.sick_type.type = info.sick_type.type
        this.jbxxForm.sick_type.sick = info.sick_type.sick
      },
      storage() {
        this.jbxxForm.visit_date = this.formatDate(new Date(this.jbxxForm.visit_date))
        this.jbxxForm.birthday = this.formatDate(new Date(this.jbxxForm.birthday))
        window.localStorage.setItem('x_step1_jbxx', JSON.stringify(this.jbxxForm))
      },
      saveAndStepTo(num) {
        this.$refs['jbxxForm'].validate((valid) => {
          if (valid) {
            this.storage()
            this.alertMsg("success", '"基本信息" 所填内容已暂存')
            this.stepTo(num)
          } else {
            this.alertMsg("warning", '信息校验有误')
            return false;
          }
        });
      },
      getJbxx () {
        this.$resource(InputUrl + 'dict/jbxx.php').get().then((response) => {
          if (response.status == 200) {
            this.baseData = response.body
            window.sessionStorage.setItem('x_step1_jbxx_base', JSON.stringify(this.baseData))
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      },
      clearAndStepTo(num){
        this.clearStorage()
        this.jbxxForm = {
          card_id: '',
          name: '',
          visit_date: '',
          sex: 'male',
          age: '',
          birthday: '',
          mobile: '',
          addr: '',
          sick_type: {
            type: 'jm',
            sick: ''
          }
        }
        this.$refs['jbxxForm'].resetFields();
      },
      checkout(){
        let cardId = this.jbxxForm.card_id
        if (!cardId) {
          this.alertMsg("warning", "诊疗卡号不能为空")
          return
        }
        console.log(cardId)
        this.$resource(InputUrl + 'search.php').get({card_id: cardId}).then((response) => {
          if (response.status == 200) {
            window.localStorage.setItem('x_step1_jbxx', JSON.stringify(response.body.jbxx))
            window.localStorage.setItem('x_step2_bs', JSON.stringify(response.body.bs))
            window.localStorage.setItem('x_step3_jws', JSON.stringify(response.body.jws))
            let info;
            try {
              info = JSON.parse(window.localStorage.getItem('x_step1_jbxx'))
            } catch (err) {
              localStorage.removeItem("x_step1_jbxx");
              this.alertMsg("warning", "检索失败")
            }
            this.writeBack(info)
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })

      }
    },
    watch: {
      'jbxxForm.sick_type.type': {
        handler: function (newVal, oldVal) {
          if (!this.writeFlag && newVal !== oldVal) {
            this.jbxxForm.sick_type.sick = ''
          } else if (this.writeFlag) {
            this.writeFlag = false
          }
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../style/info_input.css";

  .js-text {
    position: relative;
    background: #20C1DC;
    color: #fff;
    text-align: center;
    padding: 5px;
    margin-top: 1px;
    display: inline-block;
    cursor: pointer;
  }

  .js-text:hover {
    opacity: 0.8;
  }

  .js-line1, .js-line2 {
    position: absolute;
    border: 1px solid #C0CCDA;
    display: inline-block;
    left: -45px;
    width: 60px;
    height: 8px;
  }

  .js-line1 {
    border-bottom: none;
    top: -10px;
  }

  .js-line2 {
    border-top: none;
    top: 28px;
  }
</style>
