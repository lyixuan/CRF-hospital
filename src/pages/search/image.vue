<template>
  <div class="search-image">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_image' }">信息检索</el-breadcrumb-item>
      <el-breadcrumb-item>影响学检验</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="search">
        <div>选择日期：
          <el-date-picker v-model="date_range" type="daterange" placeholder="选择日期范围"></el-date-picker>
        </div>
        <div style="width: 100%;overflow: hidden">
          <span style="float: left">检验类型：</span>
          <span style="float: left;width: 90%"><el-radio-group v-model="checked_item" v-for="item in tabList">
            <el-radio :label="item.key">{{item.name}}</el-radio>
          </el-radio-group></span>

        </div>
        <div style="width: 100%;overflow: hidden">
          <span style="float: left">描述关键字：</span>
          <span style="float: left;width: 80%"><el-input v-model="searchParam.ms" placeholder="请输入关键词，多个关键词用空格分割"></el-input></span>
        </div>
        <div style="width: 100%">
          <span style="float: left">结论关键字：</span>
          <span style="float: left;width: 80%"><el-input v-model="searchParam.jl" placeholder="请输入关键词，多个关键词用空格分割"></el-input></span>
        </div>
      </div>
      <el-button type="primary" @click="search">开始检索</el-button>
      <div class="result">
        <el-table id="table"
                  :data="table_data" style="width: 100%" border empty-text>
          <el-table-column prop="card_id" label="卡号" width="100"></el-table-column>
          <el-table-column label="姓名" width="100">
            <template scope="scope">
              <span class="action" @click="openDetail(scope.row.card_id)">{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="检查日期"></el-table-column>
          <el-table-column prop="yx_name" label="检查项目"></el-table-column>
          <el-table-column prop="ms" label="描述"></el-table-column>
          <el-table-column prop="jl" label="结论"></el-table-column>
          <el-table-column label="操作" width="90">
            <template scope="scope">
              <span class="action" @click="addComparison(scope.row)">+加对比</span>
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
    name: 'search-image',
    data () {
      return {
        current_page: 1,
        page_size: 10,
        total: 0,
        table_data: [],
        checked_item: '',
        tabList: [],
        date_range: [],

        actDialog: false,
        searchParam: {
          start_date:"",
          end_date:"",
          key:"",
          ms: "",
          jl: ""
        }
      }
    },
    mounted () {
      this.getYx()
      this.search()
    },
    methods: {
      getYx () {
        this.$resource(PATH_RECORD + 'yx').get().then((response) => {
            if (response.status == 200) {
              let result = response.body.yx_items
              this.tabList = result
              this.checked_item = result[0].key
            } else {
              this.alertMsg("error", response.status + " - " + response.url)
            }
          }
        )
      },
      search(type){
        if (this.date_range.length > 0 && this.date_range[0] && this.date_range[1]) {
          this.searchParam.start_date = (new Date(this.date_range[0])).Format("yyyy-MM-dd")
          this.searchParam.end_date = (new Date(this.date_range[1])).Format("yyyy-MM-dd")
        }
        this.searchParam.key = this.checked_item

        let params = this.searchParam
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
        this.$resource(PATH_SEARCH + 'image').save({}, params).then((response) => {
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
      },
      changeTab(){
        this.searchParam.ms = ""
        this.searchParam.jl = ""
      }
    },
    watch: {
      "checked_item": 'changeTab'
    }
  }
</script>

<style scoped>
  @import "../../style/stata.css";

  .search {
    background: #fff;
    padding: 10px;
    overflow: hidden;
  }

  .search > div {
    line-height: 40px;
  }

  .result {
    margin-top: 10px;
    background: #fff;
    padding: 10px;
    overflow: hidden;
    min-height: 500px;
  }

  .pagination {
    margin: 20px 10px;
    float: right;
  }

  .el-date-editor--daterange.el-input {
    width: 220px !important;
  }

  .el-radio-group {
    margin-right: 10px !important;
  }

  .wrap-line {
    border: 1px solid #20C1DC;
    margin-top: 10px;
    border-radius: 6px;
    padding: 0 10px;
  }

  .wrap-line span {
    display: inline-block;
    width: 150px;
    margin-left: 20px;
  }

  .wrap-line span:first-child {
    width: 250px;
    margin-left: 50px;
  }

  .wrap-line span.unit {
    width: 100px;
  }
</style>
