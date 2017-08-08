<template>
  <div class="input-step8">
    <steps :activee="7"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">图片上传</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="saveAndStepTo(7)" size="mini">上一步</el-button>
          <el-button type="primary" @click="saveAndStepTo('end')" size="mini">下一步</el-button>
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
                :default-file-list="jbxx">
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
                :default-file-list="bs">
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
                :default-file-list="jws">
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
                :default-file-list="jy">
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
                :default-file-list="yx">
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
                :default-file-list="zlfa">
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
                :default-file-list="pflb">
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
        jbxx: [],
        bs: [],
        jws: [],
        jy: [],
        yx: [],
        zlfa: [],
        pflb: []
      };
    },
    mounted(){
      let info;
      try {
        info = JSON.parse(window.sessionStorage.getItem('x_step8_img'))
      } catch (err) {
        sessionStorage.removeItem("x_step8_img");
      }
      if (info) {
        this.writeBack(info)
      }
      console.log(this.bs)
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
        listStr = param;
        return listStr
      },
      writeBack (info) {
        this.jbxx = info.jbxx;
        this.bs = info.bs;
        this.jws = info.jws;
        this.jy = info.jy;
        this.yx = info.yx;
        this.zlfa = info.zlfa;
        this.pflb = info.pflb;
      },
      storage() {
        let fileList = {}
        fileList.jbxx = this.jbxx;
        fileList.bs = this.bs;
        fileList.jws = this.jws;
        fileList.jy = this.jy;
        fileList.yx = this.yx;
        fileList.zlfa = this.zlfa;
        fileList.pflb= this.pflb;
        window.sessionStorage.setItem('x_step8_img', JSON.stringify(fileList))
      },
      saveAndStepTo(num) {
        this.storage()
        this.stepTo(num)
      }
    }
  }
</script>

<style scoped>
  @import "../../style/record.css";

  .x-content {
    border: none;
    padding: 0;
  }

  .el-dragger__text em {
    cursor: pointer;
  }
</style>
