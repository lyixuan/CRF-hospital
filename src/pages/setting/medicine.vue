<template>
  <div class="option-medicine-input">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_basic' }">设置</el-breadcrumb-item>
      <el-breadcrumb-item>药品录入</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="inner">
        <div class="bar">治疗方案和药品管理</div>
        <div class="btn">
          <el-button
            size="small"
            @click="addTab">
            + 新增治疗方案
          </el-button>
        </div>
        <el-tabs v-model="editableTabsValue" type="border-card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.key"
            :label="item.name"
            :name="item.key">
            <el-tag
              :key="tag.key"
              v-for="tag in item.content"
              :closable="true"
              :close-transition="false"
              @close="handleClose(item,tag)">
              {{tag.name}}
            </el-tag>
            <el-button class="button-new-tag" size="small" @click="showInput(item)">+ 添加药品</el-button>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'option-medicine-input',
    data () {
      return {
        editableTabsValue: '',
        editableTabs: [],
        tabIndex: 2,

        inputVisible: false,
        inputValue: ''
      }
    },
    mounted () {
      this.requestData()
    },
    methods: {
      requestData(t){
        this.$resource(PATH_SETTING + 'cure_list').get().then((response) => {
          if (response.body.code == 200) {
            this.editableTabs = response.body.data
            if (!t) {
              this.editableTabsValue = response.body.data[0].key
            } else {
              this.editableTabsValue = t
            }
          } else {
            this.alertMsg("error: ", response.status + " - " + response.url)
          }
        })
      },
      addTab() {
        this.$prompt('请输入方案名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({value}) => {
          let param = {cure_name:value}
          this.$resource(PATH_SETTING + 'add_cure').save({},param).then((response) => {
            if (response.body.code == 200) {
              this.$message({
                type: 'success',
                message: '你添加了方案名: ' + value,
              })
              this.requestData(response.body.data.key)
            } else {
              this.alertMsg("error: ", response.status + " - " + response.url)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入',
          })
        })
      },
      removeTab(targetName) {
        let this_ = this;
        this.$confirm('此操作将永久删除该治疗方案, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this_.$resource(PATH_SETTING + 'del_cure').save({},{cure_key:targetName}).then((response) => {
            if (response.body.code == 200) {
              let tabs = this_.editableTabs;
              let activeName = this_.editableTabsValue;
              tabs.forEach((tab, index) => {
                if (tab.key == targetName) {
                  let nextTab = tabs[index + 1] || tabs[index - 1]
                  if (nextTab) {
                    activeName = nextTab.key
                  }
                }
              })
              this_.editableTabsValue = activeName;
              this_.editableTabs = tabs.filter(tab => tab.key !== targetName);
              this_.$message({
                type: 'info',
                message: '删除成功'
              });
            } else {
              this_.alertMsg("error: ", response.status + " - " + response.url)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      handleClose(item,tag) {
        let  this_ = this;
        this.$confirm('此操作将永久删除该药品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this_.$resource(PATH_SETTING + 'del_cure_drug').save({},{cure_key:tag.key,drug_key:item.key}).then((response) => {
            if (response.body.code == 200) {
              item.content.splice(item.content.indexOf(tag), 1);
              this_.$message({
                type: 'success',
                message: '删除成功!'
              });
            } else {
              this_.alertMsg("error: ", response.status + " - " + response.url)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      showInput(item) {
        this.$prompt(`请输入${item.name}方案下的药品名`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({value}) => {
          this.handleInputConfirm(item, value);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入',
          })
        })
      },
      handleInputConfirm(item, value) {
        let inputValue = value;
        if (inputValue) {
          this.$resource(PATH_SETTING + 'add_cure_drug').save({}, {drug_name: inputValue, cure_key: item.key}).then((response) => {
            if (response.body.code == 200) {
              item.content.push({key: response.body.data.key, name: inputValue})
              this.$message({
                type: 'success',
                message: '你添加了药品: ' + inputValue,
              })
            } else {
              this.alertMsg('error: ', response.status + ' - ' + response.url)
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../style/stata.css";

  .wrap-10 {
    padding: 10px;
    overflow: hidden;
  }

  .inner {
    background: #fff;
    padding: 10px;
    min-height: 500px;
  }

  .bar {
    height: 25px;
    line-height: 25px;
    background: #E7F4FA;
    padding: 0 5px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #2195CB;
  }

  .btn {
    margin-bottom: 20px;
  }

  .el-tabs--border-card{
    min-width: 100%;
  }
  .el-tabs--border-card .el-tabs__content{
    min-width: 100%;
  }
  .el-tag{
    margin-right: 15px;
  }

  .input-new-tag{
    width: 150px;
  }
</style>
