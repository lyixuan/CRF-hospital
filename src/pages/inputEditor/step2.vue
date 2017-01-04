<template>
  <div class="input-step2">

    <steps :activee="1"></steps>

    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">病史</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(1)" size="mini">上一步</el-button>
          <el-button type="primary" @click="stepTo(3)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both"></div>
    <div class="x-content">
        <el-form ref="form" :model="form" label-width="80px">
          <el-row>
            <el-col :span="23">
              <el-form-item label="主诉:">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="限制256字内" v-model=form.name :maxlength="256"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="23">
              <el-form-item label="现病史:">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="限制256字内" v-model=form.name :maxlength="256"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="23">
              <el-form-item label="查体:">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="限制256字内" v-model=form.name :maxlength="256"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="23">
              <el-form-item label="诊断:">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="限制256字内" v-model=form.name :maxlength="256"></el-input>
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
        input: '',
        form: {
          name: ''
        },
        options: [
          {value: "male", label: "男"},
          {value: "female", label: "女"}
        ],
        radio: 3
      }
    }
  }
</script>

<style scoped>
  @import "../../style/info_input.css";
</style>
