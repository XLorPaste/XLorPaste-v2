<template>
  <el-row id="home" type="flex" align="center">
    <el-col :span="20" :push="2" :xs="{ span: 22, push: 1 }">
      <el-row style="margin-bottom: 10px;">
        <strong style="font-size: 14px;">语言&nbsp;</strong>
        <el-select
          size="medium"
          v-model="lang"
          placeholder="请选择"
          style="margin-right: 10px;"
        >
          <el-option
            v-for="item in langList"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
        <el-button
          size="medium"
          class="submit-button"
          type="success"
          icon="el-icon-upload"
          @click="submit"
          >提交</el-button
        >
      </el-row>

      <el-input
        class="editor"
        type="textarea"
        :autosize="{ minRows: 24 }"
        autofocus="true"
        v-model="code"
        @keyup.ctrl.enter.native="submit"
      >
      </el-input>
    </el-col>
  </el-row>
</template>

<script>
import { LANG, uploadCode } from '../services';

export default {
  name: 'Home',
  data() {
    return {
      code: '',
      lang: 'cpp',
      langList: LANG
    };
  },
  methods: {
    async submit() {
      this.$notify.closeAll();
      if (this.code.length < 10) {
        this.$message.error('分享的代码长度至少为 10 个字符');
        return;
      }
      try {
        const data = await uploadCode(this.code, this.lang);
        const msg = `文本对应的 Token 为 <strong>${data.token}</strong><br>
            <a href="/${data.token}"><button type="button" class="el-button el-button--text">查看文本</button></a>
            <button type="button" class="el-button el-button--text" onclick="window.copyData('${data.token}')">复制链接</button>`;
        this.$notify({
          title: '上传成功',
          type: 'success',
          dangerouslyUseHTMLString: true,
          message: msg,
          duration: 0
        });
        this.code = '';
      } catch (err) {
        this.$message.error('上传失败');
      }
    }
  }
};
</script>
