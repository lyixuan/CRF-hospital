<template>
  <div id="app">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div id="view-wrap">
      <transition name="appear">
        <router-view id="view-cont"></router-view>
      </transition>
    </div>
    <div id="comp" :class="{compShow:isShow}">
      <div class="comp-title">[{{count}}/4]对比栏 <span @click="close">x</span></div>
      <div class="comp-com" v-for="item in comp">
        <span class="close" @click="clear(item.card_id)">x</span>
        <p>卡号：{{item.card_id}}</p>
        <p>姓名：{{item.name}}</p>
      </div>
      <div class="comp-com">
        <span class="btn" @click="jumpComp">对比</span>
        <span class="btn" @click="clear()">清空</span>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from './components/Header'
  import VSidebar from './components/Sidebar'
  import bus from './bus';

  export default {
    name: 'app',
    components: {
      VHeader, VSidebar
    },
    created() {
      this.init()
      bus.$on('COMP', () => {
        this.isShow = false;//显示
        this.init()
      });
    },
    data (){
      return {
        isShow: true,
        count: 0,
        comp: []
      }
    },
    methods: {
      init(){
        let comparison = JSON.parse(window.sessionStorage.getItem('crf_comparison'))
        if (comparison && comparison.length > 0) {
          this.comp = comparison
          this.count = comparison.length
        } else {
          this.comp = []
          this.count = 0
        }
      },
      clear(id){
        if (id) {
          let comparison = JSON.parse(window.sessionStorage.getItem('crf_comparison'))
          for (let i = 0; i < comparison.length; i++) {
            if (comparison[i].card_id == id) {
              comparison.splice(i,1)
              break
            }
          }
          window.sessionStorage.setItem('crf_comparison', JSON.stringify(comparison))
        } else {
          window.sessionStorage.removeItem('crf_comparison')
        }
        this.init()
      },
      jumpComp(){
        this.$router.push({path: 'search_comp'})
      },
      close(){
        this.isShow = true;//显示
      }
    },
    watch: {
      $route() {
        window.scrollTo(0, 0);
      },
    },
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

  #comp {
    position: fixed;
    right: 2px;
    top: 30%;
    width: 100px;
    z-index: 1000;
    opacity: .9;
  }

  #comp .comp-title {
    height: 30px;
    line-height: 30px;
    background: #4595E6;
    text-align: center;
    color: #fff;
  }

  #comp .comp-com {
    position: relative;
    padding: 5px 0;
    background: #fff;
    overflow: hidden;
    text-align: center;
    box-shadow: -5px 5px 5px #ccc;
    border-bottom: 1px solid #ccc;
  }

  #comp .comp-com .close {
    position: absolute;
    right: 5px;
    top: 5px;
    color: #4595E6;
    cursor: pointer;
    border: 1px solid #fff;
    padding: 0 3px;
  }

  #comp .comp-com .close:hover{
    border: 1px solid #4595E6;
  }

  #comp .comp-title span{
    margin-left: 6px;
    cursor: pointer;
    border: 1px solid #4595E6;
    padding: 0 3px;
  }
  #comp .comp-title span:hover{
    border: 1px solid #fff;
  }
  #comp .comp-com p {
    padding: 0;
    margin: 0;
    height: 25px;
    line-height: 25px;
  }

  #comp .btn {
    display: inline-block;
    float: left;
    margin: 5px 2px;
    cursor: pointer;
    background: #4595E6;
    padding: 3px 10px;
    color: #fff;
  }

  .compShow {
    display: none;
  }


</style>
