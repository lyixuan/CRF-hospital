<template>
  <div class="setting-priviledge">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/setting_priviledge' }">设置</el-breadcrumb-item>
      <el-breadcrumb-item>账号管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div style="width: 100%;height: 100%;">
        <div class="condition">
          <div class="bg-blue">账号管理</div>
          <div class="condition0">
            <div class="accontMg tt">
              <span>登录账号</span>
              <span>姓名</span>
              <span>备注</span>
              <span>操作</span>
              <span>操作</span>
            </div>
            <div class="accontMg" v-for="item in accounts" :keys="item.user_code">
              <span>{{item.user_code}}</span>
              <span>{{item.user_des}}</span>
              <span>{{item.status==0?'停用':'开启'}}</span>
              <span class="set" @click="openAccountEdit(item)">编辑</span>
              <span class="set" @click="accountResetPWD(item)">重置密码</span>
            </div>
            <div class="addnew" @click="openAccountAdd()">
              + 新增账号
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--编辑dialog-->
    <el-dialog class="actEdit" title="编辑" :visible.sync="actEditDialog">
      <el-form :model="actEditForm">
        <el-form-item label="登录账号" :label-width="formLabelWidth">
          <el-input v-model="actEditForm.user_code" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="actEditForm.user_des"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select v-model="actEditForm.status" placeholder="请选择状态">
            <el-option label="开启" value="1"></el-option>
            <el-option label="停用" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="actEditDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveAccountEdit()">确 定</el-button>
      </div>
    </el-dialog>

    <!--新增dialog-->
    <el-dialog class="actEdit" title="新建账号" :visible.sync="actAddDialog">
      <el-form :model="actAddForm">
        <el-form-item label="登录账号" :label-width="formLabelWidth" required>
          <el-input v-model="actAddForm.user_code"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="actAddForm.user_des"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select v-model="actAddForm.status" placeholder="请选择状态">
            <el-option label="开启" value="1"></el-option>
            <el-option label="停用" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div style="font-size: 12px;text-align: center">新增用户初始密码均为:123456。管理员分配账号后，请用户及时更改密码。</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="actAddDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveAccountAdd()">确 定</el-button>
      </div>
    </el-dialog>

    <!--重置密码dialog-->
    <el-dialog class="actEdit" title="重置密码" :visible.sync="actResetDialog">
      <div style="text-align: left;margin-left: 40px;">密码重置后将设置为初始密码123456。确定要为 {{resetName}} 重置密码吗？</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="actResetDialog = false">取 消</el-button>
        <el-button type="primary" @click="saveReset()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: 'setting-priviledge',
    data () {
      return {
        accounts: [],
        formLabelWidth: '120px',
        actEditDialog: false,
        actEditForm: {
          user_des: '',
          user_code: '',
          status: ''
        },
        actAddDialog: false,
        actAddForm: {
          user_des: '',
          user_code: '',
          status: '1'
        },
        actResetDialog: false,
        resetId: '',
        resetName: '',
      }
    },
    mounted () {
      this.getAccounts();
    },

    methods: {
      getAccounts() {
        this.$resource(PATH_PRIVILEGE + 'accounts').get().then((response) => {
          if (response.body.code == 200) {
            this.accounts = response.body.data
            for (var i = 0; i < this.accounts.length; i++) {
              if (this.accounts[i].user_code == 'admin') {
                this.accounts.splice(i, 1)
              }
            }
            this.getUserRoles(this.accounts[0])
          } else {
            this.alertMsg("warning", '获取账号信息有误')
          }
        })
      },
      openAccountEdit(item){
        this.actEditForm = {
          user_des: item.user_des,
          user_code: item.user_code,
          status: item.status
        };
        this.actEditDialog = true
      },
      saveAccountEdit(){
        let _this = this;
        let param = this.actEditForm
        this.$resource(PATH_PRIVILEGE + 'edit_accounts').save({}, param).then((response) => {
          if (response.body.code == 200) {
            _this.alertMsg("success", '修改成功');
            _this.actEditDialog = false;
            _this.getAccounts()

          } else {
            _this.alertMsg("error", response.body.msg ? response.body.msg : '服务器端错误')
          }
        }, (response) => {
          console.log(response.body)
        })
      },
      openAccountAdd(){
        this.actAddForm = {
          user_des: '',
          user_code: '',
          status: '1'
        };
        this.actAddDialog = true
      },
      saveAccountAdd(){
        if (!this.actAddForm.user_code) {
          this.alertMsg("warning", '请填写登录账号')
          return
        }
        let param = this.actAddForm;
        let _this = this;
        this.$resource(PATH_PRIVILEGE + 'add_accounts').save({}, param).then((response) => {
          if (response.body.code == 200) {
            _this.alertMsg("success", '添加成功');
            _this.actAddDialog = false;
            _this.getAccounts()
          } else {
            _this.alertMsg("error", response.body.msg ? response.body.msg : '服务器端错误')
          }
        }, (response) => {
          _this.alertMsg("error", response.body.msg ? response.body.msg : '服务器端错误')
        })
      },
      accountResetPWD(item){
        this.resetName = item.user_des;
        this.resetId = item.user_code;
        this.actResetDialog = true
      },
      saveReset(){
        this.$resource(PATH_PRIVILEGE + 'reset_pwd').get({user_code: this.resetId}).then((response) => {
          if (response.body.code == 200) {
            this.alertMsg("success", '重置成功');
            this.actResetDialog = false
          } else {
            this.alertMsg("warning", '重置失败')
          }
        })
      },
    }
  }
</script>

<style scoped>
  @import "../../style/stata.css";
  * {
    box-sizing: border-box;
  }

  .condition {
    margin-top: 5px;
    background: #fff;
    padding: 5px;
    overflow: hidden;
    min-height: 500px;
  }

  .bg-blue {
    background: #E7F4FA;
    color: #2195CB;
    height: 25px;
    line-height: 25px;
    padding-left: 5px;
    width: 100%;
  }

  .condition0 {
    width: 100%;
    padding: 10px;

  }

  .accontMg {
    overflow: hidden;
    height: 30px;
    line-height: 30px;
  }

  .tt {
    font-weight: bold;
  }

  .set {
    color: #1c8de0;
    cursor: pointer;
  }

  .set:hover {
    color: #000080;
  }

  .addnew {
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #1c8de0;
    color: #1c8de0;
    cursor: pointer;
  }

  .addnew:hover {
    background: #1c8de0;
    color: #fff;
  }

  .accontMg > span {
    display: inline-block;
    width: 19%;

  }

  .itable span:nth-child(2){
    padding: 0 5px;
  }

  .itable:nth-child(n+4):hover span:nth-child(2){
    background: #efefef;
  }

  .itableactive  span:nth-child(2){
    background: #E7F4FA !important;
  }

  .itable > span {
    display: inline-block;
    width: 25%;
    margin-left: 1%;
    cursor: pointer;
  }

  .itable > span:first-child {
    width: 20%;
  }

  .itable > span:nth-child(2) {
    width: 45%;
  }

  .itable > span > i {
    margin-right: 15px;
    color: #1c8de0;
    cursor: pointer;
  }

  .itable > span > i:hover {
    color: #0000ff;
  }

  .left_card p {
    height: 30px;
    line-height: 30px;
    background: #E7F4FA;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .left_card p:hover {
    background: #42A4D3;
    color: #fff;
  }


  p.active {
    background: #42A4D3;
    color: #fff;
  }

</style>
