<template>
  <div class="input-step7">

    <steps :activee="6"></steps>

    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">评分量表</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(6)" size="mini">上一步</el-button>
          <el-button type="primary" @click="stepTo(8)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both"></div>

    <div class="x-content">
      <div class="tabs">
        <span class="t-active">NIHSS 评分</span>
        <span>mRs 评分</span>
        <span>ABCD2 评分</span>
        <span>MSE 评分</span>
      </div>
      <div style="clear: both"></div>

      <div class="tab-content table-box">
        <span>血常规</span>
        <table>
          <tr>
            <th>课程名称</th>
            <th>日期</th>
            <th>状态</th>
            <th>备注</th>
            <th>操作</th>
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
    name: 'input-step7',
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

  .x-content{
    border: none;
    padding: 0;
  }
  .tabs {
    margin-bottom: 10px;
  }
</style>
