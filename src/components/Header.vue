<template>
  <div class="header">
    <span class="title">管理控制台</span>
    <!--<span class="user"><span class="cont">夏明明</span><i class="el-icon-caret-bottom"></i></span>-->
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .header {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 100;
    background: #373D41;
  }
  .header span{
    width: 160px;
    height: 100%;
    color: #fff;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    letter-spacing: 0.02em;
    cursor: pointer;
  }
  .header .title {
    border-right: 1px solid #2A2F32;
    float: left;
  }
  .header .user {
    border-left: 1px solid #2A2F32;
    float: right;
    text-align: left;
  }
  .header .user i{
    color: #fff;
  }
  .header .user .cont{
    padding: 0 20px;
  }
</style>
