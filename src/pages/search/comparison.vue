<template>
  <div class="search-comp">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_comp' }">信息对比</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="inner">
        <div class="base table-box mtable">
          <div class="tt"><span>【妲己】</span><span>【大桥】</span><span>【诸葛亮】</span><span>【赵子龙】</span>对比</div>
          <el-button class="m-el-button"  @click="back">返回</el-button>
          <table border="1" cellspacing="0" cellpadding="0" bordercolor="#f5f5f5">
            <tr>
              <td>基本信息</td>
              <td  v-for="item in data">
                <p><span>姓名：</span>{{item.jbxx.name}}</p>
                <p><span>卡号：</span>{{item.jbxx.card_id}}</p>
                <p><span>性别：</span>{{item.jbxx.sex == 'male' ? "男":"女"}}</p>
                <p><span>年龄：</span>{{item.jbxx.age}}</p>
                <p><span>疾病类型：</span>{{item.jbxx.sick_type.type=='jm'?"静脉疾病":"动脉疾病"}}</p>
              </td>
            </tr>
            <tr>
              <td>病史</td>
              <td v-for="item in data">
                <p><span>主诉：</span>{{item.bs.zs}}</p>
                <p><span>现病史：</span>{{item.bs.xbs}}</p>
                <p><span>查体：</span>{{item.bs.ct}}</p>
                <p><span>诊断：</span>{{item.bs.zd}}</p>
              </td>
            </tr>
            <tr>
              <td>既往史</td>
              <td v-for="item in data">
                <p><span>高血压：</span>{{(item.jws.gxy.type =='0')?"否":(item.jws.gxy.type =='1')?"是":"不祥"}}</p>
                <p><span>糖尿病：</span>{{item.jws.tnb.type =='0'?"否":item.jws.tnb.type =='1'?"是":"不祥"}}</p>
                <p><span>冠心病：</span>{{item.jws.gxb.type =='0'?"否":item.jws.gxb.type =='1'?"是":"不祥"}}</p>
                <p><span>高脂血症：</span>{{item.jws.gzxz.type =='0'?"否":item.jws.gzxz.type =='1'?"是":"不祥"}}</p>
                <p><span>房颤：</span>{{item.jws.fc.type =='0'?"否":item.jws.fc.type =='1'?"是":"不祥"}}</p>
                <p><span>TIA：</span>{{item.jws.tia.type =='0'?"否":item.jws.tia.type =='1'?"是":"不祥"}}</p>
                <p><span>脑梗：</span>{{item.jws.ng.type =='0'?"否":item.jws.ng.type =='1'?"是":"不祥"}}</p>
                <p><span>颈椎病：</span>{{item.jws.jzb.type =='0'?"否":item.jws.jzb.type =='1'?"是":"不祥"}}</p>
                <p><span>吸烟：</span>{{item.jws.xy.type =='0'?"否":item.jws.xy.type =='1'?"是":"不祥"}}</p>
                <p><span>饮酒：</span>{{item.jws.yj.type =='0'?"否":item.jws.yj.type =='1'?"是":"不祥"}}</p>
                <p><span>肿瘤史：</span>{{item.jws.zls.type =='0'?"否":item.jws.zls.type =='1'?"是":"不祥"}}</p>
              </td>
            </tr>
            <tr>
              <td>影像学检验</td>
              <td v-for="item in data">
                <p v-if="item.yx.tCT"><span>头CT：</span>{{item.yx.tCT.date}} <span> 描述：</span>{{item.yx.tCT.ms}}  <span> 结论：</span>{{item.yx.tCT.jl}}</p>
                <p v-if="item.yx.tMRIDWI"><span>头MRI+DWI：</span>{{item.yx.tMRIDWI.date}} <span> 描述：</span>{{item.yx.tMRIDWI.ms}}  <span> 结论：</span>{{item.yx.tMRIDWI.jl}}</p>
                <p v-if="item.yx.tjCTA"><span>头颈CTA：</span>{{item.yx.tjCTA.date}} <span> 描述：</span>{{item.yx.tjCTA.ms}}  <span> 结论：</span>{{item.yx.tjCTA.jl}} </p>
                <p v-if="item.yx.tjCTV"><span>头颈CTV：</span>{{item.yx.tjCTV.date}} <span> 描述：</span>{{item.yx.tjCTV.ms}}  <span> 结论：</span>{{item.yx.tjCTV.jl}} </p>
                <p v-if="item.yx.tMRA"><span>头MRA：</span>{{item.yx.tMRA.date}} <span> 描述：</span>{{item.yx.tMRA.ms}}   <span> 结论：</span>{{item.yx.tMRA.jl}} </p>
                <p v-if="item.yx.tjMRVortMRV"><span>头颈强化MRV或头MRV：</span>{{item.yx.tjMRVortMRV.date}} <span> 描述：</span>{{item.yx.tjMRVortMRV.ms}}   <span> 结论：</span>{{item.yx.tjMRVortMRV.jl}} </p>
                <p v-if="item.yx.tDSA"><span>头SDA：</span>{{item.yx.tDSA.date}} <span> 描述：</span>{{item.yx.tDSA.ms}}  <span> 结论：</span>{{item.yx.tDSA.jl}}</p>
                <p v-if="item.yx.jdmcs"><span>颈动脉超声：</span>{{item.yx.jdmcs.date}} <span> 描述：</span>{{item.yx.jdmcs.ms}}  <span> 结论：</span>{{item.yx.jdmcs.jl}}</p>
                <p v-if="item.yx.jjmcs"><span>颈静脉超声：</span>{{item.yx.jjmcs.date}} <span> 描述：</span>{{item.yx.jjmcs.ms}}  <span> 结论：</span>{{item.yx.jjmcs.jl}}</p>
                <p v-if="item.yx.TCD"><span>TCD：</span>{{item.yx.TCD.date}} <span> 描述：</span>{{item.yx.TCD.ms}}  <span> 结论：</span>{{item.yx.TCD.jl}}</p>
                <p v-if="item.yx.nSPECT"><span>脑SPECT：</span>{{item.yx.nSPECT.date}} <span> 描述：</span>{{item.yx.nSPECT.ms}}  <span> 结论：</span>{{item.yx.nSPECT.jl}}</p>
                <p v-if="item.yx.nPET"><span>脑PET：</span>{{item.yx.nPET.date}} <span> 描述：</span>{{item.yx.nPET.ms}}  <span> 结论：</span>{{item.yx.nPET.jl}}</p>
              </td>
            </tr>
            <tr>
              <td>治疗方案</td>
              <td v-for="item in data">
                <p><span>方案日期：</span>{{item.zlfa.date}}</p>
                <p v-for="it in item.zlfa.items"><span>{{it.name}}：</span>{{it.type}}</p>
              </td>
            </tr>
            <tr>
              <td>评分</td>
              <td v-for="item in data">
                <p v-if="item.pflb.abcd2"><span>ABCD2：</span>{{item.pflb.abcd2.total}}</p>
                <p v-if="item.pflb.nihss"><span>NIHSS：</span>{{item.pflb.nihss.total}}</p>
                <p v-if="item.pflb.mrs"><span>mRS：</span>{{item.pflb.mrs.total}}</p>
                <p v-if="item.pflb.mmse"><span>MMSE：</span>{{item.pflb.mmse.total}}</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-comp',
    data () {
      return {
        data: []
      }
    },
    created () {
      let _this = this;
      let comparison = JSON.parse(window.sessionStorage.getItem('crf_comparison'))
      for (var i = 0; i < comparison.length; i++) {
        (function (arg) {
          _this.$resource(PATH_SEARCH + 'detailByCardId').get({role_id: comparison[arg].card_id}).then((response) => {
            if (response.body.code == 200) {
              _this.data.push(response.body.data)
            } else {
              _this.alertMsg("warning", '获取角色权限信息有误')
            }
          })
        })(i);//调用时参数
      }
    },
    methods: {
      back(){
        window.history.go(-1)
      }
    }
  }
</script>

<style scoped>
  @import "../../style/stata.css";

  * {
    box-sizing: border-box;
  }

  .inner {
    width: 100%;
    min-height: 500px;
    background: #fff;
    border-top: 2px solid #4595E6;
    padding: 10px;
  }

  .base {
    margin-top: 20px;
  }

  .table-box td, .table-box th {
    border: 1px solid #DFE6EC;
  }

  .mtable {
    width: 100%;
    overflow: hidden;
  }

  .table-box caption {
    font-size: 14px;
    font-weight: bold;
  }

  .table-box table tr td:nth-child(1) {
    width: 150px;
  }

  table{
    margin-top: 10px;
  }
  .table-box table tr p > span {
    font-weight: bold;
  }
  .tt{
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    color: #4595E6;
  }
  .m-el-button {
    margin-right: 150px;
  }

  .tt>span{
    margin-right: 10px;
    margin-left: 10px;
    font-size: 16px;
  }

  tr>td:first-child{
    background: #83bff6;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }
</style>
