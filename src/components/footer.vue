<template>
  <div id="xlor-footer">
    <el-row>
      <a href="#" @click="showTip = true">User Guide</a>
      |
      <a href="https://xlor.cn/2018/12/xlorpaste/">Project Blog</a>
      |
      <a href="http://www.miitbeian.gov.cn">苏ICP备19000844号</a>
    </el-row>
    <el-row
      >© 2018 <a href="mailto:yjl9903@vip.qq.com">XLor</a> All rights
      reserved</el-row
    >

    <el-dialog
      center
      title="使用指南"
      :visible.sync="showTip"
      :width="dlgwidth()"
    >
      <p><strong>上传你想要分享代码，复制链接，分享！</strong></p>
      <br />
      <p>Token是每一份代码的唯一标识。</p>
      <p>代码上传成功后，你将会获得这份代码的Token。</p>
      <p>在导航栏内输入相应Token也可以查阅到你的代码。</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'xlor-footer',
  data() {
    return {
      showTip: false
    };
  },
  methods: {
    dlgwidth() {
      if (document.body.clientWidth < 800) return '90%';
      return '30%';
    }
  },
  props: {}
};
</script>

<style>
#xlor-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #909399;
  text-align: center;
  font-size: 0.8rem;
  line-height: 0.8rem;
  padding-bottom: 0.2rem;
}

.dlg-font {
  font-size: 20px !important;
}
</style>
