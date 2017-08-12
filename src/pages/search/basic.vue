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
              <el-option label="" value=""></el-option>
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
              <el-option v-for="item in province_list" :label="item.name" :value="item.name"
                         :key="item.name"></el-option>
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
      <el-button type="primary" @click="search">开始检索</el-button>
      <div class="result">
        <el-table
          :data="table_data" style="width: 100%" border empty-text>
          <el-table-column prop="card_id" label="诊疗卡号"   show-overflow-tooltip></el-table-column>
          <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
          <el-table-column prop="sex" label="性别" :formatter="sexFormat" min-width="60"
                           show-overflow-tooltip></el-table-column>
          <el-table-column prop="age" label="年龄"  min-width="60" show-overflow-tooltip></el-table-column>
          <el-table-column prop="birthday" label="出生日期"   show-overflow-tooltip></el-table-column>
          <el-table-column prop="mobile" label="联系电话"  show-overflow-tooltip></el-table-column>
          <el-table-column prop="province" label="省份" show-overflow-tooltip></el-table-column>
          <el-table-column prop="addr" label="住址" show-overflow-tooltip></el-table-column>
          <el-table-column prop="sick_type" label="疾病类型"  show-overflow-tooltip></el-table-column>
          <el-table-column prop="sick_name" label="疾病名称" show-overflow-tooltip></el-table-column>
          <el-table-column prop="visit_date" label="就诊日期"   show-overflow-tooltip></el-table-column>
          <el-table-column prop="create_date" label="录入日期"   show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" width="90">
            <template scope="scope">
              <el-button type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
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
          sick: '',
          province: '',
          birthday: '',
          visit_date: ''
        },
        province_list: [
          {
            "name": "",
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
        sick_list: [{key: '', name: ""}],
        table_data:[],
        current_page: 1,
        page_size: 10,
        total: 0
      }
    },
    mounted () {
      this.search()
      this.getInfo()
    },
    methods: {
      sexFormat(row, col){
        let result = ''
        if (row.sex == 'male') {
          result = '男'
        } else if (row.sex == 'female') {
          result = '女'
        }
        return result
      },
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
      search(type){
        this.form.birthday =new Date(this.form.birthday).Format("yyyy-MM-dd")
        this.form.visit_date =new Date(this.form.visit_date).Format("yyyy-MM-dd")
        let params = this.form
        if (type == 1) {
          // 点击分页
          params.page_size = this.page_size
          params.current_page = this.current_page
        } else {
          // 点击查询
          params.page_size = this.page_size = 10
          params.current_page = this.current_page = 1
        }
        this.requestData(params)
      },
      requestData(params){
        this.$resource(PATH_SEARCH + 'basic').save({},params).then((response) => {
          if (response.body.code == 200) {
            this.table_data = response.body.data
            this.paging(response.body.pagination)
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      },
      handleCurrentChange(val){
        this.current_page = val;
        this.search(1)
      },
      handleSizeChange(val){
        this.page_size = val;
        this.search(1)
      },
      paging(p){
        this.total = p.total;
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

  .result {
    margin-top: 10px;
    background: #fff;
    padding: 10px;
    overflow: hidden;
    min-height: 500px;
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
    width: auto;
  }

  .el-select {
    display: inline-block;
    width: auto;
  }

  .el-cascader {
    display: inline-block;
    width: auto;
  }

  .el-button--primary {
    padding: 6px 12px;
  }

</style>
