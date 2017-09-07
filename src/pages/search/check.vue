<template>
  <div class="search-check">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_check' }">信息检索</el-breadcrumb-item>
      <el-breadcrumb-item>检验</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="search">
        <div>日期范围：
          <el-date-picker v-model="date_range" type="daterange" placeholder="选择日期范围"></el-date-picker>
        </div>
        <div>
          检验类型：
          <el-radio-group v-model="checked_item" v-for="item in tabList">
            <el-radio :label="item.key">{{item.name}}</el-radio>
          </el-radio-group>
        </div>
        <div>
          检验结果：
          <el-button type="text" size="mini" @click="writeConfig">定制检验结果搜索范围</el-button>
          <div class="wrap-line" v-if="searchParam.items.length>0">
            <div v-for="item in searchParam.items">
              <span>检验项目：{{item.key}} &nbsp;&nbsp;{{item.name}}</span>
              <span class="unit">单位： {{item.unit}}</span>
              <span>检索范围：{{item.value_low?item.value_low:"空"}} ~ {{item.value_high?item.value_high:"空"}}</span>
              <span>参考范围：{{item.std_low}} ~ {{item.std_high}}</span>
            </div>
          </div>
        </div>
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
          <el-table-column v-if="showItem == 'xcg'" label="血常规">
            <el-table-column prop="WBC" label="白细胞计数"></el-table-column>
            <el-table-column prop="NEUT#" label="中性粒细胞计数"></el-table-column>
            <el-table-column prop="LYMPH#" label="淋巴细胞计数"></el-table-column>
            <el-table-column prop="MONO#" label="单核细胞计数"></el-table-column>
            <el-table-column prop="EOS#" label="嗜酸性粒细胞计数"></el-table-column>
            <el-table-column prop="BASO#" label="嗜酸性粒细胞计数"></el-table-column>
            <el-table-column prop="ENEUT%" label="中性粒细胞百分率"></el-table-column>
            <el-table-column prop="LYMPH%" label="淋巴细胞百分率"></el-table-column>
            <el-table-column prop="MONO%" label="单核细胞百分率"></el-table-column>
            <el-table-column prop="EOS%" label="嗜酸性粒细胞比率"></el-table-column>
            <el-table-column prop="BASO%" label="嗜碱性粒细胞比率"></el-table-column>
            <el-table-column prop="RBC" label="红细胞计数"></el-table-column>
            <el-table-column prop="HGB" label="血红蛋白测定"></el-table-column>
            <el-table-column prop="HCT" label="红细胞压积"></el-table-column>
            <el-table-column prop="MCV" label="红细胞平均体积"></el-table-column>
            <el-table-column prop="MCH" label="平均红细胞血红蛋白含量"></el-table-column>
            <el-table-column prop="MCHC" label="平均红细胞血红蛋白浓度"></el-table-column>
            <el-table-column prop="RDW" label="红细胞体积分布宽度"></el-table-column>
            <el-table-column prop="PLT" label="血小板计数"></el-table-column>
            <el-table-column prop="PCT" label="血小板积压"></el-table-column>
            <el-table-column prop="MPV" label="血小板平均体积"></el-table-column>
            <el-table-column prop="PDW" label="血小板体积分布宽度"></el-table-column>
          </el-table-column>
          <el-table-column v-if="showItem == 'xsh'"  label="血生化">
            <el-table-column prop="ALT" label="丙氨酸氨基转移酶"></el-table-column>
            <el-table-column prop="TBIL" label="总胆红素"></el-table-column>
            <el-table-column prop="DBIL" label="直接胆红素"></el-table-column>
            <el-table-column prop="IBIL" label="间接胆红素"></el-table-column>
            <el-table-column prop="TP" label="总蛋白"></el-table-column>
            <el-table-column prop="ALB" label="白蛋白"></el-table-column>
            <el-table-column prop="G" label="球蛋白"></el-table-column>
            <el-table-column prop="A/G" label="白/球比例"></el-table-column>
            <el-table-column prop="PAB" label="前白蛋白"></el-table-column>
            <el-table-column prop="ALP" label="碱性磷酸酶"></el-table-column>
            <el-table-column prop="GGT" label="γ-谷氨酰转肽酶"></el-table-column>
            <el-table-column prop="AST" label="天冬氨酸氨基转移酶"></el-table-column>
            <el-table-column prop="TBA" label="总胆汁酸"></el-table-column>
            <el-table-column prop="CK" label="肌酸激酶"></el-table-column>
            <el-table-column prop="LDH" label="乳酸脱氢酶"></el-table-column>
            <el-table-column prop="HBDH" label="α-羟基丁酸脱氢酶"></el-table-column>
            <el-table-column prop="CREA" label="肌酐"></el-table-column>
            <el-table-column prop="Urea" label="尿素"></el-table-column>
            <el-table-column prop="GLU" label="葡萄糖"></el-table-column>
            <el-table-column prop="UA" label="尿酸"></el-table-column>
            <el-table-column prop="TG" label="甘油三酶"></el-table-column>
            <el-table-column prop="TCH" label="总胆固醇"></el-table-column>
            <el-table-column prop="HDL-C" label="高密度脂蛋白"></el-table-column>
            <el-table-column prop="LDL-C" label="低密度脂蛋白"></el-table-column>
            <el-table-column prop="APOAI" label="载脂蛋白-AI"></el-table-column>
            <el-table-column prop="APOB" label="载脂蛋白-B"></el-table-column>
            <el-table-column prop="K" label="钾"></el-table-column>
            <el-table-column prop="Na" label="钠"></el-table-column>
            <el-table-column prop="CL" label="氯"></el-table-column>
            <el-table-column prop="Ca" label="钙"></el-table-column>
            <el-table-column prop="P" label="磷"></el-table-column>
            <el-table-column prop="HCY" label="同型半胱氨酸"></el-table-column>
          </el-table-column>
          <el-table-column v-if="showItem == 'nxsx'"  label="凝血四项">
            <el-table-column prop="PT%" label="凝血酶原时间活动度"></el-table-column>
            <el-table-column prop="PT-INR" label="国际标准化比值"></el-table-column>
            <el-table-column prop="PI_SEC" label="凝血酶原时间"></el-table-column>
            <el-table-column prop="TT_sec" label="凝血酶时间"></el-table-column>
            <el-table-column prop="APTT" label="活化部分凝血活酶时间"></el-table-column>
            <el-table-column prop="Fib" label="纤维蛋白原"></el-table-column>
          </el-table-column>
          <el-table-column v-if="showItem == 'txbpas'"  label="同型半胱氨酸">
            <el-table-column prop="HCY" label="同型半胱氨酸"></el-table-column>
          </el-table-column>
          <el-table-column v-if="showItem == 'cmCfydb'"  label="超敏C反应蛋白">
            <el-table-column prop="HSCRP" label="超敏c反应蛋白"></el-table-column>
          </el-table-column>
          <el-table-column v-if="showItem == 'xlb'"  label="血流变">
            <el-table-column prop="xjnd" label="血浆粘度"></el-table-column>
            <el-table-column prop="qxnd1" label="全血粘度:1.0(1/S)"></el-table-column>
            <el-table-column prop="qxnd3" label="全血粘度:3.0(1/S)"></el-table-column>
            <el-table-column prop="qxnd5" label="全血粘度:5.0(1/S)"></el-table-column>
            <el-table-column prop="qxnd10" label="全血粘度:10(1/S)"></el-table-column>
            <el-table-column prop="qxnd50" label="全血粘度:50(1/S)"></el-table-column>
            <el-table-column prop="qxnd100" label="全血粘度:100(1/S)"></el-table-column>
            <el-table-column prop="qxnd180" label="全血粘度:180(1/S)"></el-table-column>
            <el-table-column prop="qxnd200" label="全血粘度:200(1/S)"></el-table-column>
            <el-table-column prop="qxdqhynd" label="全血低切还原粘度"></el-table-column>
            <el-table-column prop="qxgqhynd" label="全血高切还原粘度"></el-table-column>
            <el-table-column prop="dthxbcjl" label="动态红细胞沉降率"></el-table-column>
            <el-table-column prop="hxbyj" label="红细胞压积"></el-table-column>
            <el-table-column prop="xwdby" label="纤维蛋白原"></el-table-column>
            <el-table-column prop="hxbjjzs" label="红细胞聚集指数"></el-table-column>
            <el-table-column prop="xxbjjzs" label="血小板聚集指数"></el-table-column>
            <el-table-column prop="hxbjjzs" label="红细胞聚集指数"></el-table-column>
            <el-table-column prop="hxbgxzs" label="红细胞刚性指数"></el-table-column>
            <el-table-column prop="xcfcKz" label="血沉方程K值"></el-table-column>
          </el-table-column>
          <el-table-column v-if="showItem == 'dbCS'"  label="蛋白C+S">
            <el-table-column prop="PC" label="蛋白C"></el-table-column>
            <el-table-column prop="Ps" label="蛋白S"></el-table-column>
          </el-table-column>
          <el-table-column v-if="showItem == 'thxhdb'"  label="糖化血红蛋白">
            <el-table-column prop="HbAlc" label="糖化血红蛋白"></el-table-column>
          </el-table-column>
          <el-table-column v-if="showItem == 'xxbjjsy'"  label="血小板聚集试验">
            <el-table-column prop="ADP-Pagt" label="ADP诱导的血小板聚集实验"></el-table-column>
          </el-table-column>
          <el-table-column v-if="showItem == 'knxmIII'"  label="抗凝血酶III">
            <el-table-column prop="ATIII" label="抗凝血酶III"></el-table-column>
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
    <el-dialog class="actEdit" size="large" title="检验结果搜索范围" :visible.sync="actDialog">
      <div class="tab-content">
        <div class="table-box" v-show="'xcg' == checked_item">
          <h1>{{jyForm.xcg.name}}</h1>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果最小值</th>
              <th>检验结果最大值</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.xcg.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value_low"></el-input>
              </td>
              <td>
                <el-input v-model="item.value_high"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>
        <div class="table-box" v-show="'xsh' == checked_item">
          <h1>{{jyForm.xsh.name}}</h1>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果最小值</th>
              <th>检验结果最大值</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.xsh.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value_low"></el-input>
              </td>
              <td>
                <el-input v-model="item.value_high"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>
        <div class="table-box" v-show="'nxsx' == checked_item">
          <h1>{{jyForm.nxsx.name}}</h1>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果最小值</th>
              <th>检验结果最大值</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.nxsx.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value_low"></el-input>
              </td>
              <td>
                <el-input v-model="item.value_high"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>
        <div class="table-box" v-show="'txbpas' == checked_item">
          <h1>{{jyForm.txbpas.name}}</h1>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果最小值</th>
              <th>检验结果最大值</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.txbpas.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value_low"></el-input>
              </td>
              <td>
                <el-input v-model="item.value_high"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>
        <div class="table-box" v-show="'cmCfydb' == checked_item">
          <h1>{{jyForm.cmCfydb.name}}</h1>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果最小值</th>
              <th>检验结果最大值</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.cmCfydb.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value_low"></el-input>
              </td>
              <td>
                <el-input v-model="item.value_high"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>
        <div class="table-box" v-show="'xlb' == checked_item">
          <h1>{{jyForm.xlb.name}}</h1>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果最小值</th>
              <th>检验结果最大值</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.xlb.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value_low"></el-input>
              </td>
              <td>
                <el-input v-model="item.value_high"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>
        <div class="table-box" v-show="'thxhdb' == checked_item">
          <h1>{{jyForm.thxhdb.name}}</h1>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果最小值</th>
              <th>检验结果最大值</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.thxhdb.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value_low"></el-input>
              </td>
              <td>
                <el-input v-model="item.value_high"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>
        <div class="table-box" v-show="'xxbjjsy' == checked_item">
          <h1>{{jyForm.xxbjjsy.name}}</h1>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果最小值</th>
              <th>检验结果最大值</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.xxbjjsy.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value_low"></el-input>
              </td>
              <td>
                <el-input v-model="item.value_high"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>
        <div class="table-box" v-show="'dbCS' == checked_item">
          <h1>{{jyForm.dbCS.name}}</h1>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果最小值</th>
              <th>检验结果最大值</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.dbCS.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value_low"></el-input>
              </td>
              <td>
                <el-input v-model="item.value_high"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>
        <div class="table-box" v-show="'knxmIII' == checked_item">
          <h1>{{jyForm.knxmIII.name}}</h1>
          <table>
            <tr>
              <th></th>
              <th>检验项目</th>
              <th>检验结果最小值</th>
              <th>检验结果最大值</th>
              <th>单位</th>
              <th>参考范围</th>
            </tr>
            <tr v-for="item in jyForm.knxmIII.items">
              <td>{{item.No}}</td>
              <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
                style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
              <td>
                <el-input v-model="item.value_low"></el-input>
              </td>
              <td>
                <el-input v-model="item.value_high"></el-input>
              </td>
              <td>{{item.unit}}</td>
              <td>{{item.std_low +" - "+ item.std_high}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="actDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveConfig">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'search-check',
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
        jyForm: {
          xcg: {
            items: [],
            name: "",
          },
          xsh: {
            items: [],
            name: "",
          },
          nxsx: {
            items: [],
            name: "",
          },
          txbpas: {
            items: [],
            name: "",
          },
          cmCfydb: {
            items: [],
            name: "",
          },
          xlb: {
            items: [],
            name: "",
          },
          dbCS: {
            items: [],
            name: "",
          },
          thxhdb: {
            items: [],
            name: "",
          },
          xxbjjsy: {
            items: [],
            name: "",
          },
          knxmIII: {
            items: [],
            name: "",
          }
        },
        searchParam: {
          items: [],
          key: "",
          start_date: "",
          end_date: ""
        },
        showItem:'',

      }
    },
    mounted () {
      this.getJy()
      this.search()
    },
    methods: {
      getJy () {
        this.$resource(PATH_RECORD + 'jy').get().then((response) => {
          if (response.status == 200) {
            let result = response.body
            for (let key in result) {
              this.jyForm[key].name = result[key].name
              this.jyForm[key].items = result[key].items
              for (let v = 0; v < this.jyForm[key].items.length; v++) {
                this.$set(this.jyForm[key].items[v], 'value', null);
              }
              this.tabList.push({key: key, name: result[key].name})
            }
            // 初始化选中tab
            this.checked_item = this.tabList[0].key
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      },
      writeConfig () {
        this.actDialog = true
        for (var i = 0; i < this.jyForm[this.checked_item].items.length; i++) {
          this.$set(this.jyForm[this.checked_item].items[i], 'value_low', null);
          this.$set(this.jyForm[this.checked_item].items[i], 'value_high', null);
        }
      },
      saveConfig(){
        this.searchParam.items = []
        for (let key in this.jyForm) {
          if (key == this.checked_item) {
            for (let i = 0; i < this.jyForm[key].items.length; i++) {
              if (this.jyForm[key].items[i].value_low || this.jyForm[key].items[i].value_high) {
                this.searchParam.items.push((this.jyForm[key].items[i]))
              }
            }
          }
        }
        this.actDialog = false
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
        this.$resource(PATH_SEARCH + 'check').save({}, params).then((response) => {
          if (response.body.code == 200) {
            this.table_data = response.body.data.items;
            this.showItem =  response.body.data.key;
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
        this.searchParam.items = []
      },
      exportExcel(){
        if (this.date_range.length > 0 && this.date_range[0] && this.date_range[1]) {
          this.searchParam.start_date = (new Date(this.date_range[0])).Format("yyyy-MM-dd")
          this.searchParam.end_date = (new Date(this.date_range[1])).Format("yyyy-MM-dd")
        }
        this.searchParam.key = this.checked_item

        let params = this.searchParam
        this.$resource(PATH_SEARCH + 'check_excel').save({}, params).then((response) => {
          if (response.body.code == 200) {
          } else {
            this.alertMsg("error", response.status + " - " + response.url)
          }
        })
      },
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
