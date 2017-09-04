<template>
  <div class="survey">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/stata_survey' }">统计分析</el-breadcrumb-item>
      <el-breadcrumb-item>概览</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="line1">
        <el-row :gutter="10">
          <el-col :span="16">
            <div class="box" id="chart-geo"></div>
          </el-col>
          <el-col :span="8">
            <el-row>
              <el-col :span="24">
                <div class="box" id="chart-pie-out">
                  <span class="cat1"></span>
                  <span class="cat2"></span>
                  <div id="total">
                    <span class="tt">总人数</span>
                    <span class="tc">
                      <i v-for="item in arr">{{item}}</i>
                    </span>
                  </div>
                  <div id="chart-pie"></div>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="box" id="chart-sex">
                  <span class="cat1"></span>
                  <span class="cat2"></span>
                  <div class="male-t">性别占比</div>
                  <span class="male">
                    <img src="../../assets/male.png" height="90%" alt="">
                    <span>{{male_sum}}人</span>
                    <span>{{(male_sum/total).toFixed(2)*100}}%</span>
                  </span>
                  <span class="female">
                    <img src="../../assets/female.png" height="90%" alt="">
                    <span>{{female_sum}}人</span>
                    <span>{{(female_sum/total).toFixed(2)*100}}%</span>
                  </span>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="box" id="chart-bar"></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  var echarts = require('echarts');
  export default {
    name: 'survey',
    data () {
      return {
        male_sum: 0,
        female_sum: 0,
        total: 0,
        arr: []
      }
    },
    mounted () {
      this.offsetHeight()
      this.geo()
      this.bar()
      this.pie()
      this.sex()
    },
    methods: {
      offsetHeight(){
        let clientheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let o = document.getElementById('chart-geo');
        let o1 = document.getElementById('chart-pie-out');
        let o2 = document.getElementById('chart-sex');
        let o3 = document.getElementById('chart-bar');

        if (window.innerHeight > 700) {
          o.style.height = clientheight * 0.5 + 'px';
          o1.style.height = clientheight * 0.3 - 10 + 'px';
          o2.style.height = clientheight * 0.2 + 'px';
          o3.style.height = clientheight * 0.4 + 'px';
          let pie = document.getElementById('chart-pie');
          pie.style.height = o1.offsetHeight - 50 - 20 + 'px'
          pie.style.width = o1.offsetWidth - 20 + 'px'
        } else {
          o.style.height = clientheight * 0.8 + 'px';
          o1.style.height = clientheight * 0.5 - 10 + 'px';
          o2.style.height = clientheight * 0.3 + 'px';
          o3.style.height = clientheight * 0.4 + 'px';
          let pie = document.getElementById('chart-pie');
          pie.style.height = o1.offsetHeight - 50 - 20 + 'px'
          pie.style.width = o1.offsetWidth - 20 + 'px'

        }
      },
      geo(){
        this.$resource('static/china.json').get().then((response) => {
          echarts.registerMap('china', response.data);
          let myChart = echarts.init(document.getElementById('chart-geo'));
          this.$resource(PATH_STATA + 'geo_dist').get().then((response) => {
            if (response.body.code == 200) {
              let max = 0;
              for (let i = 0; i < response.body.data.length; i++) {
                if (response.body.data[i].value > max) {
                  max = response.body.data[i].value
                }
              }
              let option = {
                title: {
                  text: '区域分布',
                  left: 'center'
                },
                backgroundColor: '#fff',
                tooltip: {
                  trigger: 'item',
                  formatter: '{a}<br/>{b}:{c}人'
                },
                legend: {
                  orient: 'vertical',
                  left: 'left'
                },
                visualMap: {
                  min: 0,
                  max: max,
                  left: 'left',
                  top: 'bottom',
                  text: ['高', '低'],           // 文本，默认为数值文本
                  calculable: true,
                  inRange: {
                    color: ['#fff', '#27D4FF', '#0074CB']
                  }
                },
                toolbox: {
                  show: true,
                  left: 'right',
                  top: 'top',
                  feature: {
                    restore: {},
                    saveAsImage: {}
                  }
                },
                series: [
                  {
                    name: '区域分布',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                      normal: {
                        show: true,
                        textStyle: {
                          color: '#555'
                        }
                      },
                      emphasis: {
                        show: true
                      }
                    },
                    itemStyle: {
                      normal: {
                        borderWidth: 1,
                        shadowBlur: 50,
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        borderColor: '#eee',
                      }
                    },
                    data: response.body.data
                  },


                ]
              };
              myChart.setOption(option);
            } else {
              this.alertMsg("warning", '获取数据失败')
            }
          })
        })
      },
      bar(){
        this.$resource(PATH_STATA + 'geo_dist').get().then((response) => {
          let rst = response.body.data;
          let xd = [], yd = [];
          for (let i = 0; i < rst.length; i++) {
            xd.push(rst[i].name)
            yd.push(rst[i].value)
          }
          if (response.body.code == 200) {
            let myChart = echarts.init(document.getElementById('chart-bar'));
            let option = {
              title: {
                text: '区域排名',
                left: 'center'
              },
              backgroundColor: '#fff',
              color: ['#188DF0'],
              tooltip: {
                trigger: 'item'
              },
              grid: {
                left: '2%',
                right: '3%',
                bottom: '20%',
                containLabel: true
              },
              "toolbox": {
                "show": true,
                "feature": {
                  "restore": {},
                  "saveAsImage": {}
                }
              },
              xAxis: [{
                type: 'category',
                data: xd,
                axisTick: {
                  alignWithLabel: true
                },
                axisLine: {
                  lineStyle: {
                    color: '#444'
                  }
                },
                axisLabel: {
                  interval: 0,
                  rotate: 45
                }

              }],

              yAxis: [{
                name: '人数',
                nameTextStyle: {
                  color: '#12A4A7'
                },
                axisTick: {
                  alignWithLabel: true
                },
                axisLine: {
                  lineStyle: {
                    color: '#444'
                  }
                },
              }],
              series: [{
                type: 'bar',
                barWidth: '80%',
                data: yd
              },

              ],
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  formatter: '{c}'
                }
              },
              itemStyle: {
                normal: {

                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: 'rgba(17, 168,171, 0.1)'
                  }, {
                    offset: 0,
                    color: 'rgba(17, 168,171, 1)'
                  },]),
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10
                }
              }
            };
            myChart.setOption(option);
          } else {
            this.alertMsg("warning", '获取数据失败')
          }
        })
      },
      pie(){
        this.$resource(PATH_STATA + 'area_dist').get().then((response) => {
          if (response.body.code == 200) {
            var total = {
              name: '大区分布',
            };
            let myChart = echarts.init(document.getElementById('chart-pie'));
            let option = {
              title: [{
                text: total.name,
                left: '49%',
                top: '49%',
                textAlign: 'center',
                textBaseline: 'middle',

              }],
              backgroundColor: '#fff',
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              series: [{
                name: '大区分布',
                type: 'pie',
                radius: [55, 80],
                center: ['50%', '50%'],
                data: response.body.data,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }],
              color: [
                '#00467A',
                '#356B94',
                '#0074CB',
                '#3B99E5',
                '#27D4FF',
                '#52DDFD',
                '#109DE2'
              ]
            }
            myChart.setOption(option);
          } else {
            this.alertMsg("warning", '获取数据失败')
          }
        })
      },
      sex(){
        this.$resource(PATH_STATA + 'sex_dist').get().then((response) => {
          if (response.body.code == 200) {
            this.female_sum = response.body.data.female;
            this.male_sum = response.body.data.male;
            this.total = response.body.data.total;
            this.arr = (this.total).toString().split('')
            if (this.arr.length < 8) {
              for (let j = 0; j < 8 - this.arr.length; j++) {
                this.arr.unshift('')
              }
            }
          } else {
            this.alertMsg("warning", '获取数据失败')
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../style/stata.css";

  .box {
    height: 580px;
    border-radius: 6px;
    background: #fff;
    padding: 10px;
  }

  #chart-geo {

  }

  #chart-pie-out {
    height: 350px;
    border-radius: 0;
    border: 2px solid #F2F2F2;
    position: relative;
  }

  #total {
    height: 50px;
    line-height: 50px;
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #F2F2F2;
  }

  .tt {
    color: #3497E8;
    font-size: 18px;
    font-weight: 500;
    float: left;
    width: 22%;
  }

  .tc {
    margin-top: 10px;
    display: inline-block;
    width: 77%;
    overflow: hidden;
    float: right;
  }

  .tc > i {
    font-style: normal;
    float: left;
    width: 8%;
    height: 30px;
    line-height: 30px;
    background: #F2F2F2;
    margin-left: 10px;
    text-align: center;
    color: #3497E8;
    font-weight: 500;
    font-size: 24px;
  }

  #chart-sex {
    margin-top: 10px;
    height: 220px;
    border-radius: 0;
    border: 2px solid #F2F2F2;
    position: relative;
  }

  #chart-bar {
    margin-top: 10px;
    height: 220px;
  }

  .cat1, .cat2 {
    display: inline-block;
    position: absolute;
    width: 40px;
    height: 40px;
  }

  .cat1 {
    left: -2px;
    top: -2px;
    border-top: 2px solid #C9C9C9;
    border-left: 2px solid #C9C9C9;
  }

  .cat2 {
    right: -2px;
    bottom: -2px;
    border-bottom: 2px solid #C9C9C9;
    border-right: 2px solid #C9C9C9;
  }

  .male-t {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .male, .female {
    width: 49%;
    float: left;
    height: 80%;
    vertical-align: middle;
    position: relative;
  }

  .male > span {
    position: absolute;
    top: 20%;
    font-size: 18px;
    font-weight: bold;
    color: #4DA6C8;
    left: 60%;
  }

  .male > span:nth-child(2) {
    top: 50%;
  }

  .female > span {
    position: absolute;
    top: 20%;
    font-size: 18px;
    font-weight: bold;
    color: #993300;
    left: 60%;
  }

  .female > span:nth-child(2) {
    top: 50%;
  }
</style>
