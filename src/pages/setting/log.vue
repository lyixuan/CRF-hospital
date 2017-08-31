<template>
  <div class="option-log">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_basic' }">设置</el-breadcrumb-item>
      <el-breadcrumb-item>操作日志</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="search">
        <el-row :gutter="10" class="row">
          <el-col :span="6">
            日期范围：
            <el-date-picker v-model="date_range" type="daterange" placeholder="选择日期范围"></el-date-picker>
          </el-col>
        </el-row>
      </div>
      <el-button type="primary" @click="search">开始检索</el-button>
      <div class="result">
        <el-table
          :data="table_data" style="width: 100%" border empty-text>
          <el-table-column prop="create_time" label="操作时间"   show-overflow-tooltip></el-table-column>
          <el-table-column prop="user_name" label="账号"  show-overflow-tooltip></el-table-column>
          <el-table-column prop="option_type" label="操作类型"   show-overflow-tooltip></el-table-column>
          <el-table-column prop="detail" label="操作详情"  show-overflow-tooltip></el-table-column>
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
    name: 'option-log',
    data () {
      return {
        date_range:[],
        form: {
          start_date: '',
          end_date: ''
        },
        sick_list: [{key: '', name: ""}],
        table_data:[],
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
        if (this.date_range.length > 0 && this.date_range[0] && this.date_range[1]) {
          this.form.start_date = (new Date(this.date_range[0])).Format("yyyy-MM-dd")
          this.form.end_date = (new Date(this.date_range[1])).Format("yyyy-MM-dd")
        }
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
        this.$resource(PATH_OPTION + 'log').save({},params).then((response) => {
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

  .pagination {
    margin: 20px 10px;
    float: right;
  }

  .el-date-editor {
    width: auto;
  }

  .el-button--primary {
    padding: 6px 12px;
  }

</style>
