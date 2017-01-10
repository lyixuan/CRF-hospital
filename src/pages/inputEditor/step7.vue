<template>
  <div class="input-step7">
    <steps :activee="6"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">评分量表</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="saveAndStepTo(6)" size="mini">上一步</el-button>
          <el-button type="primary" @click="saveAndStepTo(8)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <div class="tabs">
        <span v-for="item in tabList" :class="{'t-active': item.key == checkedTab ?true:false}"
              @click="changeTab(item.key)">
           {{item.name}}
          <i class="el-icon-check" v-show="pflbForm[item.key].total != ''"
             :class="{ green: item.key == checkedTab?false:true }"></i>
        </span>
      </div>
      <div style="clear: both;"></div>
      <div class="tab-content">
        <div class="table-box" v-show="'abcd2' == checkedTab">
          <h1>ABCD2评分量表（TIA早期卒中风险预测工具)</h1>
          <span class="span3"><el-button icon="delete" size="mini" @click="clearTable('abcd2')">清空</el-button></span>
          <span class="span2">总分: {{abcd2Total}}</span>
          <table>
            <tr>
              <th colspan="3">ABCD2评分（总分0-7）</th>
              <th>得分</th>
            </tr>
            <tr>
              <td>A</td>
              <td>年龄</td>
              <td>>60岁</td>
              <td>
                <el-input v-model="pflbForm.abcd2.No1"></el-input>
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>血压(mmHg)</td>
              <td>>收缩压>140或舒张压>90</td>
              <td>
                <el-input v-model="pflbForm.abcd2.No2"></el-input>
              </td>
            </tr>
            <tr>
              <td rowspan="2">C</td>
              <td rowspan="2">临床症状</td>
              <td>单侧无力</td>
              <td>
                <el-input v-model="pflbForm.abcd2.No3"></el-input>
              </td>
            </tr>
            <tr>
              <td>不伴有无力的言语障碍</td>
              <td>
                <el-input v-model="pflbForm.abcd2.No4"></el-input>
              </td>
            </tr>
            <tr>
              <td rowspan="2">D</td>
              <td rowspan="2">临床症状持续时间</td>
              <td>>60分钟</td>
              <td>
                <el-input v-model="pflbForm.abcd2.No5"></el-input>
              </td>
            </tr>
            <tr>
              <td>>10~59分钟</td>
              <td>
                <el-input v-model="pflbForm.abcd2.No6"></el-input>
              </td>
            </tr>
            <tr>
              <td>D</td>
              <td>糖尿病(mmHg)</td>
              <td>有</td>
              <td>
                <el-input v-model="pflbForm.abcd2.No7"></el-input>
              </td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-show="'mRs' == checkedTab">
          <h1>改良Rankin量表</h1>
          <span class="span3"><el-button icon="delete" size="mini" @click="clearTable('mRs')">清空</el-button></span>
          <span class="span2">总分: {{mRsTotal}}</span>
          <table>
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
                  <el-input v-model="pflbForm.mRs.No1"></el-input>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <div class="table-box" v-show="'mmse' == checkedTab">
          <h1>精神状态简易速检表（MMSE）</h1>
          <span class="span3"><el-button icon="delete" size="mini" @click="clearTable('mmse')">清空</el-button></span>
          <span class="span2">总分: {{mmseTotal}}</span>
          <table>
            <tr>
              <td>序号</td>
              <td>项目</td>
              <td>评分</td>
            </tr>
            <tr>
              <td>1</td>
              <td>今年的年份？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No1"></el-input>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>现在是什么季节？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No2"></el-input>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>今天是几号？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No3"></el-input>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>今天是星期几？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No4"></el-input>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>现在是几月份？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No5"></el-input>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>你现在在哪一省（市）？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No6"></el-input>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>你现在在哪一县（区）？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No7"></el-input>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>你现在在哪一乡（镇、街道）？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No8"></el-input>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>你现在在哪一层楼上？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No9"></el-input>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>这里是什么地方？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No10"></el-input>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>复述：皮球</td>
              <td>
                <el-input v-model="pflbForm.mmse.No11"></el-input>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>复述：国旗</td>
              <td>
                <el-input v-model="pflbForm.mmse.No12"></el-input>
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>复述：树木</td>
              <td>
                <el-input v-model="pflbForm.mmse.No13"></el-input>
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>100－7是多少？</td>
              <td>
                <el-input v-model="pflbForm.mmse.No14"></el-input>
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>辨认：铅笔</td>
              <td>
                <el-input v-model="pflbForm.mmse.No15"></el-input>
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>复述：四十四只石狮子</td>
              <td>
                <el-input v-model="pflbForm.mmse.No16"></el-input>
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>按图片：闭眼睛（1）</td>
              <td>
                <el-input v-model="pflbForm.mmse.No17"></el-input>
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>用右手拿纸</td>
              <td>
                <el-input v-model="pflbForm.mmse.No18"></el-input>
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>将纸对折</td>
              <td>
                <el-input v-model="pflbForm.mmse.No19"></el-input>
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>放在大腿上</td>
              <td>
                <el-input v-model="pflbForm.mmse.No20"></el-input>
              </td>
            </tr>
            <tr>
              <td>21</td>
              <td>说一回完整句子</td>
              <td>
                <el-input v-model="pflbForm.mmse.No21"></el-input>
              </td>
            </tr>
            <tr>
              <td>22</td>
              <td>93－7</td>
              <td>
                <el-input v-model="pflbForm.mmse.No22"></el-input>
              </td>
            </tr>
            <tr>
              <td>23</td>
              <td>86－7</td>
              <td>
                <el-input v-model="pflbForm.mmse.No23"></el-input>
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>79－7</td>
              <td>
                <el-input v-model="pflbForm.mmse.No24"></el-input>
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>72－7</td>
              <td>
                <el-input v-model="pflbForm.mmse.No25"></el-input>
              </td>
            </tr>
            <tr>
              <td>26</td>
              <td>回忆：皮球</td>
              <td>
                <el-input v-model="pflbForm.mmse.No26"></el-input>
              </td>
            </tr>
            <tr>
              <td>27</td>
              <td>回忆：国旗</td>
              <td>
                <el-input v-model="pflbForm.mmse.No27"></el-input>
              </td>
            </tr>
            <tr>
              <td>28</td>
              <td>回忆：树木</td>
              <td>
                <el-input v-model="pflbForm.mmse.No28"></el-input>
              </td>
            </tr>
            <tr>
              <td>29</td>
              <td>辨认：手表（2）</td>
              <td>
                <el-input v-model="pflbForm.mmse.No29"></el-input>
              </td>
            </tr>
            <tr>
              <td>30</td>
              <td><img src="../../assets/pflb_p1.png" width="200"></td>
              <td>
                <el-input v-model="pflbForm.mmse.No30"></el-input>
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
        </div>

        <div class="table-box" v-show="'nihss' == checkedTab">
          <h1>美国国立卫生研究院卒中量表（NIHSS）</h1>
          <span class="span3"><el-button icon="delete" size="mini" @click="clearTable('nihss')">清空</el-button></span>
          <span class="span2">总分: {{nihssTotal}}</span>
          <table>
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
                <el-input v-model="pflbForm.nihss.No1"></el-input>
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
                <el-input v-model="pflbForm.nihss.No2"></el-input>
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
                <el-input v-model="pflbForm.nihss.No3"></el-input>
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
                <el-input v-model="pflbForm.nihss.No4"></el-input>
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
                <el-input v-model="pflbForm.nihss.No5"></el-input>
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
                <el-input v-model="pflbForm.nihss.No6"></el-input>
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
                <el-input v-model="pflbForm.nihss.No7"></el-input>
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
                <el-input v-model="pflbForm.nihss.No8"></el-input>
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
                <el-input v-model="pflbForm.nihss.No9"></el-input>
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
                <el-input v-model="pflbForm.nihss.No10"></el-input>
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
                <el-input v-model="pflbForm.nihss.No11"></el-input>
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
                <el-input v-model="pflbForm.nihss.No12"></el-input>
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
                <el-input v-model="pflbForm.nihss.No13"></el-input>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step7',
    components: {
      Steps
    },
    data () {
      return {
        pflbForm: {
          abcd2: {},
          nihss: {},
          mRs: {},
          mmse: {}
        },
        tabList: [
          {key: 'abcd2', name: 'ABCD2 评分'},
          {key: 'nihss', name: 'NIHSS 评分'},
          {key: 'mRs', name: 'mRs 评分'},
          {key: 'mmse', name: 'MMSE 评分'}
        ],
        checkedTab: "abcd2"
      }
    },
    mounted(){
      let info,info_tabList;
      try {
        info = JSON.parse(window.localStorage.getItem('x_step7_pflb'))
        info_tabList = JSON.parse(window.localStorage.getItem('x_step7_pflb_tabList'))
      } catch (err) {
        localStorage.removeItem("x_step7_pflb");
        localStorage.removeItem("x_step7_pflb_tabList");
      }
      if (info) {
        this.writeBack(info, info_tabList)
      } else {
        this.getPflb()
      }
    },
    methods: {
      writeBack (info, info_tabList) {
        this.pflbForm = JSON.parse(JSON.stringify(info));
        this.tabList = JSON.parse(JSON.stringify(info_tabList));
      },
      storage() {
        window.localStorage.setItem('x_step7_pflb', JSON.stringify(this.pflbForm))
        window.localStorage.setItem('x_step7_pflb_tabList', JSON.stringify(this.tabList))
      },
      saveAndStepTo(num) {
        for (let key in this.pflbForm) {
          if (!this.validate(key)) {
            return
          }
        }
        this.storage()
        this.alertMsg("success", '"评分量表" 所填内容已暂存')
        this.stepTo(num)
      },
      changeTab(tab) {
        if (this.validate(this.checkedTab)) {
          // 校验通过才可切换
          this.checkedTab = tab
        }
      },
      clearTable(tab) {
        for (let key in  this.pflbForm[tab]) {
          this.pflbForm[tab][key] = ''
        }
      },
      validate(pTab) {
        // 校验,信息要么全填,要么全不填,emptyFlag和fullFlag如果都为1了,说明有空也有填的,校验不通过
        let emptyFlag = 0, fullFlag = 0;
        for (let key in this.pflbForm[pTab]) {
          if (key != 'total') {
            var reg = /^\s*|\s*$/g; // 去空格
            let temp = this.pflbForm[pTab][key]
            temp = String(temp).replace(reg, "")
            if (temp == '') {
              emptyFlag = 1;
            } else {
              fullFlag = 1;
            }
          }
        }
        if (emptyFlag == 1 && fullFlag == 1) {
          this.alertMsg("warning", '信息校验有误')
          return false
        }
        return true
      },
      computer(obj){
        let total = 0;
        for (let key in obj) {
          let exp = /^[0-9]+$/; // 数字
          var reg = /^\s*|\s*$/g; // 去空格

          obj[key] = String(obj[key]).replace(reg, "")

          if(key != 'total') {
            if (exp.test(obj[key])) {
              total += parseInt(obj[key])
            } else if (!exp.test(obj[key]) && obj[key] !='') {
              this.alertMsg("warning", '分数应为数字')
            }
          }
        }
        return total
      },
      getPflb () {
        this.pflbForm.abcd2 = {
          No1: '',
          No2: '',
          No3: '',
          No4: '',
          No5: '',
          No6: '',
          No7: '',
          total: ''
        };
        this.pflbForm.mRs = {
          No1: '',
          total: ''
        }
        this.pflbForm.nihss = {
          No1: '',
          No2: '',
          No3: '',
          No4: '',
          No5: '',
          No6: '',
          No7: '',
          No8: '',
          No9: '',
          No10: '',
          No11: '',
          No12: '',
          No13: '',
          total: ''
        }
        this.pflbForm.mmse = {
          No1: '',
          No2: '',
          No3: '',
          No4: '',
          No5: '',
          No6: '',
          No7: '',
          No8: '',
          No9: '',
          No10: '',
          No11: '',
          No12: '',
          No13: '',
          No14: '',
          No15: '',
          No16: '',
          No17: '',
          No18: '',
          No19: '',
          No20: '',
          No21: '',
          No22: '',
          No23: '',
          No24: '',
          No25: '',
          No26: '',
          No27: '',
          No28: '',
          No29: '',
          No30: '',
          total: ''
        }
      }
    },
    computed: {
      abcd2Total: function () {
        this.pflbForm.abcd2.total = this.computer(this.pflbForm.abcd2)
        return this.pflbForm.abcd2.total
      },
      nihssTotal: function () {
        this.pflbForm.nihss.total = this.computer(this.pflbForm.nihss)
        return this.pflbForm.nihss.total
      },
      mRsTotal: function () {
        this.pflbForm.mRs.total = this.computer(this.pflbForm.mRs)
        return this.pflbForm.mRs.total
      },
      mmseTotal: function () {
        this.pflbForm.mmse.total = this.computer(this.pflbForm.mmse)
        return this.pflbForm.mmse.total
      }
    }
  }
</script>

<style scoped>
  @import "../../style/info_input.css";

  .x-content {
    border: none;
    padding: 0;
  }

  .table-box > h1 {
    width: 100%;
    text-align: center;
    font-size: 16px;
  }

  .table-box > .span2 {
    width: 100px;
    float: right;
    text-align: left;
    font-size: 16px;
  }

  .table-box > .span3 {
    width: 60px;
    float: left;
    margin-bottom: 8px;
  }

  .green {
    color: #13CE66;
  }
</style>
