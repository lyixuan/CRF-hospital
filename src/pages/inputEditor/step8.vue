<template>
  <div class="input-step8">
    <steps :activee="7"></steps>
    <div class="guide-area">
      <el-row>
        <el-col :span="12" class="x-title">图片上传</el-col>
        <el-col :span="12" class="x-btn">
          <el-button type="primary" @click="stepTo(7)" size="mini">上一步</el-button>
          <el-button type="primary" @click="stepTo(9)" size="mini">下一步</el-button>
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
                :action="uploadUrl"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="fileList">
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text"><em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">上传对应的图片或文件，且不超过5M</div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">2、病史</th>
            <th>
              <el-upload
                :action="uploadUrl"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="fileList">
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text"><em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">上传对应的图片或文件，且不超过5M</div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">3、既往史</th>
            <th>
              <el-upload
                :action="uploadUrl"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="fileList">
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text"><em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">上传对应的图片或文件，且不超过5M</div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">4、检验</th>
            <th>
              <el-upload
                :action="uploadUrl"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="fileList">
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text"><em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">上传对应的图片或文件，且不超过5M</div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">5、影像学检查</th>
            <th>
              <el-upload
                :action="uploadUrl"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="fileList">
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text"><em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">上传对应的图片或文件，且不超过5M</div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">6、治疗方案</th>
            <th>
              <el-upload
                :action="uploadUrl"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="fileList">
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text"><em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">上传对应的图片或文件，且不超过5M</div>
              </el-upload>
            </th>
          </tr>
          <tr>
            <th width="120px;">7、评分量表</th>
            <th>
              <el-upload
                :action="uploadUrl"
                :thumbnail-mode="false"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="handleSuccess"
                :default-file-list="fileList">
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text"><em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">上传对应的图片或文件，且不超过5M</div>
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
        uploadUrl: InputUrl + 'img/upload.php',
        fileList: []
      };
    },
    methods: {
      handleRemove(file, fileList) {
        for (let i = 0; i < this.fileList.length; i++) {
          if (file.id == this.fileList[i].id) {
            this.fileList.splice(i, 1)
          }
        }
      },
      handlePreview(file) {
        window.open(file.url)
      },
      handleSuccess(response, file, fileList){
        this.fileList.push(response)
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
  .el-dragger__text em{
    cursor: pointer;
  }
</style>
