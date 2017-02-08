<template>
  <div class="input-step8">
    <steps :activee="7"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">图片上传</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="saveAndStepTo(7)" size="mini">上一步</el-button>
          <el-button type="primary" @click="saveAndStepTo(9)" size="mini">下一步</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="clear: both;"></div>
    <div class="x-content">
      <div class="tab-content table-box">
        <table>
          <tr>
            <th width="120px;">1、基本信息</th>
            <th>
              <el-upload
                :action="uploadUrl + '?page=jbxx'"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="jbxxFileList">
                <div class="el-dragger__text"><i class="el-icon-upload"></i> <em>点击上传</em></div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">2、病史</th>
            <th>
              <el-upload
                :action="uploadUrl + '?page=bs'"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="bsFileList">
                <div class="el-dragger__text"><i class="el-icon-upload"></i> <em>点击上传</em></div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">3、既往史</th>
            <th>
              <el-upload
                :action="uploadUrl+ '?page=jws'"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="jwsFileList">
                <div class="el-dragger__text"><i class="el-icon-upload"></i> <em>点击上传</em></div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">4、检验</th>
            <th>
              <el-upload
                :action="uploadUrl+ '?page=jy'"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="jyFileList">
                <div class="el-dragger__text"><i class="el-icon-upload"></i> <em>点击上传</em></div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">5、影像学检查</th>
            <th>
              <el-upload
                :action="uploadUrl+ '?page=yx'"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="yxFileList">
                <div class="el-dragger__text"><i class="el-icon-upload"></i> <em>点击上传</em></div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">6、治疗方案</th>
            <th>
              <el-upload
                :action="uploadUrl+ '?page=zlfa'"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="zlfaFileList">
                <div class="el-dragger__text"><i class="el-icon-upload"></i> <em>点击上传</em></div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">7、评分量表</th>
            <th>
              <el-upload
                :action="uploadUrl+ '?page=pflb'"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="pflbFileList">
                <div class="el-dragger__text"><i class="el-icon-upload"></i> <em>点击上传</em></div>
              </el-upload>
            </th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Steps from '../../components/Steps'
  export default {
    name: 'input-step8',
    components: {
      Steps
    },
    data() {
      return {
        uploadUrl: PATH_RECORD + 'img/upload.php',
        jbxxFileList: [],
        bsFileList: [],
        jwsFileList: [],
        jyFileList: [],
        yxFileList: [],
        zlfaFileList: [],
        pflbFileList: []
      };
    },
    mounted(){
      let info;
      try {
        info = JSON.parse(window.localStorage.getItem('x_step8_img'))
      } catch (err) {
        localStorage.removeItem("x_step8_img");
      }
      if (info) {
        this.writeBack(info)
      }
      console.log(this.bsFileList)
    },
    methods: {
      handleRemove(file, fileList) {
        let listStr = this.constructStr(file.response)
        for (let i = 0; i < this[listStr].length; i++) {
          if (file.uid == this[listStr][i].uid) {
            this[listStr].splice(i, 1)
          }
        }
      },
      handleSuccess(response, file, fileList){
        let listStr = this.constructStr(response)
        this[listStr] = fileList
      },
      handlePreview(file) {
        window.open(file.url)
      },
      constructStr(response){
        // 构造对应字段
        let param = '', listStr;
        if (response.page) {
          param = response.page
        }
        if (response.item) {
          param = param + '_' + response.item
        }
        listStr = param + 'FileList';
        return listStr
      },
      writeBack (info) {
        this.jbxxFileList = info.jbxxFileList;
        this.bsFileList = info.bsFileList;
        this.jwsFileList = info.jwsFileList;
        this.jyFileList = info.jyFileList;
        this.yxFileList = info.yxFileList;
        this.zlfaFileList = info.zlfaFileList;
        this.pflbFileList = info.pflbFileList;
      },
      storage() {
        let fileList = {}
        fileList.jbxxFileList = this.jbxxFileList;
        fileList.bsFileList = this.bsFileList;
        fileList.jwsFileList = this.jwsFileList;
        fileList.jyFileList = this.jyFileList;
        fileList.yxFileList = this.yxFileList;
        fileList.zlfaFileList = this.zlfaFileList;
        fileList.pflbFileList = this.pflbFileList;
        window.localStorage.setItem('x_step8_img', JSON.stringify(fileList))
      },
      saveAndStepTo(num) {
        this.storage()
        this.alertMsg("success", '"图片" 内容已暂存')
        this.stepTo(num)
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

  .el-dragger__text em {
    cursor: pointer;
  }
</style>
