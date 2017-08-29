<template>
  <div class="survey">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/stata_basic' }">统计分析</el-breadcrumb-item>
      <el-breadcrumb-item>基本信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="line1">
        <el-row :gutter="10">
          <el-col :span="8">
            <div class="box" id="chart-1"></div>
          </el-col>
          <el-col :span="16">
            <div class="box" id="chart-2">
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="line2">
        <el-row :gutter="10">
          <el-col :span="8">
            <div class="box" id="chart-3"></div>
          </el-col>
          <el-col :span="16">
            <div class="box" id="chart-4"></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  var echarts = require('echarts');
  export default {
    name: 'basic',
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
      this.c1()
      this.c2()
      this.c3()
      this.c4()
    },
    methods: {
      offsetHeight(){
        let clientheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let o = document.getElementById('chart-1');
        let o1 = document.getElementById('chart-2');
        let o2 = document.getElementById('chart-3');
        let o3 = document.getElementById('chart-4');
        if (window.innerHeight > 700) {
          o.style.height = o1.style.height = clientheight * 0.5 - 50 + 'px';
          o2.style.height = o3.style.height = clientheight * 0.5 - 60 + 'px';
        } else {
          o.style.height = o1.style.height = clientheight * 0.6 + 'px';
          o2.style.height = o3.style.height = clientheight * 0.6 + 'px';
        }
      },
      c1(){
        let myChart = echarts.init(document.getElementById('chart-1'));
        this.$resource(PATH_STATA + 'sex_dist').get().then((response) => {
          if (response.body.code == 200) {
            let fp = (response.body.data.female / response.body.data.total).toFixed(2) * 100
            let mp = (response.body.data.male / response.body.data.total).toFixed(2) * 100
            let option = {
              title: {
                text: '性别占比',
                left: 'center'
              },
              backgroundColor: '#fff',
              legend: {
                data: ['女', '男'],
                left: 'center',
                top: '50',
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
              xAxis: {
                data: [],
                type: 'value',
                show: false,
                axisTick: {
                  show: false
                }
              },
              yAxis: {
                type: 'category',
                show: false,
                axisTick: {
                  show: false
                }
              },
              grid: {
                left: '6%',
                right: '2%',
                bottom: '0%'
              },
              series: [{
                type: 'bar',
                name: '女',
                data: [fp],
                stack: 'income',
                barWidth: 60,
                label: {
                  normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (obj) {
                      return response.body.data.female + '人\n\n' + obj.value + '%';
                    }
                  }
                }
              }, {
                type: 'bar',
                name: '男',
                data: [mp],
                stack: 'income',
                barWidth: 60,
                label: {
                  normal: {
                    show: true,
                    position: 'inside',
                    formatter: function (obj) {
                      return response.body.data.male + '人\n\n' + obj.value + '%';
                    }
                  }
                }
              }],
              color: [
                '#A22422',
                '#1A649F'
              ]
            };
            myChart.setOption(option);
          } else {
            this.alertMsg("warning", '获取数据失败')
          }
        })
      },
      c2(){
        let myChart = echarts.init(document.getElementById('chart-2'));
        this.$resource(PATH_STATA + 'age_dist').get().then((response) => {
          if (response.body.code == 200) {
            let option = {
              title: {
                text: '年龄分布',
                left: 'center'
              },
              backgroundColor: '#fff',
              color: ['#13A3A9'],
              tooltip: {
                trigger: 'item'
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '13%',
                containLabel: true
              },
              xAxis: [{
                type: 'category',
                data: response.body.data.xAxis,
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
                  color: '#444'
                },
                splitLine: {
                  show: false,
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
              toolbox: {
                show: true,
                left: 'right',
                top: 'top',
                feature: {
                  restore: {},
                  saveAsImage: {}
                }
              },
              series: [{
                type: 'bar',
                barWidth: '80%',
                data: response.body.data.value
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
                    color: 'rgba(117, 18,171, 0.1)'
                  }, {
                    offset: 0,
                    color: 'rgba(27, 182,239, 1)'
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
      c3(){
        let myChart = echarts.init(document.getElementById('chart-3'));
        this.$resource(PATH_STATA + 'ill_type_dist').get().then((response) => {
          if (response.body.code == 200) {
            let option = {
              title: {
                text: '疾病类型占比',
                left: 'center'
              },
              backgroundColor: '#fff',
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
              },
              legend: {
                x: 'center',
                top: '12%',
                itemWidth: 14,
                itemHeight: 14,
                align: 'left',
                data: ['静脉', '动脉']
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
                  name: '疾病分类占比',
                  type: 'pie',
                  radius: ['37%', '55%'],
                  color: ['#d74e67', '#0092ff'],
                  label: {
                    normal: {
                      formatter: '{b}\n{d}%'
                    },
                  },
                  data: response.body.data
                }
              ]
            };
            myChart.setOption(option);
          } else {
            this.alertMsg("warning", '获取数据失败')
          }
        })
      },
      c4(){
        let myChart = echarts.init(document.getElementById('chart-4'));
        this.$resource(PATH_STATA + 'ill_dist').get().then((response) => {
          if (response.body.code == 200) {
            let sum = 0;
            for (let i = 0; i < response.body.data.length; i++) {
              sum += response.body.data[i].value
            }
            let option = {
              title: {
                text: '疾病占比',
                left: 'center'
              },
              backgroundColor: '#fff',
              tooltip: {
                formatter: function (info) {
                  var value = info.value;
                  return [
                    '<div class="tooltip-title">' + info.name + '</div>',
                    '人数: ' + value+'('+(value/sum).toFixed(2)*100+'%)',
                  ].join('');
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
              color: ['#00A5FF', '#0092E3', '#007CC1', '#00669F', '#00A5FF', '#0092E3', '#007CC1', '#00669F'],
              series: [{
                type: 'treemap',
                width: '100%',
                height: '80%',
                roam: true, //是否开启拖拽漫游（移动和缩放）
                nodeClick: false,//点击节点后的行为,false无反应
                breadcrumb: {
                  show: false
                },
                label: { //描述了每个矩形中，文本标签的样式。
                  normal: {
                    show: true,
                    position: ['40%', '40%']
                  }
                },
                itemStyle: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: '#fff',
                      fontSize: 16,
                    },
                  },
                  emphasis: {
                    label: {
                      show: true
                    }
                  }
                },
                data: [
                  {
                    value: 400,
                    name: '疾病1',
                  }, {
                    value: 300,
                    name: '疾病2',

                  }, {
                    value: 200,
                    name: '疾病3',
                  }, {
                    value: 100,
                    name: '疾病4',
                  },
                  {
                    value: 120,
                    name: '疾病5',
                  }
                  ,
                  {
                    value: 60,
                    name: '疾病6',
                  },
                  {
                    value: 50,
                    name: '疾病7',
                  }
                ]
              }]
            };
            myChart.setOption(option);
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
    height: 400px;
    border-radius: 6px;
    background: #fff;
    padding: 10px;
  }

  #chart-1 {
  }

  #chart-2 {
  }

  .line2 {
    margin-top: 10px;
  }

</style>
