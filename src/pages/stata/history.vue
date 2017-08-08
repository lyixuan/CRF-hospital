<template>
  <div class="survey">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/stata_survey' }">统计分析</el-breadcrumb-item>
      <el-breadcrumb-item>既往史</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="line1">
        <el-row>
          <el-col :span="24">
            <div class="box" id="chart-h1"></div>
          </el-col>
        </el-row>
      </div>
      <div class="line2">
        <el-row :gutter="10">
          <el-col :span="16">
            <div class="box" id="chart-h2"></div>
          </el-col>
          <el-col :span="8">
            <div class="box" id="chart-h2-dz">
              <div style="text-align: center;font-weight: 600;font-size: 16px;color:#444;margin-bottom: 18px;">对照表</div>
              <table border="1" bordercolor="#ccc" width="100%" cellspacing="0" cellpadding="5">
                <tr>
                  <th>类别</th>
                  <th>收缩压(mmHg)</th>
                  <th>舒张压(mmHg)</th>
                </tr>
                <tr>
                  <td>理想血压</td>
                  <td><120</td>
                  <td><80</td>
                </tr>
                <tr>
                  <td>正常血压</td>
                  <td><130</td>
                  <td><85</td>
                </tr>
                <tr>
                  <td>正常高值</td>
                  <td>130~139</td>
                  <td>85~89</td>
                </tr>
                <tr>
                  <td>1级高血压(轻度)</td>
                  <td>140~159</td>
                  <td>90~99</td>
                </tr>
                <tr>
                  <td>2级高血压(重度)</td>
                  <td>160~179</td>
                  <td>100~109</td>
                </tr>
                <tr>
                  <td>3级高血压(重度)</td>
                  <td>≥180</td>
                  <td>≥110</td>
                </tr>
                <tr>
                  <td>单纯收缩期高血压</td>
                  <td>≥140</td>
                  <td><90</td>
                </tr>
                <tr>
                  <td>临界收缩期高血压</td>
                  <td>140~149</td>
                  <td><90</td>
                </tr>
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
    },
    methods: {
      offsetHeight(){
        let clientheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let o = document.getElementById('chart-h1');
        let o1 = document.getElementById('chart-h2');
        let o2 = document.getElementById('chart-h2-dz');
        o.style.height = o1.style.height = o2.style.height = clientheight * 0.5 + 'px';
      },
      c1(){
        let myChart = echarts.init(document.getElementById('chart-h1'));
        this.$resource(PATH_STATA + 'history_dist').get().then((response) => {
          if (response.body.code == 200) {
            let option = {
              title: {
                text: '既往史人群分布',
                left: 'center'
              },
              legend: {
                data: ['是', '否', '不祥'],
                left: 'center',
                top: '40'
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
              backgroundColor: '#fff',
              grid: {
                top:'100',
                left: '3%',
                right: '1%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                show: false,
                name: '人数',
                type: 'value',
                axisLine: {
                  lineStyle: {
                    color: '#ccc'
                  }
                },
              },
              yAxis: {

                type: 'category',
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#27D4FF'
                  }
                },
                boundaryGap:false,
                data: response.body.data.name
              },
              series: [{
                name: '是',
                type: 'bar',
                stack: '总量',
                label: {
                  normal: {
                    show: true,
                    position: 'insideRight'
                  }
                },
                data: response.body.data.yV
              }, {
                name: '否',
                type: 'bar',
                stack: '总量',
                label: {
                  normal: {
                    show: true,
                    position: 'insideRight'
                  }
                },
                data: response.body.data.nV
              }, {
                name: '不祥',
                type: 'bar',
                stack: '总量',
                label: {
                  normal: {
                    show: true,
                    position: 'insideRight'
                  }
                },
                data: response.body.data.uV
              }],
              color: [
                '#2EC7C9',
                '#B6A2DE',
                '#5AB1EF',
                '#324777',
              ]
            };
            myChart.setOption(option);
          } else {
            this.alertMsg("warning", '获取数据失败')
          }
        })
      },
      c2(){
        let myChart = echarts.init(document.getElementById('chart-h2'));
        this.$resource(PATH_STATA + 'hypertension_dist').get().then((response) => {
          if (response.body.code == 200) {
           let option = {
              title: {
                text: '高血压标准对照人群分布',
                x: 'center'
              },
             color:[
               '#D87A80'
             ],
             toolbox: {
               show: true,
               left: 'right',
               top: 'top',
               feature: {
                 restore: {},
                 saveAsImage: {}
               }
             },
              backgroundColor: '#fff',
              grid: {
                left: '2%',
                right: '3%',
                bottom: '25%',
                containLabel: true
              },
              xAxis: {
                axisLabel: {
                  textStyle: {
                    color: '#333'
                  },
                  interval: 0,
                  rotate: 40
                },
                data: response.body.data.name
              },
              yAxis: {
                name: '人数'
              },
              series: [{
                name: '人数',
                type: 'bar',
                data: response.body.data.value
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

  .line2 {
    margin-top: 10px;
  }

</style>
