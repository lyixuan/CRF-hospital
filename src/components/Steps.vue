<template>
  <div class="steps">
    <el-steps :active="activee" finish-status="finish" :align-center="true">
      <el-step title="基本信息"></el-step>
      <el-step title="病史"></el-step>
      <el-step title="既往史"></el-step>
      <el-step title="检验"></el-step>
      <el-step title="影像学检查"></el-step>
      <el-step title="治疗方案"></el-step>
      <el-step title="评分量表"></el-step>
      <el-step title="图片上传"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
  </div>
</template>

<script>
  export default {
    name: 'steps',
    props: {
      activee: Number
    }
  }
</script>
<style scoped>
  .steps {
    box-sizing: border-box;
    padding: 10px 0 0px 50px;
  }
</style>
