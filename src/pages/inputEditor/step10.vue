<template>
  <div class="input-step10">
    <div class="x-content">
      <div class="title">保存预览</div>
      <div class="table-box">
        <div class="t-header">一、基本信息</div>
        <table>
          <tr>
            <td>姓名: {{x_step1_jbxx.name}}</td>
            <td>性别: {{x_step1_jbxx.sex == 'female'?'女':'男'}}</td>
            <td>年龄: {{x_step1_jbxx.age}}</td>
            <td>诊疗卡号: {{x_step1_jbxx.card_id}}</td>
            <td>就诊日期: {{x_step1_jbxx.visit_date}}</td>
          </tr>
          <tr>
            <td>电话: {{x_step1_jbxx.mobile}}</td>
            <td>出生年月: {{x_step1_jbxx.birthday}}</td>
            <td colspan="3">住址: {{x_step1_jbxx.addr}}</td>
          </tr>
          <tr>
            <td>病史分类:</td>
            <td colspan="4">{{x_step1_jbxx.sick_type ? x_step1_jbxx.sick_type.sick:''}}</td>
          </tr>
        </table>
        <div class="t-header">二、病史</div>
        <table>
          <tr>
            <td>主诉: {{x_step2_bs.zs}}</td>
          </tr>
          <tr>
            <td>查体: {{x_step2_bs.ct}}</td>
          </tr>
          <tr>
            <td>现病史: {{x_step2_bs.xbs}}</td>
          </tr>
          <tr>
            <td>诊断: {{x_step2_bs.zd}}</td>
          </tr>
        </table>
        <div class="t-header">三、既往史</div>
        <table>
          <tr>
            <td width="80">高血压</td>
            <td v-show="x_step3_jws.gxy.type == 1?true:false">{{x_step3_jws.gxy.info ? "最高: "+
              (x_step3_jws.gxy.info.zg_date).substr(0,4) +"年, "+ x_step3_jws.gxy.info.xy_zg_high + "/"
              +x_step3_jws.gxy.info.xy_zg_low + "mmHg ; 现在: "+ (x_step3_jws.gxy.info.now_date).substr(0,4) +"年, "+
              x_step3_jws.gxy.info.xy_now_high + "/" +x_step3_jws.gxy.info.xy_now_low + "mmHg " :''}}
            </td>
            <td v-show="x_step3_jws.gxy.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.gxy.type == 2?true:false">不祥</td>
          </tr>
          <tr>
            <td>糖尿病</td>
            <td v-show="x_step3_jws.tnb.type == 1?true:false">{{x_step3_jws.tnb.info ?
              x_step3_jws.tnb.info.date.substr(0,4) +" 年, 空腹血糖: " + x_step3_jws.tnb.info.xt_data + "mmol/L" : ''}}
            </td>
            <td v-show="x_step3_jws.tnb.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.tnb.type == 2?true:false">不祥</td>
          </tr>
          <tr>
            <td>冠心病</td>
            <td v-show="x_step3_jws.gxb.type == 1?true:false">{{x_step3_jws.gxb.info?
              x_step3_jws.gxb.info.date.substr(0,4) +" 年":''}}
            </td>
            <td v-show="x_step3_jws.gxb.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.gxb.type == 2?true:false">不祥</td>
          </tr>
          <tr>
            <td>高脂血症</td>
            <td v-show="x_step3_jws.gzxz.type == 1?true:false">是</td>
            <td v-show="x_step3_jws.gzxz.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.gzxz.type == 2?true:false">不祥</td>
          </tr>
          <tr>
            <td>房颤</td>
            <td v-show="x_step3_jws.fc.type == 1?true:false">是</td>
            <td v-show="x_step3_jws.fc.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.fc.type == 2?true:false">不祥</td>
          </tr>
          <tr>
            <td>TIA</td>
            <td v-show="x_step3_jws.tia.type == 1?true:false">是</td>
            <td v-show="x_step3_jws.tia.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.tia.type == 2?true:false">不祥</td>
          </tr>
          <tr>
            <td>脑梗</td>
            <td v-show="x_step3_jws.ng.type == 1?true:false">{{x_step3_jws.ng.info? "后遗症: " +x_step3_jws.ng.info.hyz
              :''}}
            </td>
            <td v-show="x_step3_jws.ng.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.ng.type == 2?true:false">不祥</td>
          </tr>
          <tr>
            <td>颈椎病</td>
            <td v-show="x_step3_jws.jzb.type == 1?true:false">是</td>
            <td v-show="x_step3_jws.jzb.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.jzb.type == 2?true:false">不祥</td>
          </tr>
          <tr>
            <td>吸烟</td>
            <td v-show="x_step3_jws.xy.type == 1?true:false">是</td>
            <td v-show="x_step3_jws.xy.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.xy.type == 2?true:false">不祥</td>
          </tr>
          <tr>
            <td>饮酒</td>
            <td v-show="x_step3_jws.yj.type == 1?true:false">是</td>
            <td v-show="x_step3_jws.yj.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.yj.type == 2?true:false">不祥</td>
          </tr>
          <tr>
            <td>肿瘤史</td>
            <td v-show="x_step3_jws.zls.type == 1?true:false">是</td>
            <td v-show="x_step3_jws.zls.type == 0?true:false">否</td>
            <td v-show="x_step3_jws.zls.type == 2?true:false">不祥</td>
          </tr>
        </table>
        <div class="t-header">四、检验</div>
        <table v-show="x_step4_jy.xcg.date == null ? false : true">
          <tr>
            <td colspan="5">{{x_step4_jy.xcg.name}} [{{x_step4_jy.xcg.date}}]</td>
          </tr>
          <tr>
            <th></th>
            <th>检验项目</th>
            <th>检验结果</th>
            <th>单位</th>
            <th>参考范围</th>
          </tr>
          <tr v-for="item in x_step4_jy.xcg.items">
            <td>{{item.No}}</td>
            <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
              style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
            <td>
              {{item.value}}
            </td>
            <td>{{item.unit}}</td>
            <td>{{item.std_low +" - "+ item.std_high}}</td>
          </tr>
        </table>
        <table v-show="x_step4_jy.xsh.date == null ? false : true">
          <tr>
            <td colspan="5">{{x_step4_jy.xsh.name}} [{{x_step4_jy.xsh.date}}]</td>
          </tr>
          <tr>
            <th></th>
            <th>检验项目</th>
            <th>检验结果</th>
            <th>单位</th>
            <th>参考范围</th>
          </tr>
          <tr v-for="item in x_step4_jy.xsh.items">
            <td>{{item.No}}</td>
            <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
              style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
            <td>
              {{item.value}}
            </td>
            <td>{{item.unit}}</td>
            <td>{{item.std_low +" - "+ item.std_high}}</td>
          </tr>
        </table>
        <table v-show="x_step4_jy.nxsx.date == null ? false : true">
          <tr>
            <td colspan="5">{{x_step4_jy.nxsx.name}} [{{x_step4_jy.nxsx.date}}]</td>
          </tr>
          <tr>
            <th></th>
            <th>检验项目</th>
            <th>检验结果</th>
            <th>单位</th>
            <th>参考范围</th>
          </tr>
          <tr v-for="item in x_step4_jy.nxsx.items">
            <td>{{item.No}}</td>
            <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
              style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
            <td>
              {{item.value}}
            </td>
            <td>{{item.unit}}</td>
            <td>{{item.std_low +" - "+ item.std_high}}</td>
          </tr>
        </table>
        <table v-show="x_step4_jy.txbpas.date == null ? false : true">
          <tr>
            <td colspan="5">{{x_step4_jy.txbpas.name}} [{{x_step4_jy.txbpas.date}}]</td>
          </tr>
          <tr>
            <th></th>
            <th>检验项目</th>
            <th>检验结果</th>
            <th>单位</th>
            <th>参考范围</th>
          </tr>
          <tr v-for="item in x_step4_jy.txbpas.items">
            <td>{{item.No}}</td>
            <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
              style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
            <td>
              {{item.value}}
            </td>
            <td>{{item.unit}}</td>
            <td>{{item.std_low +" - "+ item.std_high}}</td>
          </tr>
        </table>
        <table v-show="x_step4_jy.cmCfydb.date == null ? false : true">
          <tr>
            <td colspan="5">{{x_step4_jy.cmCfydb.name}} [{{x_step4_jy.cmCfydb.date}}]</td>
          </tr>
          <tr>
            <th></th>
            <th>检验项目</th>
            <th>检验结果</th>
            <th>单位</th>
            <th>参考范围</th>
          </tr>
          <tr v-for="item in x_step4_jy.cmCfydb.items">
            <td>{{item.No}}</td>
            <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
              style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
            <td>
              {{item.value}}
            </td>
            <td>{{item.unit}}</td>
            <td>{{item.std_low +" - "+ item.std_high}}</td>
          </tr>
        </table>
        <table v-show="x_step4_jy.xlb.date == null ? false : true">
          <tr>
            <td colspan="5">{{x_step4_jy.xlb.name}} [{{x_step4_jy.xlb.date}}]</td>
          </tr>
          <tr>
            <th></th>
            <th>检验项目</th>
            <th>检验结果</th>
            <th>单位</th>
            <th>参考范围</th>
          </tr>
          <tr v-for="item in x_step4_jy.xlb.items">
            <td>{{item.No}}</td>
            <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
              style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
            <td>
              {{item.value}}
            </td>
            <td>{{item.unit}}</td>
            <td>{{item.std_low +" - "+ item.std_high}}</td>
          </tr>
        </table>
        <table v-show="x_step4_jy.thxhdb.date == null ? false : true">
          <tr>
            <td colspan="5">{{x_step4_jy.thxhdb.name}} [{{x_step4_jy.thxhdb.date}}]</td>
          </tr>
          <tr>
            <th></th>
            <th>检验项目</th>
            <th>检验结果</th>
            <th>单位</th>
            <th>参考范围</th>
          </tr>
          <tr v-for="item in x_step4_jy.thxhdb.items">
            <td>{{item.No}}</td>
            <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
              style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
            <td>
              {{item.value}}
            </td>
            <td>{{item.unit}}</td>
            <td>{{item.std_low +" - "+ item.std_high}}</td>
          </tr>
        </table>
        <table v-show="x_step4_jy.xxbjjsy.date == null ? false : true">
          <tr>
            <td colspan="5">{{x_step4_jy.xxbjjsy.name}} [{{x_step4_jy.xxbjjsy.date}}]</td>
          </tr>
          <tr>
            <th></th>
            <th>检验项目</th>
            <th>检验结果</th>
            <th>单位</th>
            <th>参考范围</th>
          </tr>
          <tr v-for="item in x_step4_jy.xxbjjsy.items">
            <td>{{item.No}}</td>
            <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
              style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
            <td>
              {{item.value}}
            </td>
            <td>{{item.unit}}</td>
            <td>{{item.std_low +" - "+ item.std_high}}</td>
          </tr>
        </table>
        <table v-show="x_step4_jy.dbCS.date == null ? false : true">
          <tr>
            <td colspan="5">{{x_step4_jy.dbCS.name}}  [{{x_step4_jy.dbCS.date}}]</td>
          </tr>
          <tr>
            <th></th>
            <th>检验项目</th>
            <th>检验结果</th>
            <th>单位</th>
            <th>参考范围</th>
          </tr>
          <tr v-for="item in x_step4_jy.dbCS.items">
            <td>{{item.No}}</td>
            <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
              style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
            <td>
              {{item.value}}
            </td>
            <td>{{item.unit}}</td>
            <td>{{item.std_low +" - "+ item.std_high}}</td>
          </tr>
        </table>
        <table v-show="x_step4_jy.knxmIII.date == null ? false : true">
          <tr>
            <td colspan="5">{{x_step4_jy.knxmIII.name}} [{{x_step4_jy.knxmIII.date}}]</td>
          </tr>
          <tr>
            <th></th>
            <th>检验项目</th>
            <th>检验结果</th>
            <th>单位</th>
            <th>参考范围</th>
          </tr>
          <tr v-for="item in x_step4_jy.knxmIII.items">
            <td>{{item.No}}</td>
            <td><span style="width: 100px;text-align: left;display: inline-block;">{{item.key}}</span><span
              style="width: 160px;text-align: left;display: inline-block">{{item.name}}</span></td>
            <td>
              {{item.value}}
            </td>
            <td>{{item.unit}}</td>
            <td>{{item.std_low +" - "+ item.std_high}}</td>
          </tr>
        </table>
        <div class="t-header">五、影像学检查</div>
        <table>
          <tr v-for="item in x_step5_yx">
            <td width="9%">{{item.name}}</td>
            <td width="9%">{{item.date}}</td>
            <td width="40%">描述: {{item.ms}}</td>
            <td width="40%">结论: {{item.jl}}</td>
          </tr>
        </table>
        <div class="t-header">六、治疗方案</div>
        <table>
          <tr>
            <td colspan="5">日期: {{x_step6_zlfa_date}}</td>
          </tr>
          <tr v-for="item in x_step6_zlfa">
            <td width="9%">{{item.name}}</td>
            <td>种类: {{item.type}}</td>
            <td>用量: {{item.dosage}}</td>
            <td>次数: {{item.frequency}}</td>
            <td>服用方式: {{item.usage}}</td>
          </tr>
        </table>
        <div class="t-header">七、评分量表</div>
        <table v-show="x_step7_pflb.abcd2.No1 == ''?false:true">
          <tr>
            <td colspan="4">ABCD2评分  [总分: {{x_step7_pflb.abcd2.total}}]</td>
          </tr>
          <tr>
            <th colspan="3">ABCD2评分（总分0-7）</th>
            <th>得分</th>
          </tr>
          <tr>
            <td>A</td>
            <td>年龄</td>
            <td>>60岁</td>
            <td>
              {{x_step7_pflb.abcd2.No1}}
            </td>
          </tr>
          <tr>
            <td>B</td>
            <td>血压(mmHg)</td>
            <td>>收缩压>140或舒张压>90</td>
            <td>
              {{x_step7_pflb.abcd2.No2}}
            </td>
          </tr>
          <tr>
            <td rowspan="2">C</td>
            <td rowspan="2">临床症状</td>
            <td>单侧无力</td>
            <td>
              {{x_step7_pflb.abcd2.No3}}
            </td>
          </tr>
          <tr>
            <td>不伴有无力的言语障碍</td>
            <td>
              {{x_step7_pflb.abcd2.No4}}
            </td>
          </tr>
          <tr>
            <td rowspan="2">D</td>
            <td rowspan="2">临床症状持续时间</td>
            <td>>60分钟</td>
            <td>
              {{x_step7_pflb.abcd2.No5}}
            </td>
          </tr>
          <tr>
            <td>>10~59分钟</td>
            <td>
              {{x_step7_pflb.abcd2.No6}}
            </td>
          </tr>
          <tr>
            <td>D</td>
            <td>糖尿病(mmHg)</td>
            <td>有</td>
            <td>
              {{x_step7_pflb.abcd2.No7}}
            </td>
          </tr>
        </table>
        <table v-show="x_step7_pflb.mRs.No1 == ''?false:true">
          <tr>
            <td>改良Rankin量表 [总分: {{x_step7_pflb.mRs.total}}]</td>
          </tr>
          <tr style="height: 35px;">
            <td>0分 无神经功能障碍，日常生活正常</td>
          </tr>
          <tr style="height: 35px;">
            <td>1分 极轻微神经功能障碍但不影响患者日常生活</td>
          </tr>
          <tr style="height: 35px;">
            <td>2分 轻度神经功能障碍，影响患者日常生活，但能自理</td>
          </tr>
          <tr style="height: 35px;">
            <td>3分 中度神经功能障碍，需一些帮助，但能自己行走</td>
          </tr>
          <tr style="height: 35px;">
            <td>4分 中重度神经功能障碍，没有帮助不能行走和自理，靠轮椅行走</td>
          </tr>
          <tr style="height: 35px;">
            <td>5分 卧床不起，失禁，完全不能自理，需长期护理</td>
          </tr>
          <tr style="height: 35px;">
            <td>6分 死亡</td>
          </tr>
          <tr style="height: 35px;">
            <td>
              <div style="float: left;">分数:</div>
              <div style="width: 100px;float: left;">
                {{x_step7_pflb.mRs.No1}}
              </div>
            </td>
          </tr>
        </table>
        <table v-show="x_step7_pflb.mmse.No1 == ''?false:true">
          <tr>
            <td colspan="3">精神状态简易速检表（MMSE） [总分: {{x_step7_pflb.mmse.total}}]</td>
          </tr>
          <tr>
            <td>序号</td>
            <td>项目</td>
            <td>评分</td>
          </tr>
          <tr>
            <td>1</td>
            <td>今年的年份？</td>
            <td>
              {{x_step7_pflb.mmse.No1}}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>现在是什么季节？</td>
            <td>
              {{x_step7_pflb.mmse.No2}}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>今天是几号？</td>
            <td>
              {{x_step7_pflb.mmse.No3}}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>今天是星期几？</td>
            <td>
              {{x_step7_pflb.mmse.No4}}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>现在是几月份？</td>
            <td>
              {{x_step7_pflb.mmse.No5}}
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>你现在在哪一省（市）？</td>
            <td>
              {{x_step7_pflb.mmse.No6}}
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>你现在在哪一县（区）？</td>
            <td>
              {{x_step7_pflb.mmse.No7}}
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>你现在在哪一乡（镇、街道）？</td>
            <td>
              {{x_step7_pflb.mmse.No8}}
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>你现在在哪一层楼上？</td>
            <td>
              {{x_step7_pflb.mmse.No9}}
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>这里是什么地方？</td>
            <td>
              {{x_step7_pflb.mmse.No10}}
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>复述：皮球</td>
            <td>
              {{x_step7_pflb.mmse.No11}}
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>复述：国旗</td>
            <td>
              {{x_step7_pflb.mmse.No12}}
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>复述：树木</td>
            <td>
              {{x_step7_pflb.mmse.No13}}
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>100－7是多少？</td>
            <td>
              {{x_step7_pflb.mmse.No14}}
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>辨认：铅笔</td>
            <td>
              {{x_step7_pflb.mmse.No15}}
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>复述：四十四只石狮子</td>
            <td>
              {{x_step7_pflb.mmse.No16}}
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>按图片：闭眼睛（1）</td>
            <td>
              {{x_step7_pflb.mmse.No17}}
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>用右手拿纸</td>
            <td>
              {{x_step7_pflb.mmse.No18}}
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>将纸对折</td>
            <td>
              {{x_step7_pflb.mmse.No19}}
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>放在大腿上</td>
            <td>
              {{x_step7_pflb.mmse.No20}}
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td>说一回完整句子</td>
            <td>
              {{x_step7_pflb.mmse.No21}}
            </td>
          </tr>
          <tr>
            <td>22</td>
            <td>93－7</td>
            <td>
              {{x_step7_pflb.mmse.No22}}
            </td>
          </tr>
          <tr>
            <td>23</td>
            <td>86－7</td>
            <td>
              {{x_step7_pflb.mmse.No23}}
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td>79－7</td>
            <td>
              {{x_step7_pflb.mmse.No24}}
            </td>
          </tr>
          <tr>
            <td>25</td>
            <td>72－7</td>
            <td>
              {{x_step7_pflb.mmse.No25}}
            </td>
          </tr>
          <tr>
            <td>26</td>
            <td>回忆：皮球</td>
            <td>
              {{x_step7_pflb.mmse.No26}}
            </td>
          </tr>
          <tr>
            <td>27</td>
            <td>回忆：国旗</td>
            <td>
              {{x_step7_pflb.mmse.No27}}
            </td>
          </tr>
          <tr>
            <td>28</td>
            <td>回忆：树木</td>
            <td>
              {{x_step7_pflb.mmse.No28}}
            </td>
          </tr>
          <tr>
            <td>29</td>
            <td>辨认：手表（2）</td>
            <td>
              {{x_step7_pflb.mmse.No29}}
            </td>
          </tr>
          <tr>
            <td>30</td>
            <td><img src="../../assets/pflb_p1.png" width="200"></td>
            <td>
              {{x_step7_pflb.mmse.No30}}
            </td>
          </tr>
          <tr>
            <td colspan="3">
              2、解释    评分标准：满分30分，正确为1分。文盲 ≥17分；小学≥20分；初中及以上≥24分。 <br>
                  （1）按卡片上书写的指令动作（闭眼睛）;<br>
                  （2）辨认：出示手表问是不是刚才他看过的物体
            </td>
          </tr>
        </table>
        <table v-show="x_step7_pflb.nihss.No1 == ''?false:true">
          <tr>
            <td colspan="4">美国国立卫生研究院卒中量表（NIHSS） [总分: {{x_step7_pflb.nihss.total}}]</td>
          </tr>
          <tr>
            <td></td>
            <td>检查</td>
            <td width="320">说明</td>
            <td width="120">评分</td>
          </tr>
          <tr>
            <td>1</td>
            <td>意识水平：<br>
              即使不能全面评价(如气管插管、语言障碍、气管创伤、绷带包扎等)，检查者也必须选择1个反应。只在病人对有害刺激无反应时(不是反射)，方记录3分。
            </td>
            <td>0=清醒，反应敏锐 <br>
              1=嗜睡，最小刺激能唤醒病人完成指令、回答问题或有反应<br>
              2=昏睡或反应迟钝，需要强烈反复刺激或疼痛刺激才能有非固定模式的反应<br>
              3=仅有反射活动或自发反应，或完全没反应、软瘫、无反应
            </td>
            <td>
              {{x_step7_pflb.nihss.No1}}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              意识水平提问：(仅对最初回答评分，检查者不要提示)询问月份，年龄。回答必须正确，不能大致正常。失语和昏迷者不能理解问题记2分，病人因气管插管、气管创伤、严重构音障碍、语言障碍或其他任何原因不能说话者(非失语所致)记1分。
            </td>
            <td>0=都正确 <br>
              1=正确回答一个 <br>
              2=两个都不正确或不能说
            </td>
            <td>
              {{x_step7_pflb.nihss.No2}}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              意识水平指令：<br>
              要求睁眼、闭眼：非瘫痪手握拳、张手。若双手不能检查，用另一个指令(伸舌)。仅对最初的反应评分，有明确努力但未完成也给评分。若对指令无反应，用动作示意，然后记录评分。对创伤、截肢或其他生理缺陷者，应给予一个适宜的指令。
            </td>
            <td>
              0=都正确 <br>
              1=正确完成一个 <br>
              2=都不正确
            </td>
            <td>
              {{x_step7_pflb.nihss.No3}}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              凝视：<br>
              只测试水平眼球运动。对自主或反射性(眼头)眼球运动记分。若眼球侧视能被自主或反射性活动纠正，记录1分。若为孤立性外周神经麻痹(Ⅲ、Ⅳ、V)，记1分。住失语病人中，凝视是可测试的。对眼球创伤、绷带包扎、盲人或有视觉或视野疾病的患者，由检查者选择一种反射性运动来测试。建立与眼球的联系，然后从一侧向另一侧运动，偶尔能发现凝视麻痹。
            </td>
            <td>
              0=正常 <br>
              1=部分凝视麻痹(单眼或双眼凝视异常，但无被动凝视或完全凝视麻痹) <br>
              2=被动凝视或完全凝视麻痹(不能被眼头动作克服)
            </td>
            <td>
              {{x_step7_pflb.nihss.No4}}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              视野用手指数或视威胁方法检测上、下象限视野。如果病人能看到侧面的手指，记录正常。如果单眼盲或眼球摘除，检查另一只眼。明确的非对称盲(包括象限盲)，记1分。病人全盲(任何原因)记3分，同时刺激双眼。若人濒临死亡记1分，结果用于回答问题11。
            </td>
            <td>
              0=无视野缺失 <br>
              1=部分偏盲 <br>
              2=完全偏盲 <br>
              3=双侧偏盲(全盲，包括皮质盲)
            </td>
            <td>
              {{x_step7_pflb.nihss.No5}}
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              面瘫：<br>
              言语指令或动作示意，要求病人示齿、扬眉和闭眼。对反应差或不能理解的病人，根据有害刺激时表情的对称情况评分。有面部创伤绷带、经口气管插管、胶布或其他物理障碍影响面部检查时，应尽可能移至可评估的状态。
            </td>
            <td>
              0=正常<br>
              1=最小(鼻唇沟变平、微笑时不对称)<br>
              2=部分(下面部完全或几乎完全瘫痪，中枢性瘫)<br>
              3=完全(单或双侧瘫痪，上下面部缺乏运动，周围性瘫)
            </td>
            <td>
              {{x_step7_pflb.nihss.No6}}
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              上肢运动<br>
              上肢伸展：坐位90°，位卧45°。要求坚持10秒：对失语的病人用语言或动作鼓励，不用有害刺激。评定者可以抬起病人的上肢到要求的位置，鼓励病人坚持。仅评定患侧。
            </td>
            <td>
              0=上肢于要求位置坚持10秒，无下落<br>
              1=上肢能抬起，但不能维持10秒，下落时不撞击床或其他支持物<br>
              2：能对抗一些重力，但上肢不能达到或维持坐位90°或位卧45°，较快下落到床上<br>
              3=不能抗重力，上肢快速下落<br>
              4=二无运动<br>
              9=截肢或关节融合，解释：<br>
              5a左上肢<br>
              5b右上肢
            </td>
            <td>
              {{x_step7_pflb.nihss.No7}}
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              下肢运动<br>
              下肢卧位抬高30°，坚持5秒：对失语的病人用语言或动作鼓励，不用有害刺激。评定者可以抬起病人的上肢到要求的位置，鼓励病人坚持。仅评定患侧。
            </td>
            <td>
              0=于要求位置坚持5秒，不下落<br>
              1=在5秒末下落，不撞击床<br>
              2=5秒内较快厂落到床上，但可抗重力<br>
              3=快速落F，不能抗重力<br>
              4=无运动<br>
              9=截肢或关廿融合，解释：<br>
              6a左上肢<br>
              6b右上肢
            </td>
            <td>
              {{x_step7_pflb.nihss.No8}}
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              共济失调：<br>目的是发现双侧小脑病变的迹象。实验时双眼睁开，若有视觉缺损，应确保实验在无缺损视野内进行。双侧指鼻、跟膝胫试验，共济失调与无力明显不呈比例时记分。如病人不能理解或肢体瘫痪不记分。盲人用伸展的上肢摸鼻。若为截肢或关节融合，记录9分，并解释清楚。
            </td>
            <td>
              0=没有共济失调<br>
              1=一侧肢体有<br>
              2=两侧肢体均有如有共济失调：左上肢1=是2=否<br>
              9=截肢或关节融合，解释：左上肢1=是2=否<br>
              9=截肢或关节融合，解释：左下肢1=是2=否<br>
              9=截肢或关节融合，解释：右下肢1=是2=否<br>
              9=截肢或关节融合，解释：右上肢1=是2=否
            </td>
            <td>
              {{x_step7_pflb.nihss.No9}}
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              感觉：<br>
              用针检查。测试时，用针尖刺激和撤除刺激观察昏迷或失语病人的感觉和表情。只对与卒中有关的感觉缺失评分。偏身感觉丧失者需要精确检查，应测试身体多处部位：上肢(不包括手)、下肢、躯千、面部。严重或完全的感觉缺尖，记2分。昏迷或失语者可记1或0分。脑干卒中双侧感觉缺失记2分。无反应及四肢瘫痪者记2分。昏迷病人(1a=3)记2分。
            </td>
            <td>
              0=正常，没有感觉缺失<br>
              1=轻到中度，患侧针刺感不明显或为钝性或仅有触觉<br>
              2=严重到完全感觉缺失，面、上肢、下肢无触觉
            </td>
            <td>
              {{x_step7_pflb.nihss.No10}}
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              语言<br>
              命名、阅渎测试。要求病人叫出物品名称、读所列的句子。从病人的反应以及一般神经系统检查中对指令的反应判断理解能力。若视觉缺损干扰测试，可让病人识别放在手上的物品，重复和发音。气管插管者手写回答。昏迷病人(1a=3)，3分，给恍惚或不合作者选择一个记分，但3分仅给哑人或一点都不执行指令的人。
            </td>
            <td>
              0=正常，无失语<br>
              1=轻到中度：流利程度和理解能力有一些缺损，但表达无明显受限。<br>
              2=严重失语，交流是通过病人破碎的语言表达，听者须推理、向问、猜测，能交换的信息范围有限，检查者感交流困难。<br>
              3=哑或完全失语，不能讲或不能理解
            </td>
            <td>
              {{x_step7_pflb.nihss.No11}}
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              构音障碍：<br>
              不要告诉病人为什么做测试。
              读或重复附表上的单词。若病人有严重的失语，评估自发语言时发音的清晰度。若病人气管插管或其他物理障碍不能讲话，记9分。同时注明原因。
            </td>
            <td>
              0=正常<br>
              1=轻到中度，至少有一些发音不清，虽有困难，但能被理解<br>
              2=言语不清，不能被理解<br>
              9=气管插管或其他物理障碍，解释：
            </td>
            <td>
              {{x_step7_pflb.nihss.No12}}
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>
              忽视症：<br>若病人严重视觉缺失影响双侧视觉的同时检查，皮肤刺激正常，则记分为正常。若病人失语，但确实表现为关注双侧，记分上常。
              通过检验病人对左石侧同时发生的皮肤感觉和视觉刺激的识别能力来判断病人是否有忽视。把标准图显示给病人，要求他米描述。医生鼓励病人仔细看图，识别图中左右侧的特征。如果病人不能识别一侧图的部分内容，则定为异常。然后，医生请病人闭眼，分别测上或下肢针刺觉来检查双侧皮肤感觉。若病人有一侧感觉忽略则为异常
            </td>
            <td>
              0=没有忽视症<br>
              1=视、触、听、空间觉或个人的忽视：或对任何一种感觉的双侧同时刺激消失<br>
              2=严重的偏身忽视：超过一种形式的偏身忽视；不认识自己的手，只对一侧空间定位
            </td>
            <td>
              {{x_step7_pflb.nihss.No13}}
            </td>
          </tr>
        </table>
      </div>
      <el-row class="view-boot">
        <el-col :span="16">&nbsp;</el-col>
        <el-col :span="4" style="float: right">
          <el-button class="m-el-button" type="primary" @click="stepTo(10)">保存</el-button>
        </el-col>
        <el-col :span="4">
          <el-button class="m-el-button"  type="primary" @click="stepTo(9)">返回</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'input-step10',
    data () {
      return {
        x_step1_jbxx: {},
        x_step2_bs: {},
        x_step3_jws: {
          gxy: {},
          tnb: {},
          gxb: {},
          gzxz: {},
          fc: {},
          tia: {},
          ng: {},
          jzb: {},
          xy: {},
          yj: {},
          zls: {}
        },
        x_step4_jy: {
          xcg: {
            items: [],
            name: "",
            date: null
          },
          xsh: {
            items: [],
            name: "",
            date: null
          },
          nxsx: {
            items: [],
            name: "",
            date: null
          },
          txbpas: {
            items: [],
            name: "",
            date: null
          },
          cmCfydb: {
            items: [],
            name: "",
            date: null
          },
          xlb: {
            items: [],
            name: "",
            date: null
          },
          dbCS: {
            items: [],
            name: "",
            date: null
          },
          thxhdb: {
            items: [],
            name: "",
            date: null
          },
          xxbjjsy: {
            items: [],
            name: "",
            date: null
          },
          knxmIII: {
            items: [],
            name: "",
            date: null
          }
        },
        x_step5_yx: [],
        x_step6_zlfa: [],
        x_step6_zlfa_date:"",
        x_step7_pflb: {
          abcd2: {},
          nihss: {},
          mRs: {},
          mmse: {}
        }
      }
    },
    mounted(){
      this.getStep1()
      this.getStep2()
      this.getStep3()
      this.getStep4()
      this.getStep5()
      this.getStep6()
      this.getStep7()
    },
    methods: {
      getStep1(){
        this.x_step1_jbxx = JSON.parse(window.localStorage.getItem('x_step1_jbxx'))
        let base = JSON.parse(window.sessionStorage.getItem('x_step1_jbxx_base'))
        for (let i = 0; i < base.jm.length; i++) {
          if (this.x_step1_jbxx.sick_type.sick == base.jm[i].key) {
            this.x_step1_jbxx.sick_type.sick = '静脉: ' + base.jm[i].name
          }
        }
        for (let i = 0; i < base.dm.length; i++) {
          if (this.x_step1_jbxx.sick_type.sick == base.dm[i].key) {
            this.x_step1_jbxx.sick_type.sick = '动脉: ' + base.dm[i].name
          }
        }
      },
      getStep2(){
        this.x_step2_bs = JSON.parse(window.localStorage.getItem('x_step2_bs'))
      },
      getStep3(){
        this.x_step3_jws = JSON.parse(window.localStorage.getItem('x_step3_jws'))
      },
      getStep4(){
        this.x_step4_jy = JSON.parse(window.localStorage.getItem('x_step4_jy'))
      },
      getStep5(){
        let temp = JSON.parse(window.localStorage.getItem('x_step5_yx'))
        let checkedList = JSON.parse(window.localStorage.getItem('x_step5_yx_checkedList'))
        for (let key in temp) {
          for (let i = 0; i < checkedList.length; i++) {
            if (key == checkedList[i]) {
              this.x_step5_yx.push(temp[key])
            }
          }
        }
      },
      getStep6(){
        let temp = JSON.parse(window.localStorage.getItem('x_step6_zlfa'))
        let checkedList = JSON.parse(window.localStorage.getItem('x_step6_zlfa_checkedList'))
        let dosageList = JSON.parse(window.localStorage.getItem('x_step6_zlfa_dosageList'))
        let frequencyList = JSON.parse(window.localStorage.getItem('x_step6_zlfa_frequencyList'))
        let usageList = JSON.parse(window.localStorage.getItem('x_step6_zlfa_usageList'))
        this.x_step6_zlfa_date = temp.date
        for (let key in temp) {
          if (key != 'date'){
            for (let i = 0; i < checkedList.length; i++) {
              if (key == checkedList[i]) {
                for (let d = 0; d < dosageList.length; d++) {
                  if (temp[key].dosage == dosageList[d].id) {
                    temp[key].dosage = dosageList[d].name
                  }
                }
                for (let f = 0; f < frequencyList.length; f++) {
                  if (temp[key].frequency == frequencyList[f].id) {
                    temp[key].frequency = frequencyList[f].name
                  }
                }
                for (let u = 0; u < usageList.length; u++) {
                  if (temp[key].usage == usageList[u].id) {
                    temp[key].usage = usageList[u].name
                  }
                }
                for (let t = 0; t < temp[key].types.length; t++) {
                  if (temp[key].type == temp[key].types[t].key) {
                    temp[key].type = temp[key].types[t].name
                  }
                }
                this.x_step6_zlfa.push(temp[key])
              }
            }
          }
        }

      },
      getStep7(){
        let temp = JSON.parse(window.localStorage.getItem('x_step7_pflb'))
        this.x_step7_pflb.abcd2 = temp.abcd2
        this.x_step7_pflb.nihss = temp.nihss
        this.x_step7_pflb.mRs = temp.mRs
        this.x_step7_pflb.mmse = temp.mmse
      }
    }
  }
</script>

<style scoped>
  @import "../../style/info_input.css";

  * {
    font-family: "Microsoft YaHei", "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    color: #00A2CA;
    text-align: center;
    margin-bottom: 10px;
  }

  .table-box td, .table-box th {
    border: 1px solid #ddd;
  }

  .t-header {
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    background: #eee;
    padding: 0 10px;
    color: #555;
  }
  .view-boot{
    margin-top: 10px;
  }
  .view-boot .m-el-button{
    float: right;
    width: 120px;
  }
</style>
