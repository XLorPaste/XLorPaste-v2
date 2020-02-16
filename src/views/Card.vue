<template>
  <el-row id="paste-card">
    <transition name="el-fade-in">
      <el-col v-if="onLoad" :span="20" :push="2" :xs="{ span: 22, push: 1 }">
        <el-card class="display-code">
          <paste-code :source="code" :lang="lang"></paste-code>
        </el-card>
        <el-button
          type="primary"
          size="mini"
          class="copy-button"
          @click="copyData"
          >复制</el-button
        >
      </el-col>
    </transition>
  </el-row>
</template>

<script>
import PasteCode from '../components/code';
import { getCode } from '../services';

export default {
  name: 'PasteCard',
  components: {
    PasteCode
  },
  props: {
    id: String
  },
  data() {
    return {
      onLoad: false,
      pcode: '',
      lang: 'text'
    };
  },
  methods: {
    copyData() {
      window.copyData(this.pcode);
      this.$message({
        message: '复制成功',
        type: 'success'
      });
    },
    async getData(id) {
      if (!id) id = this.id;
      this.onLoad = false;
      const [code, err] = await getCode(id);
      if (code) {
        this.code = code.body;
        this.lang = code.lang;
        this.onLoad = true;
      } else if (err) {
        this.$message({
          duration: 4000,
          message: err,
          type: 'error'
        });
        this.$router.push({ name: 'Home' });
      }
    }
  },
  computed: {
    code: {
      get() {
        return this.pcode.replace(/\t/g, '    ');
      },
      set(x) {
        this.pcode = x;
      }
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    this.$notify.closeAll();
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.id) {
      this.getData(to.params.id);
      next();
    } else {
      next({ name: 'Home' });
    }
  }
};
</script>

<style>
#paste-card > .el-col {
  position: relative;
}

#paste-card .display-code > div {
  padding: 12px 2% !important;
  height: 100%;
}

#paste-card .copy-button {
  position: absolute;
  padding: 7px 10px !important;
  top: 7px;
  right: 1%;
}

/* @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  #paste-card .copy-button {
    top: 7px;
  }
} */
</style>
