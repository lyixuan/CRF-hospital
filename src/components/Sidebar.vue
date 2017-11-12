<template>
  <div id="sidebar">
    <el-row class="tac">

      <el-col :span="24">
        <el-menu :default-active="$route.path" mode="vertical" :router="true" :unique-opened="true"  theme="dark">
          <el-submenu index="3" v-for="(v,k) in menuList" v-if="k == 'lr' &&v == 1">
            <template slot="title"><img class="m-img" src="../assets/lr.png" width="16" alt="">病案录入</template>
            <el-menu-item index="/record_1" v-for="item in checkMenuList" v-if="item == 'lr_lr'" :key="item"><i class="el-icon-menu"></i>录入</el-menu-item>
          </el-submenu>
          <el-submenu index="1" v-for="(v,k) in menuList" v-if="k == 'tj' &&v == 1">
            <template slot="title" class="el-icon-menu"><img class="m-img" src="../assets/tj.png" width="16" alt="">统计分析</template>
            <el-menu-item index="/stata_survey"  v-for="item in checkMenuList" v-if="item == 'tj_gl'" :key="item"><i class="el-icon-menu"></i>概览</el-menu-item>
            <el-menu-item index="/stata_basic" v-for="item in checkMenuList" v-if="item == 'tj_jbxx'" :key="item"><i class="el-icon-menu"></i>基本信息</el-menu-item>
            <el-menu-item index="/stata_history" v-for="item in checkMenuList" v-if="item == 'tj_jws'" :key="item"><i class="el-icon-menu"></i>既往史</el-menu-item>
            <el-menu-item index="/stata_cure" v-for="item in checkMenuList" v-if="item == 'tj_zlfa'" :key="item"><i class="el-icon-menu"></i>治疗方案</el-menu-item>
          </el-submenu>
          <el-submenu index="2" v-for="(v,k) in menuList" v-if="k == 'js' &&v == 1">
            <template slot="title"><img class="m-img" src="../assets/js.png" width="16" height="17" alt="">信息检索</template>
            <el-menu-item index="/search_basic" v-for="item in checkMenuList" v-if="item == 'js_jbxx'" :key="item"><i class="el-icon-menu"></i>基本信息</el-menu-item>
            <el-menu-item index="/search_history"  v-for="item in checkMenuList" v-if="item == 'js_bs'" :key="item"><i class="el-icon-menu"></i>病史</el-menu-item>
            <el-menu-item index="/search_previous"  v-for="item in checkMenuList" v-if="item == 'js_jws'" :key="item"><i class="el-icon-menu"></i>既往史</el-menu-item>
            <el-menu-item index="/search_check"  v-for="item in checkMenuList" v-if="item == 'js_jy'" :key="item"><i class="el-icon-menu"></i>检验</el-menu-item>
            <el-menu-item index="/search_image"  v-for="item in checkMenuList" v-if="item == 'js_yxxjy'" :key="item"><i class="el-icon-menu"></i>影像学检查</el-menu-item>
            <el-menu-item index="/search_cure"  v-for="item in checkMenuList" v-if="item == 'js_zlfa'" :key="item"><i class="el-icon-menu"></i>治疗方案</el-menu-item>
          </el-submenu>
          <el-submenu index="6" v-for="(v,k) in menuList" v-if="k == 'sf' &&v == 1">
            <template slot="title"><img class="m-img" src="../assets/lr.png" width="16" alt="">人员随访</template>
            <el-menu-item index="/follow" v-for="item in checkMenuList" v-if="item == 'sf_sfxx'" :key="item"><i class="el-icon-menu"></i>随访信息</el-menu-item>
          </el-submenu>
          <el-submenu index="4" v-for="(v,k) in menuList" v-if="k == 'pz' &&v == 1">
            <template slot="title"><img class="m-img" src="../assets/pz.png" width="16" alt="">平台配置</template>
            <el-menu-item index="/setting_medicine_input"  v-for="item in checkMenuList" v-if="item == 'pz_ypgl'" :key="item"><i class="el-icon-menu"></i>药品管理</el-menu-item>
          </el-submenu>
          <el-submenu index="5" v-for="(v,k) in menuList" v-if="k == 'qx' &&v == 1">
            <template slot="title"><img class="m-img" src="../assets/qx.png" width="16" alt="">权限管理</template>
            <el-menu-item index="/setting_account" v-for="item in checkMenuList" v-if="item == 'qx_zhgl'" :key="item"><i class="el-icon-menu"></i>账号管理</el-menu-item>
            <el-menu-item index="/setting_priviledge" v-for="item in checkMenuList" v-if="item == 'qx_qxfp'" :key="item"><i class="el-icon-menu"></i>权限分配</el-menu-item>
            <el-menu-item index="/setting_log" v-for="item in checkMenuList" v-if="item == 'qx_czrz'" :key="item"><i class="el-icon-menu"></i>操作日志</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data () {
      return {
        checkMenuList:[],
        menuList:{
          tj:0,
          js:0,
          lr:0,
          pz:0,
          qx:0
        },
      }
    },
    mounted(){
      this.getMenuRights()
    },
    methods: {
      getMenuRights(){
        let u_session = JSON.parse(window.sessionStorage.getItem('uusessions'))
        let user_role = u_session.data.user_role
        this.$resource(PATH_PRIVILEGE + 'role_rights').get({role_id: user_role}).then((response) => {
          if (response.body.code == 200) {
            this.checkMenuList = response.body.data
            for (let i = 0; i < this.checkMenuList.length; i++) {
              let n = this.checkMenuList[i].indexOf('_');
              this.menuList[this.checkMenuList[i].substring(0,n)] = 1;
            }
          } else {
            this.alertMsg("warning", '获取角色权限信息有误')
          }
        })
      },
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  #sidebar {
    width: 190px;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    background: #1F2F3D;

  }

  .m-img{
    margin-right: 20px;
  }

  .el-menu-item, .el-submenu__title {
    height: 60px!important;
    line-height: 60px!important;
  }
</style>
