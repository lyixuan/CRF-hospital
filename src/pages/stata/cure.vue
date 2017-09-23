<template>
  <div class="survey">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/stata_survey' }">统计分析</el-breadcrumb-item>
      <el-breadcrumb-item>治疗方案</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="line1">
        <el-row :gutter="10">
          <el-col :span="10">
            <div class="box" id="chart-c1"></div>
          </el-col>
          <el-col :span="14">
            <div class="box" id="chart-c2">
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="line2">
        <el-row>
          <el-col :span="24">
            <div class="box" id="chart-c3">
              <div style="text-align: center;font-weight: 600;font-size: 18px;color:#333;margin-bottom: 20px;">
                治疗方案详情统计
              </div>
              <table id="table" border="1" bordercolor="#E0E6ED" width="100%" cellpadding="5" style="border-collapse: collapse">
              </table>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  var echarts = require('echarts');
  export default {
    name: 'history',
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
    },
    methods: {
      offsetHeight(){
        let clientheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let o = document.getElementById('chart-c1');
        let o1 = document.getElementById('chart-c2');
        if (window.innerHeight > 780) {
          o.style.height = clientheight * 0.5 - 50+ 'px';
          o1.style.height = clientheight * 0.5 - 50+ 'px';
        } else {
          o.style.height = clientheight * 0.6 + 'px';
          o1.style.height = clientheight * 0.6 + 'px';
        }
      },
      c1(){
        let myChart = echarts.init(document.getElementById('chart-c1'));
        this.$resource(PATH_STATA + 'cure_dist').get().then((response) => {
          if (response.body.code == 200) {
            let rst = response.body.data;
            let maxArr = [], val = [], maxe = 0;

            for (let i = 0; i < rst.length; i++) {
              val.push(rst[i].value)
              if (maxe < rst[i].value) {
                maxe = rst[i].value
              }
            }
            for (let i = 0; i < rst.length; i++) {
              maxArr.push({name: rst[i].name, max: maxe})
            }
            var option = {
              title: {
                text: '治疗方案分析(单位:次)',
                left: 'center',
              },
              tooltip: {},

              radar: {
                center: ['50%', '55%'],
                splitNumber: 8,
                axisLine: {
                  lineStyle: {
                    color: '#555',
                    opacity: .2
                  }
                },
                splitLine: {
                  lineStyle: {
                    color: '#555',
                    opacity: .2
                  }
                },
                splitArea: {
                  areaStyle: {
                    color: '#f5f5f5',
                    opacity: 1,
                    shadowBlur: 45,
                    shadowColor: 'rgba(0,0,0,.5)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 15,
                  }
                },

                indicator: maxArr
              },
              series: [{
                name: '治疗方案分析',
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                  normal: {
                    shadowBlur: 13,
                    shadowColor: 'rgba(0,0,0,.2)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    opacity: .6
                  }
                },

                data: [{
                  value: val,
                  name: '治疗方案分析',
                }]
              }],
              color: ['#b1eadb'],
              backgroundColor: '#fff'

            };
            myChart.setOption(option);
          } else {
            this.alertMsg("warning", '获取数据失败')
          }
        })
      },
      c2(){
        let myChart = echarts.init(document.getElementById('chart-c2'));
        this.$resource(PATH_STATA + 'drug_dist').get().then((response) => {
          if (response.body.code == 200) {
            var dataAxis = response.body.data.xAxis
            var data = response.body.data.value

            let option = {
              title: {
                text: '药品使用次数对比',
                x: 'center'
              },
              backgroundColor: '#fff',
              xAxis: {
                data: dataAxis,
                axisLabel: {
                  inside: true,
                  interval: 0,
                  rotate: 90,
                  textStyle: {
                    color: '#000'
                  }
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                z: 10
              },
              yAxis: {
                name: '(次)',
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  textStyle: {
                    color: '#555'
                  }
                }
              },
              "toolbox": {
                "show": true,
                "feature": {
                  "restore": {},
                  "saveAsImage": {}
                }
              },
              grid: {
                left: '2%',
                right: '3%',
                bottom: '5%',
                containLabel: true
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              dataZoom: [{
                type: 'inside'
              }],
              series: [{ // For shadow
                type: 'bar',
                itemStyle: {
                  normal: {
                    color: 'rgba(0,0,0,0.05)'
                  }
                },
                barGap: '-100%',
                barCategoryGap: '40%',
                animation: true
              }, {
                type: 'bar',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1, [{
                        offset: 0,
                        color: '#83bff6'
                      }, {
                        offset: 0.5,
                        color: '#188df0'
                      }, {
                        offset: 1,
                        color: '#188df0'
                      }]
                    )
                  },
                  emphasis: {
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2378f7'
                      }, {
                        offset: 0.7,
                        color: '#2378f7'
                      }, {
                        offset: 1,
                        color: '#83bff6'
                      }]
                    )
                  }
                },
                data: data
              }],
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  formatter: '{c}'
                }
              },
            };
            myChart.setOption(option);
          } else {
            this.alertMsg("warning", '获取数据失败')
          }
        })
      },
      c3(){
        this.$resource(PATH_STATA + 'cure_detail').get().then((response) => {
          if (response.body.code == 200) {
            let rst = response.body.data;
            let str = '<tr style="background: #EFF2F7;height: 50px;"> <th>治疗方案</th> <th style="text-align:left;padding-left:10px;">药物名称</th> <th style="text-align:left;padding-left:10px;">使用次数</th> </tr>';
            for (let i = 0; i < rst.length; i++) {
              for (let j = 0; j < rst[i].drugs.length; j++) {
                if (j == 0) {
                  str += '<tr> <td style="font-size: 16px;color:#666;width: 50%;'
                  if(i%2==0){
                    str += 'background: #E2F0E4;'
                  }  else {
                    str += 'background: #C9E5F5;'
                  }
                  str += '"rowspan=' + rst[i].drugs.length + '>' + rst[i].type + '</td>'
                  str += '<td'
                  if(i%2==0){
                    str += ' style="background: #E2F0E4;text-align:left;padding-left:10px;color:#666"'
                  } else {
                    str += ' style="background: #C9E5F5;text-align:left;padding-left:10px;color:#666"'
                  }
                  str +=  '>' + rst[i].drugs[j].name + '</td><td'
                  if(i%2==0){
                    str += ' style="background: #E2F0E4;text-align:left;padding-left:10px;color:#666"'
                  } else {
                    str += ' style="background: #C9E5F5;text-align:left;padding-left:10px;color:#666"'
                  }
                  str += '>' + rst[i].drugs[j].value + '</td> </tr>'
                } else {
                  str += '<tr'
                  if(i%2==0){
                    str += ' style="background: #E2F0E4;text-align:left;"'
                  } else {
                    str += ' style="background: #C9E5F5;text-align:left;"'
                  }
                  str += '> <td style="padding-left: 10px;color:#666">' + rst[i].drugs[j].name + '</td><td style="padding-left: 10px;color:#666">' + rst[i].drugs[j].value + '</td> </tr>'
                }
              }
            }
            document.getElementById('table').innerHTML=str
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
    min-height: 400px;
    border-radius: 6px;
    background: #fff;
    padding: 10px;
    border: 1px solid #c5c5c5;
  }

  .line2 {
    margin-top: 10px;
  }

  table {
    text-align: center;
  }

  table td:hover{
    background: #ccc;
  }


</style>
