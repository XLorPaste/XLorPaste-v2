<template>
  <el-row id="about">
    <el-col :span="20" :push="2" :xs="{ span: 22, push: 1 }">
      <vue-markdown class="markdown-body">{{ text }}</vue-markdown>
    </el-col>
  </el-row>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import { scrollToTop } from '../util';

const text = `
## 使用指南

### 分享代码

1. 选择你的想要分享的代码高亮语言，目前支持无高亮 \`文本\` 和 \`C++\` \`Python\` \`Java\` \`JavaScript\` 等语言的代码高亮，\`JSON\` 的解析；

2. 在文本框内输入你的代码；

3. 提交，成功后右上角会提示下图消息：

  + Token：每一份代码的唯一标识符，用于找到你分享的代码，请妥善保管！(找不到了可以再上传一份w)；

  + 查看文本：跳转到你刚刚分享的代码查阅链接；

  + 复制链接：复制你的代码查阅链接(已知ios端无法复制)。

![上传成功](https://github.com/yjl9903/Pictures/raw/master/xlorpaste3.png)

### 阅览代码

+ 你拥有代码的分享链接：直接打开就行了。

+ 你拥有代码的Token：在导航栏内的输入框中输入你的 Token，按回车跳转。

![使用导航栏进行跳转](https://github.com/yjl9903/Pictures/raw/master/xlorpaste4.png)

## 更新日志

### 2020-02-18

修复 highlight.js 解析失败时，无法高亮代码的问题。

打开关于界面，自动滚动到顶部。

### 2020-02-16

导航栏输入框自动解析完整的 Token 链接。

输入框粘贴代码时，自动滚动到页面顶部。

移除代码中硬编码的 Google analytics ID，建议使用本地环境变量。

引入 markdown 解析，更新页脚和关于页面。

### 2020-02-15

重构了部分冗余代码。

生产环境正式迁移至新版本的 XLorPaste。

添加 JSON 的解析显示。

### 2019-10-19

用 TypeScript 重写了辣鸡的 Python 后端。

添加了一个接口参数 \`raw=true\`，可以返回代码原文。

优化了代码渲染组件，现在可以适配移动端。

静态资源中移除了 Fira Code，改用 cdn 加速。

添加了 Google Analytics。

### 2019-5-22

更新 \`javascript\` 和 \`html\` 的高亮。

修复了一些环境错误。

### 2019-3-31

配置了 ssl 证书，支持 https 访问。

修复了一些对齐和显示问题。

### 2019-2-28

修改了 Tab 的显示。

增加了 Fira Code 的 web 字体。

### 2019-1-7

备案审核通过。

### 2018-12-25

做完了。
`;

export default {
  name: 'About',
  components: {
    VueMarkdown
  },
  data: () => ({
    text
  }),
  mounted() {
    scrollToTop(document.documentElement);
  }
};
</script>

<style>
@import 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css';
</style>
