<template>
  <div class="input-step1">

    <steps :activee="1"></steps>

    <div class="aline"></div>

    <div class="x-content">
      <el-row>
        <el-col :span="24" class="x-title">基本信息</el-col>
      </el-row>

      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="7">
            <el-form-item label="诊疗卡号:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="7">
            <el-form-item label="姓名:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="7">
            <el-form-item label="就诊日期:">
              <el-date-picker v-model="form.name" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="7">
            <el-form-item label="性别:">
              <el-select v-model="form.name" placeholder="请选择">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="7">
            <el-form-item label="年龄:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="7">
            <el-form-item label="出生日期:">
              <el-date-picker v-model="form.name" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="7">
            <el-form-item label="电话:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="15">
            <el-form-item label="住址:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="7">
            <el-form-item label="病史分类:">
              <el-form-item>
                <el-radio-group v-model="radio">
                  <el-radio :label="3">静脉</el-radio>
                  <el-radio :label="6">动脉</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="7">
            <el-form-item>
              <el-select v-model="form.name" placeholder="动脉">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="form.name" placeholder="静脉" v-if="false">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">&nbsp;</el-col>
          <el-col :span="7">
            <div class="cg-step low-page">
              <el-button type="primary" style="width: 120px;">上一步</el-button>
              <el-button type="primary" style="width: 120px;">下一步</el-button>
            </div>
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

  .low-page{
    margin-top: 100px;
  }
</style>
