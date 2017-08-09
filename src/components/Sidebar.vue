<template>
  <div id="sidebar">
    <el-row class="tac">

      <el-col :span="24">
        <el-menu default-active="stata_survey" mode="vertical" :router="true" :unique-opened="true"  theme="dark">
          <el-submenu index="1">
            <template slot="title" class="el-icon-menu"><i class="el-icon-menu"></i>统计分析</template>
            <el-menu-item index="stata_survey"><i class="el-icon-menu"></i>概览</el-menu-item>
            <el-menu-item index="stata_basic"><i class="el-icon-menu"></i>基本信息</el-menu-item>
            <el-menu-item index="stata_history"><i class="el-icon-menu"></i>既往史</el-menu-item>
            <el-menu-item index="stata_cure"><i class="el-icon-menu"></i>治疗方案</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-search"></i>信息检索</template>
            <el-menu-item index="2-1"><i class="el-icon-menu"></i>基本信息</el-menu-item>
            <el-menu-item index="2-2"><i class="el-icon-menu"></i>病史</el-menu-item>
            <el-menu-item index="2-3"><i class="el-icon-menu"></i>检验</el-menu-item>
            <el-menu-item index="2-4"><i class="el-icon-menu"></i>影像学检验</el-menu-item>
            <el-menu-item index="2-5"><i class="el-icon-menu"></i>治疗方案</el-menu-item>
            <el-menu-item index="2-6"><i class="el-icon-menu"></i>自定义</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-document"></i>信息录入</template>
            <el-menu-item index="record_1"><i class="el-icon-document"></i>信息录入</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i>设置</template>
            <el-menu-item index="4-1"><i class="el-icon-menu"></i>药品录入</el-menu-item>
            <el-menu-item index="4-2"><i class="el-icon-menu"></i>权限管理</el-menu-item>
            <el-menu-item index="4-3"><i class="el-icon-menu"></i>操作日志</el-menu-item>
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
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  #sidebar {
    width: 160px;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    background: #1F2F3D;

  }

</style>
