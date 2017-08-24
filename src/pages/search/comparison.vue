<template>
  <div class="search-comp">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_comp' }">信息对比</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="inner">
        <div class="base table-box mtable">
          <div class="tt"><span>妲己</span>和<span>大桥</span>和<span>诸葛亮</span>和<span>赵子龙</span>对比</div>
          <table border="1" cellspacing="0" cellpadding="0">
            <tr>
              <td>基本信息</td>
              <td>
                <p>姓名：妲己</p>
                <p>性别：女</p>
                <p>年龄：67</p>
                <p>疾病类型：静脉疾病</p>
              </td>
              <td>
                <p>姓名：大桥</p>
                <p>性别：女</p>
                <p>年龄：47</p>
                <p>疾病类型：动脉疾病</p>
              </td>
              <td>
                <p>姓名：诸葛亮</p>
                <p>性别：男</p>
                <p>年龄：57</p>
                <p>疾病类型：静脉疾病</p>
              </td>
              <td>
                <p>姓名：赵子龙</p>
                <p>性别：男</p>
                <p>年龄：67</p>
                <p>疾病类型：静脉疾病</p>
              </td>
            </tr>
            <tr>
              <td>病史</td>
              <td>
                <p><span>主诉：</span>主诉内容...主诉内容...主诉内容...主诉内容...主诉内容...主诉内容...</p>
                <p><span>现病史：</span>现病史内容...现病史内容...现病史内容...现病史内容...现病史内容...</p>
                <p><span>查体：</span>查体...查体...查体...查体...查体...</p>
                <p><span>诊断：</span>诊断...诊断...诊断...诊断...诊断...</p>
              </td>
              <td>
                <p><span>主诉：</span>主诉内容...主诉内容...主诉内容...主诉内容...主诉内容...主诉内容...</p>
                <p><span>现病史：</span>现病史内容...现病史内容...现病史内容...现病史内容...现病史内容...</p>
                <p><span>查体：</span>查体...查体...查体...查体...查体...</p>
                <p><span>诊断：</span>诊断...诊断...诊断...诊断...诊断...</p>
              </td>
              <td>
                <p><span>主诉：</span>主诉内容...主诉内容...主诉内容...主诉内容...主诉内容...主诉内容...</p>
                <p><span>现病史：</span>现病史内容...现病史内容...现病史内容...现病史内容...现病史内容...</p>
                <p><span>查体：</span>查体...查体...查体...查体...查体...</p>
                <p><span>诊断：</span>诊断...诊断...诊断...诊断...诊断...</p>
              </td>
              <td>
                <p><span>主诉：</span>主诉内容...主诉内容...主诉内容...主诉内容...主诉内容...主诉内容...</p>
                <p><span>现病史：</span>现病史内容...现病史内容...现病史内容...现病史内容...现病史内容...</p>
                <p><span>查体：</span>查体...查体...查体...查体...查体...</p>
                <p><span>诊断：</span>诊断...诊断...诊断...诊断...诊断...</p>
              </td>
            </tr>
            <tr>
              <td>既往史</td>
              <td>
                <p><span>高血压：</span>是</p>
                <p><span>糖尿病：</span>否</p>
                <p><span>冠心病：</span>是</p>
                <p><span>高脂血症：</span>是</p>
                <p><span>房颤：</span>是</p>
                <p><span>TIA：</span>是</p>
                <p><span>脑梗：</span>是</p>
                <p><span>颈椎病：</span>不祥</p>
              </td>
              <td>
                <p><span>高血压：</span>是</p>
                <p><span>糖尿病：</span>否</p>
                <p><span>冠心病：</span>是</p>
                <p><span>高脂血症：</span>是</p>
                <p><span>房颤：</span>是</p>
                <p><span>TIA：</span>是</p>
                <p><span>脑梗：</span>是</p>
                <p><span>颈椎病：</span>不祥</p>
              </td>
              <td>
                <p><span>高血压：</span>是</p>
                <p><span>糖尿病：</span>否</p>
                <p><span>冠心病：</span>是</p>
                <p><span>高脂血症：</span>是</p>
                <p><span>房颤：</span>是</p>
                <p><span>TIA：</span>是</p>
                <p><span>脑梗：</span>是</p>
                <p><span>颈椎病：</span>不祥</p>
              </td>
              <td>
                <p><span>高血压：</span>是</p>
                <p><span>糖尿病：</span>否</p>
                <p><span>冠心病：</span>是</p>
                <p><span>高脂血症：</span>是</p>
                <p><span>房颤：</span>是</p>
                <p><span>TIA：</span>是</p>
                <p><span>脑梗：</span>是</p>
                <p><span>颈椎病：</span>不祥</p>
              </td>
            </tr>
            <tr>
              <td>影像学检查</td>
              <td>
                <p><span>头CT：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头MRI+DWI：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头颈CTV：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头MRA：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头SDA：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>TCD：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
              </td>
              <td>
                <p><span>头CT：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头MRI+DWI：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头颈CTV：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头MRA：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头SDA：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>TCD：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
              </td>
              <td>
                <p><span>头CT：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头MRI+DWI：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头颈CTV：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头MRA：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头SDA：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>TCD：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
              </td>
              <td>
                <p><span>头CT：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头MRI+DWI：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头颈CTV：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头MRA：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>头SDA：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
                <p><span>TCD：</span>日期：2015-09-09 描述：描述...  结论：结论...</p>
              </td>
            </tr>
            <tr>
              <td>治疗方案</td>
              <td>
                <p><span>抗凝：</span>种类：种类1，种类2</p>
                <p><span>降压药：</span>种类：种类3，种类4</p>
              </td>
              <td>
                <p><span>RIC：</span>种类：种类1，种类2</p>
                <p><span>降压药：</span>种类：种类3，种类4</p>
              </td>
              <td>
                <p><span>RIC：</span>种类：种类1，种类2</p>
                <p><span>降压药：</span>种类：种类3，种类4</p>
              </td>
              <td>
                <p><span>抗血小板药：</span>种类：种类1，种类2</p>
                <p><span>降压药：</span>种类：种类3，种类4</p>
              </td>
            </tr>
            <tr>
              <td>评分</td>
              <td>
                <p><span>ABCD2：</span>3</p>
                <p><span>NIHSS：</span>6</p>
                <p><span>mRS：</span>4</p>
                <p><span>MMSE：</span>8</p>
              </td>
              <td>
                <p><span>ABCD2：</span>3</p>
                <p><span>NIHSS：</span>6</p>
                <p><span>mRS：</span>4</p>
                <p><span>MMSE：</span>8</p>
              </td>
              <td>
                <p><span>ABCD2：</span>3</p>
                <p><span>NIHSS：</span>6</p>
                <p><span>mRS：</span>4</p>
                <p><span>MMSE：</span>8</p>
              </td>
              <td>
                <p><span>ABCD2：</span>3</p>
                <p><span>NIHSS：</span>6</p>
                <p><span>mRS：</span>4</p>
                <p><span>MMSE：</span>8</p>
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
        activeNames: ["1"]
      }
    },
    mounted () {
    },
    methods: {}
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
    width: 16%;
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
  }
  .tt>span{
    margin-right: 10px;
    margin-left: 10px;
    font-size: 16px;
  }
</style>
