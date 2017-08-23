<template>
  <div class="search-previous">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_previous' }">信息检索</el-breadcrumb-item>
      <el-breadcrumb-item>既往史</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="search">
        <div class="wrap-line">
          <p>检索条件： <el-button id="fzs" type="text" size="mini" @click="writeConfig">定制条件</el-button></p>
          <p v-if="jwsForm.gxy.type!=2">高血压：
            <span v-if="jwsForm.gxy.type==1">是
              <span>最高：{{jwsForm.gxy.info.zg_date}}年 （{{jwsForm.gxy.info.xy_zg_high?jwsForm.gxy.info.xy_zg_high:"空缺"}} / {{jwsForm.gxy.info.xy_zg_low?jwsForm.gxy.info.xy_zg_low:"空缺"}} mmHg）</span>
              <span>现在：{{jwsForm.gxy.info.now_date}}年 （{{jwsForm.gxy.info.xy_now_high?jwsForm.gxy.info.xy_now_high:"空缺"}} / {{jwsForm.gxy.info.xy_now_low?jwsForm.gxy.info.xy_now_low:"空缺"}} mmHg）</span></span>
            <span v-if="jwsForm.gxy.type==0">否</span>
          </p>
          <p v-if="jwsForm.tnb.type!=2">糖尿病：
            <span v-if="jwsForm.tnb.type==1">是
              <span>年份：{{jwsForm.tnb.info.date}}  , 空腹血糖：{{jwsForm.tnb.info.xt_data?jwsForm.tnb.info.xt_data:"空缺"}} mmol/L</span></span>
            <span v-if="jwsForm.tnb.type==0">否</span>
          </p>
          <p v-if="jwsForm.gxb.type!=2">冠心病：
            <span v-if="jwsForm.gxb.type==1">是
              <span>年份：{{jwsForm.gxb.info.date}}</span></span>
            <span v-if="jwsForm.gxb.type==0">否</span>
          </p>
          <p v-if="jwsForm.gzxz.type!=2">高脂血症：
            <span v-if="jwsForm.gzxz.type==1">是</span>
            <span v-if="jwsForm.gzxz.type==0">否</span>
          </p>
          <p v-if="jwsForm.fc.type!=2">房颤：
            <span v-if="jwsForm.fc.type==1">是</span>
            <span v-if="jwsForm.fc.type==0">否</span>
          </p>
          <p v-if="jwsForm.tia.type!=2">TIA：
            <span v-if="jwsForm.tia.type==1">是</span>
            <span v-if="jwsForm.tia.type==0">否</span>
          </p>
          <p v-if="jwsForm.ng.type!=2">脑梗：
            <span v-if="jwsForm.ng.type==1">是
            <span>后遗症：{{jwsForm.ng.info.hyz?jwsForm.ng.info.hyz:"空缺"}}</span>
            </span>
            <span v-if="jwsForm.ng.type==0">否</span>
          </p>
          <p v-if="jwsForm.jzb.type!=2">颈椎病：
            <span v-if="jwsForm.jzb.type==1">是</span>
            <span v-if="jwsForm.jzb.type==0">否</span>
          </p>
          <p v-if="jwsForm.xy.type!=2">吸烟：
            <span v-if="jwsForm.xy.type==1">是</span>
            <span v-if="jwsForm.xy.type==0">否</span>
          </p>
          <p v-if="jwsForm.yj.type!=2">饮酒：
            <span v-if="jwsForm.yj.type==1">是</span>
            <span v-if="jwsForm.yj.type==0">否</span>
          </p>
          <p v-if="jwsForm.zls.type!=2">肿瘤史：
            <span v-if="jwsForm.zls.type==1">是
            <span>后遗症：{{jwsForm.zls.info.ms?jwsForm.zls.info.ms:"空缺"}}</span>
            </span>
            <span v-if="jwsForm.zls.type==0">否</span>
          </p>
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
          <el-table-column prop="gxy" label="高血压" :formatter="myFormat"></el-table-column>
          <el-table-column prop="tnb" label="糖尿病" :formatter="myFormat"></el-table-column>
          <el-table-column prop="gxb" label="冠心病" :formatter="myFormat"></el-table-column>
          <el-table-column prop="gzxz" label="高脂血症" :formatter="myFormat"></el-table-column>
          <el-table-column prop="fc" label="房颤" :formatter="myFormat"></el-table-column>
          <el-table-column prop="tia" label="TIA" :formatter="myFormat"></el-table-column>
          <el-table-column prop="ng" label="脑梗" :formatter="myFormat"></el-table-column>
          <el-table-column prop="jzb" label="颈椎病" :formatter="myFormat"></el-table-column>
          <el-table-column prop="xy" label="吸烟" :formatter="myFormat"></el-table-column>
          <el-table-column prop="yj" label="饮酒" :formatter="myFormat"></el-table-column>
          <el-table-column prop="zls" label="肿瘤史" :formatter="myFormat"></el-table-column>
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
    <!--dialog-->
    <el-dialog class="actEdit" size="large" title="新增搜索条件" :visible.sync="actDialog">
      <el-form ref="jwsForm" :model="jwsForm" label-width="90px">
        <el-row>
          <el-col :span="7">
            <el-form-item label="高血压:">
              <el-radio-group v-model="jwsForm.gxy.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="17" v-if="jwsForm.gxy.type == 1">
            <el-row :gutter="10">
              <el-col :span="6">
                <el-form-item label="最高:">
                  <el-date-picker v-model="jwsForm.gxy.info.zg_date" align="right" type="year" :editable="false"
                                  :clearable="false"
                                  placeholder="选择年"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-input v-model="jwsForm.gxy.info.xy_zg_high" placeholder="收缩压"></el-input>
              </el-col>
              <el-col :span="1" class="m-label">
                /
              </el-col>
              <el-col :span="2">
                <el-input v-model="jwsForm.gxy.info.xy_zg_low" placeholder="舒张压"></el-input>
              </el-col>
              <el-col :span="1" class="m-label">
                mmHg
              </el-col>
              <el-col :span="6">
                <el-form-item label="现在:">
                  <el-date-picker v-model="jwsForm.gxy.info.now_date" align="right" type="year" :editable="false"
                                  :clearable="false"
                                  placeholder="选择年"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-input v-model="jwsForm.gxy.info.xy_now_high" placeholder="收缩压"></el-input>
              </el-col>
              <el-col :span="1" class="m-label">
                /
              </el-col>
              <el-col :span="2">
                <el-input v-model="jwsForm.gxy.info.xy_now_low" placeholder="舒张压"></el-input>
              </el-col>
              <el-col :span="1" class="m-label">
                mmHg
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="糖尿病:">
              <el-radio-group v-model="jwsForm.tnb.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="17" v-if="jwsForm.tnb.type == 1">
            <el-row>
              <el-col :span="12">
                <el-form-item label="年份:">
                  <el-date-picker v-model="jwsForm.tnb.info.date"  type="year" :editable="false"
                                  :clearable="false"
                                  placeholder="选择年"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="3" class="m-label">
                空腹血糖:
              </el-col>
              <el-col :span="3">
                <el-input v-model="jwsForm.tnb.info.xt_data"></el-input>
              </el-col>
              <el-col :span="2" class="m-label">
                mmol/L
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="冠心病:">
              <el-radio-group v-model="jwsForm.gxb.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="17" v-if="jwsForm.gxb.type == 1">
            <el-row>
              <el-col :span="12">
                <el-form-item label="年份:">
                  <el-date-picker v-model="jwsForm.gxb.info.date"  type="year" :editable="false"
                                  :clearable="false"
                                  placeholder="选择年"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="高脂血症:">
              <el-radio-group v-model="jwsForm.gzxz.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="房颤:">
              <el-radio-group v-model="jwsForm.fc.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="TIA:">
              <el-radio-group v-model="jwsForm.tia.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="脑梗:">
              <el-radio-group v-model="jwsForm.ng.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="17" v-if="jwsForm.ng.type == 1">
            <el-row>
              <el-col :span="23">
                <el-form-item label="后遗症:">
                  <el-input v-model="jwsForm.ng.info.hyz"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="颈椎病:">
              <el-radio-group v-model="jwsForm.jzb.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="吸烟:">
              <el-radio-group v-model="jwsForm.xy.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="饮酒:">
              <el-radio-group v-model="jwsForm.yj.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="row-line"></div>
        <el-row>
          <el-col :span="7">
            <el-form-item label="肿瘤史:">
              <el-radio-group v-model="jwsForm.zls.type">
                <el-radio label="1">是</el-radio>
                <el-radio label="0">否</el-radio>
                <el-radio label="2">不选</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="17" v-if="jwsForm.zls.type == 1">
            <el-row>
              <el-col :span="23">
                <el-form-item label="描述:">
                  <el-input v-model="jwsForm.zls.info.ms"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="actDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveConfig">确  定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'search-previous',
    data () {
      return {
        current_page: 1,
        page_size: 10,
        total: 0,
        table_data: [],
        actDialog: false,
        jwsForm: {
          gxy: {
            type: "2",
            info: {
              now_date: new Date(),
              xy_now_high: "",
              xy_now_low: "",
              zg_date: new Date(),
              xy_zg_high: "",
              xy_zg_low: ""
            }
          },
          tnb: {
            type: "2",
            info: {
              date: new Date(),
              xt_data: ""
            }
          },
          gxb: {
            type: "2",
            info: {
              date: new Date()
            }
          },
          gzxz: {
            type: "2"
          },
          fc: {
            type: "2"
          },
          tia: {
            type: "2"
          },
          ng: {
            type: "2",
            info: {
              hyz: ""
            }
          },
          jzb: {
            type: "2"
          },
          xy: {
            type: "2"
          },
          yj: {
            type: "2"
          },
          zls: {
            type: "2",
            info: {
              ms: ""
            }
          }
        }
      }
    },
    mounted () {
      sessionStorage.removeItem("form_jws");
      this.search()
    },
    methods: {
      myFormat(row, col){
        let result = ''
          for(let key in row){
            if(col.property==key){
              result=row[key]=="0"? "是":row[key]=="1"?"否":"不祥"
              return result
            }
          }
      },
      search(type){
        let params = this.jwsForm
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
        this.$resource(PATH_SEARCH + 'previous').save({}, params).then((response) => {
          if (response.body.code == 200) {
            this.table_data = response.body.data
            this.paging(response.body.pagination)
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      },
      writeConfig () {
        this.actDialog = true
        let info = JSON.parse(window.sessionStorage.getItem('form_jws'))
        if (info) {
          this.jwsForm = info
        }
      },
      saveConfig(){
        this.jwsForm.gxy.info.zg_date = (new Date(this.jwsForm.gxy.info.zg_date)).Format("yyyy")
        this.jwsForm.gxy.info.now_date = (new Date(this.jwsForm.gxy.info.now_date)).Format("yyyy")
        this.jwsForm.tnb.info.date = (new Date(this.jwsForm.tnb.info.date)).Format("yyyy")
        this.jwsForm.gxb.info.date = (new Date(this.jwsForm.gxb.info.date)).Format("yyyy")
        window.sessionStorage.setItem('form_jws', JSON.stringify(this.jwsForm))
        this.actDialog = false
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
    padding: 10px;
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

  .row-line {
    border-bottom: 1px solid #e0e6ed;
    margin-bottom: 20px;
  }

  .m-label {
    text-align: center;
    line-height: 30px;
    color: #666;
  }


  .wrap-line {
    border: 1px solid #20C1DC;
    margin-top: 10px;
    border-radius: 6px;
    padding: 0 10px;
  }

  .wrap-line span {
    margin-left: 10px;
  }
</style>
