<template>
  <div class="input-step8">
    <steps :activee="7"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">随访</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="saveAndStepTo(7)" size="mini">上一步</el-button>
          <el-button type="primary" @click="saveAndStepTo(9)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="x-content">
      <el-form label-width="90px">
        <el-row class="line-out" v-for="(item, index) in sfForm" :key="index">
          <el-col :span="3" class="add-btn">
            <el-button type="info" @click="addType">+</el-button>
            <el-button type="danger" @click="delType(index)" v-if="index != 0">-</el-button>
          </el-col>
          <el-col :span="7">
            <el-form-item label="随访日期:">
              <el-date-picker v-model="item.date" align="right" type="date"
                              placeholder="选择日期" :editable="false" :clearable="false"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="随访内容:">
              <el-input type="textarea"  :autosize="{ minRows: 2, maxRows: 4}" v-model="item.content" placeholder="输入内容"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step11',
    components: {
      Steps
    },
    data () {
      return {
        sfForm: [{
          date: '',
          content: '',
        }]
      }
    },
    created(){
      let info;
      try {
        info = JSON.parse(window.sessionStorage.getItem('x_step8_sf'))
      } catch (err) {
        sessionStorage.removeItem("x_step8_sf");
      }
      if (info) {
        this.writeBack(info)
      }
    },
    methods: {
      writeBack (info) {
        this.sfForm = info;
      },
      saveAndStepTo(num) {
        this.storage()
        this.alertMsg("success", '"随访信息" 所填内容已暂存')
        this.stepTo(num)
      },
      storage() {
        for (let i = this.sfForm.length-1;i >=0;i--) {
          this.sfForm[i].date = this.sfForm[i].date?this.formatDate(new Date( this.sfForm[i].date)):'';
          if(this.sfForm[i].date == '') {
            this.sfForm.splice(i,1)
          }
        }
        window.sessionStorage.setItem('x_step8_sf', JSON.stringify(this.sfForm))
      },
      addType(m, k){
        this.sfForm.push({
          date: '',
          content: '',
        })
      },
      delType(i){
        this.sfForm.splice(i,1);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../style/record.css";

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
