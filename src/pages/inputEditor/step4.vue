<template>
  <div class="input-step4">

    <steps :activee="3"></steps>

    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">检验</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(3)" size="mini">上一步</el-button>
          <el-button type="primary" @click="stepTo(5)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both"></div>
    <div class="x-content">
      <div class="tabs">
        <span class="t-active">血常规</span>
        <span>血生化</span>
        <span>凝血四项</span>
        <span>同型半胱氨酸</span>
        <span>超敏C反应蛋白</span>
        <span>血流变</span>
        <span>糖化血红蛋白</span>
        <span>血小板聚集试验</span>
        <span>蛋白C+S</span>
        <span>抗凝血酶III</span>
      </div>
      <div style="clear: both"></div>

      <div class="tab-content table-box">
        <span>血常规</span>
        <table>
          <tr>
            <td>课程名称</td>
            <td>日期</td>
            <td>状态</td>
            <td>备注</td>
            <td>操作</td>
          </tr>
          <tr>
            <td>1</td>
            <td>3</td>
            <td>3</td>
            <td>4</td>
            <td>删除</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step4',
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
    padding: 0;
    border: none;
  }
  .tabs span {
    padding: 5px;
    background: #C0CCDA;
    color: #fff;
    display: inline-block;
    float: left;
    margin-right: 1px;
    margin-top: 5px;
    cursor: pointer;
  }
  .tabs .t-active{
    background: #49C5D9;
  }
</style>
