<template>
  <div class="search-base">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_basic' }">信息检索</el-breadcrumb-item>
      <el-breadcrumb-item>基本信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="search">
        <el-row :gutter="10" class="row">
          <el-col :span="6">
            就诊卡号：
            <el-input v-model="form.card_id" placeholder="输入卡号"></el-input>
          </el-col>
          <el-col :span="6">
            患者姓名：
            <el-input v-model="form.name" placeholder="输入姓名"></el-input>
          </el-col>
          <el-col :span="6">
            患者年龄：
            <el-input v-model="form.age" placeholder="输入年龄"></el-input>
          </el-col>
          <el-col :span="6">
            患者性别：
            <el-select v-model="form.sex" placeholder="选择性别">
              <el-option label="不限" value="0"></el-option>
              <el-option label="男" value="male"></el-option>
              <el-option label="女" value="female"></el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="row">
          <el-col :span="6">
            疾病名称：
            <el-select v-model="form.sick" placeholder="选择疾病">
              <el-option v-for="item in sick_list" :label="item.name" :value="item.key" :key="item.name"></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            所在省份：
            <el-select v-model="form.province" placeholder="选择省份">
              <el-option v-for="item in province_list" :label="item.name" :value="item.name" :key="item.name"></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            出生日期：
            <el-date-picker v-model="form.birthday" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
          <el-col :span="6">
            就诊日期：
            <el-date-picker v-model="form.visit_date" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
        </el-row>
      </div>
      <!--<div class="cont">-->
      <!--<el-table-->
      <!--:data="tableData" border style="width: 100%" stripe empty-text>-->
      <!--<el-table-column prop="name" label="姓名" min-width="100" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column prop="card_id" label="诊疗卡号" min-width="100" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column prop="visit_date" label="就诊日期" min-width="110" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column prop="sex" label="性别" min-width="70" :formatter="sexFormat"-->
      <!--show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column prop="age" label="年龄" min-width="70" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column prop="birthday" label="出生日期" min-width="110" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column prop="mobile" label="联系电话" min-width="120" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column prop="addr" label="住址" min-width="120" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column prop="create_date" label="录入日期" min-width="110" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column prop="sick_type" label="疾病分类" min-width="100" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column prop="sick_name" label="疾病名称" min-width="100" show-overflow-tooltip></el-table-column>-->
      <!--<el-table-column label="操作" width="90">-->
      <!--<template scope="scope">-->
      <!--<el-button type="text" size="small">详情</el-button>-->
      <!--</template>-->
      <!--</el-table-column>-->
      <!--</el-table>-->
      <!--</div>-->
      <div class="pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          :current-page="current_page"
          :page-size="page_size"
          :page-sizes="[10, 20, 30]"
          layout="total,sizes, prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-base',
    data () {
      return {
        form: {
          card_id: '',
          name: '',
          age: '',
          sex: '',
          sick: [],
          province: '',
          birthday: '',
          visit_date: '',
        },
        province_list: [
          {
            "name": "全部",
          },
          {
            "name": "北京",
          },
          {
            "name": "天津",
          },
          {
            "name": "上海",
          },
          {
            "name": "重庆",
          },
          {
            "name": "河北",
          },
          {
            "name": "河南",
          },
          {
            "name": "云南",
          },
          {
            "name": "辽宁",
          },
          {
            "name": "黑龙江",
          },
          {
            "name": "湖南",
          },
          {
            "name": "安徽",
          },
          {
            "name": "山东",
          },
          {
            "name": "新疆",
          },
          {
            "name": "江苏",
          },
          {
            "name": "浙江",
          },
          {
            "name": "江西",
          },
          {
            "name": "湖北",
          },
          {
            "name": "广西",
          },
          {
            "name": "甘肃",
          },
          {
            "name": "山西",
          },
          {
            "name": "内蒙古",
          },
          {
            "name": "陕西",
          },
          {
            "name": "吉林",
          },
          {
            "name": "福建",
          },
          {
            "name": "贵州",
          },
          {
            "name": "广东",
          },
          {
            "name": "青海",
          },
          {
            "name": "西藏",
          },
          {
            "name": "四川",
          },
          {
            "name": "宁夏",
          },
          {
            "name": "海南",
          },
          {
            "name": "台湾",
          },
          {
            "name": "香港",
          },
          {
            "name": "澳门",
          }
        ],
        sick_list:[{key:0,name:"全部"}],
        current_page: 1,
        page_size: 10,
        total: 0
      }
    },
    mounted () {
//      this.search()
      this.getInfo()
    },
    methods: {
      getInfo(){
        this.$resource(PATH_RECORD + 'jbxx').get().then((response) => {
          if (response.status == 200) {
            for (let i = 0; i < response.body.dm.length; i++) {
              this.sick_list.push(response.body.dm[i])
            }
            for (let i = 0; i < response.body.jm.length; i++) {
              this.sick_list.push(response.body.jm[i])
            }
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      },
      search(){
        let params = {
          start_date: this.date_range[0] ? this.formatDate(new Date(this.date_range[0])) : null,
          end_date: this.date_range[1] ? this.formatDate(new Date(this.date_range[1])) : null,
          card_id: this.card_id,
          current_page: this.current_page,
          page_size: this.page_size
        }
        this.$resource(PATH_SEARCH + 'list').get(params).then((response) => {
          if (response.status == 200 && response.body.code == 200) {
            this.tableData = response.body.data
            this.total = response.body.total
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      },
      handleCurrentChange(val){
        this.current_page = val;
        this.search()
      },
      handleSizeChange(val){
        this.current_page = 1;
        this.page_size = val;
        this.search()
      }
    }
  }
</script>

<style scoped>
  @import "../../style/stata.css";

  .search {
    background: #fff;
    padding: 0 10px;
  }

  .row {
    height: 50px;
    line-height: 50px;
  }

  .page-info {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #D7D7D7;
    padding: 0 10px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .cont {
    padding: 0 10px;
    margin-top: 20px;
  }

  .pagination {
    margin: 20px 10px;
    float: right;
  }

  .el-date-editor {
    width: auto;
  }

  .el-input {
    display: inline-block;
  }

  .el-select {
    display: inline-block;
    width: auto;
  }

  .el-cascader {
    display: inline-block;
  }

  .el-button--primary {
    padding: 6px 12px;
  }

</style>
