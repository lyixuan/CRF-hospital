<template>
  <div class="header">
    <span class="title">CRF控制台</span>
    <!--<span class="user"><span class="cont">{{uusessions_name}}</span><i class="el-icon-caret-bottom"></i></span>-->
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">{{uusessions_name}}</template>
        <el-menu-item index="logout">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        uusessions_name: '未登录'
      }
    },
    mounted (){
      this.getSession()
    },
    methods: {
      getSession(){
        let uusessions = JSON.parse(window.sessionStorage.getItem('uusessions'))
        if (uusessions) {
          this.uusessions_name = uusessions.user_name
        } else {
          sessionStorage.removeItem('uusessions')
          var url = window.location.href.substring(0, window.location.href.indexOf(window.location.pathname) + 1) + "login.php";
//          window.location.href = url;
        }
      },
      handleSelect(key, keyPath) {
        if ('logout' == key) {
          this.$resource(PATH_LOGIN + 'logout').get().then((response) => {
            if (response.status == 200) {
              sessionStorage.removeItem('uusessions')
              var url = window.location.href.substring(0, window.location.href.indexOf(window.location.pathname) + 1) + "login.php";
              window.location.href = url;
            } else {
              this.alertMsg("error", response.status + " - " + response.url)
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  @import "../style/cover.css";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 100;
  }

  .header span {
    width: 160px;
    height: 100%;
    color: #fff;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .header .title {
    border-right: 1px solid #2A2F32;
    float: left;
    border-bottom: 2px solid #1d8ce0;
  }

  .header .user {
    border-left: 1px solid #2A2F32;
    float: right;
    text-align: center;
    padding-right: 5px;
  }

  .header .user i {
    color: #fff;
  }

  .header .user .cont {
    padding: 0 20px;
  }
</style>
