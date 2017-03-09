<template>
  <div class="sidebar" id="sidebar">
    <div class="sidebar-header" @click="changeSidebar"><i class="el-icon-more"></i></div>
    <router-link to="/search">
      <div class="menu">
        <i class="el-icon-search icon"></i>
        <span>CRF信息检索</span>
      </div>
    </router-link>
    <router-link to="/record">
      <div class="menu">
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
        let sidebar = document.getElementById("sidebar")
        let menus = document.getElementsByClassName("menu")
        if (this.isClose) {
          let width = 56
          var timer = setInterval(fn, 2)

          function fn() {
            width += 5
            view.style = "padding-left:" + width + "px;"
            if (width == 166) {
              clearInterval(timer)
            }
          }

          let swidth = 50
          var stimer = setInterval(sfn, 2)

          function sfn() {
            swidth += 5
            sidebar.style = "width:" + swidth + "px;"
            for (let i = 0; i < menus.length; i++) {
              menus[i].style = "width:" + swidth + "px;"
            }
            if (swidth == 160) {
              clearInterval(stimer)
            }
          }

        } else {
          view.style = "padding-left:56px;"
          let width = 166
          var timer2 = setInterval(fn2, 2)

          function fn2() {
            width -= 5
            view.style = "padding-left:" + width + "px;"
            if (width == 56) {
              clearInterval(timer2)
            }
          }

          let swidth = 160
          var stimer2 = setInterval(sfn2, 2)

          function sfn2() {
            swidth -= 5
            sidebar.style = "width:" + swidth + "px;"
            for (let i = 0; i < menus.length; i++) {
              menus[i].style = "width:" + swidth + "px;"
            }
            if (swidth == 50) {
              clearInterval(stimer2)
            }
          }
        }
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
    margin-top: 1px;
  }

  .menu span {
    color: #fff;
  }

  a.active .menu{
    background: #20C1DC;
  }

  .icon {
    margin-right: 10px;
    color: #fff;
  }

</style>
