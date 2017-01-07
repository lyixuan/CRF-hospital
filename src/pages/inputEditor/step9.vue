<template>
  <div class="input-step9">
    <steps :activee="8"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">完成</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(8)" size="mini">上一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <div class="tab-content">
        <div class="finish-tip">恭喜！信息录入完成</div>
        <div class="finish-btn">
          <el-button type="primary" @click="stepTo(10)">预览</el-button>
          <el-button type="primary" @click="stepTo(8)">直接保存</el-button>
        </div>
      </div>
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
  .x-content{
    border: none;
    padding: 0;
    background: #fff;
  }
  .finish-tip{
    font-size: 30px;
    text-align: center;
    margin-top: 13%;
    color: #00A2CA;
  }

  .finish-btn{
    margin-top: 50px;
    text-align: center;
    margin-bottom: 13%;
  }
</style>
