<template>
  <div class="input-step9">

    <steps :activee="8"></steps>

    <div class="aline"></div>

    <div class="x-content">
      <el-row>
        <el-col :span="24" class="x-title">恭喜！信息录入完成</el-col>
      </el-row>
    </div>
    <div class="x-footer">
      <el-row>
        <el-col :span="16">&nbsp;</el-col>
        <el-col :span="7">
          <div class="cg-step">
            <el-button type="primary" @click="stepTo(10)">预览</el-button>
            <el-button type="primary" @click="stepTo(10)">直接保存</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step9',
    components: {
      Steps
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>
  @import "../../style/info_input.css";

  .tab-content{
    width: 100%;
    min-height: 200px;
    background: #F9FAFC;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
