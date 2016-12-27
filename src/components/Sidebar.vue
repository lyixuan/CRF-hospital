<template>
  <div class="sidebar">
    <div class="sidebar-header"><i class="el-icon-more"></i></div>
    <router-link to="/inputEditor">
      <div class="menu active">
        <i class="el-icon-document icon"></i>
        <span>CRF信息录入</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
  }
</script>

<style scoped>
  .sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 160px;
    background: #373D41;
  }

  .sidebar-header {
    height: 30px;
    line-height: 30px;
    background: #4A5064;
    text-align: center;
  }

  .sidebar-header i {
    cursor: pointer;
    color: #AEB9C2;
  }

  .menu {
    height: 40px;
    line-height: 40px;
    width: 160px;
    background: #4A5064;
    text-align: left;
    padding-left: 20px;
    color: #fff;
  }
  .menu span{
    color: #fff;
  }

  .active {
    background: #20C1DC;
  }

  .icon {
    margin-right: 10px;
    color: #fff;
  }
</style>
