<template>
  <div class="search-history">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_history' }">信息检索</el-breadcrumb-item>
      <el-breadcrumb-item>病史</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="search">
        <el-row class="row">
          <el-col :span="6">
            主诉：
            <el-input v-model="form.zs" placeholder="主诉关键词,空格分割"></el-input>
          </el-col>
          <el-col :span="6">
            现病史：
            <el-input v-model="form.xbs" placeholder="现病史关键词,空格分割"></el-input>
          </el-col>
          <el-col :span="6">
            查体：
            <el-input v-model="form.ct" placeholder="查体关键词,空格分割"></el-input>
          </el-col>
          <el-col :span="6">
            诊断：
            <el-input v-model="form.zd" placeholder="诊断关键词,空格分割"></el-input>
          </el-col>
        </el-row>
      </div>
      <el-button type="primary" @click="search">开始检索</el-button>
      <div class="result">
        <el-button style="border: none;float: right;" @click="exportExcel">导出Excel</el-button>
        <el-table id="table"
          :data="table_data" style="width: 100%" border empty-text>
          <el-table-column prop="card_id" label="卡号" width="100"></el-table-column>
          <el-table-column label="姓名" width="100">
            <template scope="scope">
              <span class="action" @click="openDetail(scope.row.card_id)">{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="zs" label="主诉"></el-table-column>
          <el-table-column prop="xbs" label="现病史"></el-table-column>
          <el-table-column prop="ct" label="查体"></el-table-column>
          <el-table-column prop="zd" label="诊断"></el-table-column>
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
    name: 'search-history',
    data () {
      return {
        form: {
          zs: '',
          xbs: '',
          ct: '',
          zd: ''
        },
        table_data: [],
        current_page: 1,
        page_size: 10,
        total: 0
      }
    },
    mounted () {
      this.search()
    },
    methods: {
      search(type){
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
        this.$resource(PATH_SEARCH + 'history').save({}, params).then((response) => {
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
      exportExcel(){
        let params = this.form
        this.$resource(PATH_SEARCH + 'history_excel').save({}, params).then((response) => {
          if (response.body.code == 200) {
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      },
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
