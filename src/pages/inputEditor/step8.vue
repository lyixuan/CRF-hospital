<template>
  <div class="input-step8">
    <steps :activee="7"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">图片上传</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(7)" size="mini">上一步</el-button>
          <el-button type="primary" @click="stepTo(9)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <div class="tab-content">
        <span>图片111</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step8',
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
  .x-content{
    border: none;
    padding: 0;
  }
</style>
