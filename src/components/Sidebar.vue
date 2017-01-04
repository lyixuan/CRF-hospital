<template>
  <div class="sidebar" :class="{sidebarClose:isClose}">
    <div class="sidebar-header" @click="changeSidebar"><i class="el-icon-more"></i></div>
    <router-link to="/inputEditor/page1">
      <div class="menu active" :class="{sidebarClose:isClose}">
        <i class="el-icon-document icon"></i>
        <span>CRF信息录入</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data () {
      return {
        isClose: false
      }
    },
    methods: {
      changeSidebar () {
        let view = document.getElementById("view-wrap")
        this.isClose ? view.style = "padding-left:166px;" : view.style = "padding-left:56px;"
        this.isClose = !this.isClose
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 160px;
    background: #373D41;
    z-index: 100;
  }

  .sidebar-header {
    height: 30px;
    line-height: 30px;
    background: #4A5064;
    text-align: center;
    cursor: pointer;
  }

  .sidebar-header i {
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
    overflow: hidden;
  }

  .menu span {
    color: #fff;
  }

  .active {
    background: #20C1DC;
  }

  .icon {
    margin-right: 10px;
    color: #fff;
  }

  .sidebarClose {
    width: 50px;
  }
</style>
