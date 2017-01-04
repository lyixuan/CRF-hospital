<template>
  <div class="input-step3">
    <steps :activee="2"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">既往史</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(2)" size="mini">上一步</el-button>
          <el-button type="primary" @click="stepTo(4)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">高血压:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
        <div>
          <div class="row-line-info info1">
            <el-date-picker v-model="value5" align="right" type="year" placeholder="选择年" size="mini"></el-date-picker>
          </div>
          <div class="row-line-info info2">
            <el-input v-model="input" size="mini"></el-input>
          </div>
          <div class="row-line-info info3">
            /
          </div>
          <div class="row-line-info info2">
            <el-input v-model="input" size="mini"></el-input>
          </div>
          <div class="row-line-info info3">
            mmHg
          </div>
        </div>
      </div>

      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">糖尿病:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
        <div>
          <div class="row-line-info info1">
            <el-date-picker v-model="value5" align="right" type="year" placeholder="选择年" size="mini"></el-date-picker>
          </div>
          <div class="row-line-info info2">
            空腹血糖:
          </div>
          <div class="row-line-info info3">
            &nbsp;
          </div>
          <div class="row-line-info info2">
            <el-input v-model="input" size="mini"></el-input>
          </div>
          <div class="row-line-info info3">
            mmol/L
          </div>
        </div>
      </div>

      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">冠心病:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
        <div>
          <div class="row-line-info info1">
            <el-date-picker v-model="value5" align="right" type="year" placeholder="选择年" size="mini"></el-date-picker>
          </div>
        </div>
      </div>

      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">高脂血症:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
      </div>

      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">房颤:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
      </div>

      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">TIA:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
      </div>

      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">脑梗:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
        <div style="margin-left: 100px;float: left">
          <span style="float: left">后遗症:</span>
          <span style="float: left;width: 500px;vertical-align: bottom">
            <el-input v-model="input" size="mini"></el-input>
          </span>
        </div>
      </div>

      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">颈椎病:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
      </div>

      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">吸烟:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
      </div>

      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">饮酒:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
      </div>

      <div class="row-line">
        <div class="row-line-info">
          <el-button type="text">肿瘤史:</el-button>
          <el-radio class="radio" v-model="radio" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio" label="1">否</el-radio>
          <el-radio class="radio" v-model="radio" label="1">不祥</el-radio>
        </div>
        <div style="margin-left: 100px;float: left">
          <span style="float: left">描述:</span>
          <span style="float: left;width: 500px;vertical-align: bottom">
            <el-input v-model="input" size="mini"></el-input>
          </span>
        </div>
      </div>
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

  .x-content{
    padding: 0 10px;
  }
  .x-content .el-button--text {
    color: #333 !important;
    margin-right: 25px;
    width: 100px;
    text-align: right;
  }

  .x-content .el-input__inner {
    display: inline-block !important;
  }

  .row-line {
    height: 30px;
    margin-top: 20px;
    border-bottom: 1px solid #eee;
  }

  .row-line-info {
    float: left;
    width: 300px;
  }

  .info1 {
    width: 150px;
    margin-left: 100px;
    margin-right: 20px;
  }

  .info2 {
    width: 60px;
  }

  .info3 {
    width: 20px;
    text-align: center;
  }
</style>
