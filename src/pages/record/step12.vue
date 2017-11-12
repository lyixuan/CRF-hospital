<template>
  <div class="input-step12">
    <steps :activee="9"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">完成</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(9)" size="mini">上一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <div class="tab-content">
        <div class="finish-tip"><i class="el-icon-circle-check" style="font-size: 30px;"></i> 恭喜！信息录入完成</div>
        <div class="finish-btn">
          <el-button type="primary" @click="stepTo('preview')">预览保存</el-button>
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
      return {
      }
    },
    methods: {
      openDia(){
        this.dialogVisible = true;
      },
      clearAndStepTo(num){
        this.clearStorage()
        this.stepTo(num)
        this.dialogVisible = false
      },
    }
  }
</script>

<style scoped>
  @import "../../style/record.css";

  .x-content {
    border: none;
    padding: 0;
    background: #fff;
  }

  .finish-tip {
    font-size: 30px;
    text-align: center;
    margin-top: 13%;
    color: #13CE66;
  }

  .finish-btn {
    margin-top: 50px;
    text-align: center;
    margin-bottom: 13%;
  }

  .first {
    margin-right: 10px;
  }
</style>
