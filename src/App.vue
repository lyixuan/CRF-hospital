<template>
  <div id="app">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div id="view-wrap">
      <transition name="appear">
        <router-view id="view-cont"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import VHeader from './components/Header'
  import VSidebar from './components/Sidebar'

  export default {
    name: 'app',
    components: {
      VHeader, VSidebar
    }
  }
</script>

<style>
  * {
    font-size: 12px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none
  }

  body {
    background: #fff;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, "Microsoft YaHei";
  }

  #view-wrap {
    width: 100%;
    padding: 50px 0px 0px 160px;

  }

  #view-cont {
    background: #fff;
    min-height: 100%;
    overflow: hidden;
  }
</style>
