<template>
  <div class="input-step2">
    <steps :activee="1"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">病史</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="saveAndStepTo(1)" size="mini">上一步</el-button>
          <el-button type="primary" @click="saveAndStepTo(3)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <el-form ref="bsForm" :model="bsForm" :rules="rules" label-width="90px">
        <el-row>
          <el-col :span="23">
            <el-form-item label="主诉:" prop="zs">
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="限制256字内" v-model=bsForm.zs
                        :maxlength="256"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="23">
            <el-form-item label="现病史:" prop="xbs">
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="限制256字内" v-model=bsForm.xbs
                        :maxlength="256"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="23">
            <el-form-item label="查体:" prop="ct">
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="限制256字内" v-model=bsForm.ct
                        :maxlength="256"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="23">
            <el-form-item label="诊断:" prop="zd">
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="限制256字内" v-model=bsForm.zd
                        :maxlength="256"></el-input>
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
    name: 'input-step2',
    components: {
      Steps
    },
    data () {
      return {
        bsForm: {
          zs: '',
          xbs: '',
          ct: '',
          zd: '',
        },
        rules: {
          zs: [
            {required: true, message: '请输入主诉内容', trigger: 'blur'}
          ],
          xbs: [
            {required: true, message: '请输入现病史内容', trigger: 'blur'}
          ],
          ct: [
            {required: true, message: '请输入查体内容', trigger: 'blur'}
          ],
          zd: [
            {required: true, message: '请输入诊断内容', trigger: 'blur'}
          ]
        }
      }
    },
    mounted(){
      this.writeBack()
    },
    methods: {
      writeBack () {
        let info = JSON.parse(window.localStorage.getItem('x_step2_bs'))
        if (info) {
          this.bsForm.zs = info.zs
          this.bsForm.xbs = info.xbs
          this.bsForm.ct = info.ct
          this.bsForm.zd = info.zd
        }
      },
      storage() {
        window.localStorage.setItem('x_step2_bs', JSON.stringify(this.bsForm))
      },
      saveAndStepTo(num) {
        this.$refs['bsForm'].validate((valid) => {
          if (valid) {
            this.storage()
            this.alertMsg("success", '"病史" 所填内容已暂存')
            this.stepTo(num)
          } else {
            this.alertMsg("warning", '信息校验有误')
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  @import "../../style/info_input.css";
</style>
