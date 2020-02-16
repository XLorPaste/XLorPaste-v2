<template>
  <div id="paste-footer">
    <el-row>
      <router-link to="About">关于 XLorPaste</router-link>
      |
      <a href="https://github.com/XLorPaste">Github</a>
      |
      <a href="http://www.miitbeian.gov.cn">苏ICP备19000844号</a>
    </el-row>
    <el-row
      >© 2018 <a href="mailto:yjl9903@vip.qq.com">XLor</a> All rights
      reserved</el-row
    >
  </div>
</template>

<script>
export default {
  name: 'PasteFooter'
};
</script>

<style>
#paste-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #909399;
  text-align: center;
  font-size: 0.8rem;
  line-height: 0.8rem;
  padding-bottom: 0.2rem;
  line-height: 1.1rem;
}
</style>
