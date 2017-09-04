<template>
  <div class="search-cure">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_cure' }">信息检索</el-breadcrumb-item>
      <el-breadcrumb-item>治疗方案</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="search">
        <el-row>
          <el-col :span="20">
            选择日期：
            <el-date-picker v-model="date_range" align="right" type="daterange"
                            placeholder="选择日期范围" :editable="false"></el-date-picker>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="20">
            <span style="float: left">
               治疗方案：
            </span>

            <el-checkbox-group v-model="checkedList" style="width: 90%;float: left">
              <el-checkbox :label=item.key v-for="item in checkList">{{item.name}}</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <div class="tab-content">
          <el-form ref="zlfaForm" :model="zlfaForm" label-width="70px">
            <transition-group name="fade-list">
              <el-row class="line-out" v-for="item in checkedList" v-bind:key="item">
                <el-col :span="3">
                  <el-button type="info">{{zlfaForm[item].name}}</el-button>
                </el-col>
                <el-col :span="21">
                  <el-row :gutter="10" v-for="(value,key) in zlfaForm[item]"
                          v-if="key != 'name' && key != 'types' && key != 'flag'">
                    <el-col :span="2" class="add-btn">
                      &nbsp;
                      <el-button type="info" @click="addType(item,key)" v-if="key == zlfaForm[item].flag">+</el-button>
                      <el-button type="danger" @click="delType(item,key)"
                                 v-if="key != 'z1' && key == zlfaForm[item].flag">-
                      </el-button>
                    </el-col>
                    <el-col :span="6">
                      <el-form-item label="种类:" class="zhong-lei-label">
                        <el-select v-model="zlfaForm[item][key].type" placeholder="请选择">
                          <el-option v-for="item in zlfaForm[item].types" :label="item.name"
                                     :value="item.key"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </transition-group>
          </el-form>
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
          <el-table-column prop="date" label="方案日期" width="150"></el-table-column>
          <el-table-column label="方案">
            <template scope="scope">
              <div  v-for="item in scope.row.items" class="fa">{{item.name}} （<span v-for="i in item.types">{{i}}</span>）</div>
            </template>
          </el-table-column>
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
    name: 'search-cure',
    data () {
      return {
        current_page: 1,
        page_size: 10,
        total: 0,
        checkedList: [],
        checkList: [],
        dosageList: [],
        frequencyList: [],
        usageList: [],
        table_data: [],
        date_range: [],
        zlfaForm: {
          RIC: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          },
          jty: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          }
          ,
          jyy: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          },
          jzy: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          },
          kn: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          },
          kxxby: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          },
          other: {
            name: "",
            types: [],
            z1: {
              type: "",
              dosage: "",
              frequency: "",
              usage: "",
            }
          }
        },
        actDialog: false,
        searchParam: {
          start_date: "",
          end_date: "",
          key: "",
          ms: "",
          jl: ""
        }
      }
    },
    mounted () {
      this.getZlfa()
      this.search()
    },
    methods: {
      getZlfa () {
        this.$resource(PATH_RECORD + 'zlfa').get().then((response) => {
            if (response.status == 200) {
              let result_items = response.body.items
              this.dosageList = response.body.dosage.items
              this.frequencyList = response.body.frequency.items
              this.usageList = response.body.usage.items
              for (let key in result_items) {
                this.checkList.push({key: key, name: result_items[key].name})
                for (let key1 in this.zlfaForm) {
                  if (key == key1) {
                    this.zlfaForm[key1].name = result_items[key].name
                    this.zlfaForm[key1].types = result_items[key].items
                    this.zlfaForm[key1].flag = 'z1'
                  }
                }
              }
            } else {
              this.alertMsg('error', response.status + ' - ' + response.url)
            }
          },
        )
      },
      search(type){
        let params = {}
        if (this.date_range.length > 0 && this.date_range[0] && this.date_range[1]) {
          params.start_date = (new Date(this.date_range[0])).Format("yyyy-MM-dd")
          params.end_date = (new Date(this.date_range[1])).Format("yyyy-MM-dd")
        }
        for (let key in this.zlfaForm) {
          params[key] = {}
          for (let key2 in this.zlfaForm[key]) {
            if (key2 != "name" && key2 != "types" && key2 != "flag") {
              params[key][key2] = this.zlfaForm[key][key2]
            }
          }
        }
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
        this.$resource(PATH_SEARCH + 'cure').save({}, params).then((response) => {
          if (response.body.code == 200) {
            this.table_data = response.body.data
            this.paging(response.body.pagination)
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      },
      addType(m, k){
        let kn = parseInt(k.substr(1, 1))
        let str = 'z' + ++kn
        this.zlfaForm[m].flag = str;
        this.$set(this.zlfaForm[m], str, {
          type: "",
          dosage: "",
          frequency: "",
          usage: ""
        });

      },
      delType(m, k){
        this.$set(this.zlfaForm[m], k, null);
        delete this.zlfaForm[m][k]
        let kn = parseInt(k.substr(1, 1))
        this.zlfaForm[m].flag = 'z' + --kn;
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
    },
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
  .fa{
    float: left;
    margin-right: 10px;
  }
  .fa > span{
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
