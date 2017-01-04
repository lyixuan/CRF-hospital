<template>
  <div class="input-step5">

    <steps :activee="4"></steps>

    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">影像学检查</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(4)" size="mini">上一步</el-button>
          <el-button type="primary" @click="stepTo(6)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both"></div>

    <div class="x-content">
      <div class="tabs">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
      </div>
      <div style="clear: both"></div>

      <div class="tab-content table-box">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 26px;height: 26px;">复选框 A</span>
          </div>
          <div style="overflow: hidden">
            <div style="float: left">日期:</div>
            <div style="width: 200px;float: left">
              <el-date-picker v-model="name" type="date" placeholder="选择日期"></el-date-picker>
            </div>
            <div style="float: left">描述:</div>
            <div style="width: 500px;float: left">
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="限制256字内" v-model=name
                        :maxlength="256"></el-input>
            </div>
          </div>
        </el-card>

      </div>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step5',
    components: {
      Steps
    },
    data () {
      return {
        checkList: [],
        name: ''
      }
    }
  }
</script>

<style scoped>
  @import "../../style/info_input.css";

  .x-content{
    border: none;
    padding: 0;
  }
  .tabs {
    margin-bottom: 10px;
  }
</style>
