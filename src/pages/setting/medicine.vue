<template>
  <div class="option-medicine-input">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/search_basic' }">设置</el-breadcrumb-item>
      <el-breadcrumb-item>药品录入</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="wrap-10">
      <div class="inner">
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
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="mini"
              @keyup.enter.native="handleInputConfirm(item)"
              @blur="handleInputConfirm(item)">
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加药品</el-button>
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
        this.$resource(PATH_SETTING + 'del_cure').save({},{cure_key:targetName}).then((response) => {
          if (response.body.code == 200) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            tabs.forEach((tab, index) => {
              if (tab.key == targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                  activeName = nextTab.key
                }
              }
            })
            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.key !== targetName);
          } else {
            this.alertMsg("error: ", response.status + " - " + response.url)
          }
        })
      },
      handleClose(item,tag) {
        this.$resource(PATH_SETTING + 'del_cure_drug').save({},{cure_key:tag.key,drug_key:item.key}).then((response) => {
          if (response.body.code == 200) {
            item.content.splice(item.content.indexOf(tag), 1);
          } else {
            this.alertMsg("error: ", response.status + " - " + response.url)
          }
        })
      },
      showInput() {
        this.inputVisible = true;
      },
      handleInputConfirm(item) {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.$resource(PATH_SETTING + 'add_cure_drug').save({}, {drug_name: inputValue, cure_key: item.key}).then((response) => {
            if (response.body.code == 200) {
              item.content.push({key: response.body.data.key, name: inputValue})
              this.inputVisible = false;
              this.inputValue = '';
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

  .inner {
    background: #fff;
    padding: 10px;
    min-height: 500px;
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
