<template>
  <div id="app">
    <Header></Header>
    <sidebar></sidebar>
    <div id="view">
      <router-view id="view-cont"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Sidebar from './components/Sidebar'

  export default {
    name: 'app',
    components: {
      Header, Sidebar
    }
  }
</script>

<style>
  * {
    font-size: 12px;
    box-sizing: border-box;
    color: #333;
  }
  a{
    text-decoration:none
  }
  body {
    background: #EAEDF1;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, "Microsoft YaHei";
  }
  #view {
    width: 100%;
    padding:60px 10px 10px 170px;
  }
  #view-cont{
    background: #fff;
    min-height: 500px;
  }
  @media screen and (min-height: 620px) {
    #view-cont {
      min-height: 550px;
    }
  }
  @media screen and (min-height: 650px) {
    #view-cont {
      min-height: 580px;
    }
  }
  @media screen and (min-height: 700px) {
    #view-cont {
      min-height: 630px;
    }
  }
  @media screen and (min-height: 720px) {
    #view-cont {
      min-height: 650px;
    }
  }
  @media screen and (min-height: 750px) {
    #view-cont {
      min-height: 680px;
    }
  }
  @media screen and (min-height: 780px) {
    #view-cont {
      min-height: 710px;
    }
  }
  @media screen and (min-height: 800px) {
    #view-cont {
      min-height: 730px;
    }
  }
</style>
