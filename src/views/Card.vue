<template>
  <el-row id="xlor-view">
    <transition name="el-fade-in">
      <el-col v-if="onLoad" :span="20" :push="2" :xs="{ span: 22, push: 1 }">
        <el-card class="display-code">
          <!-- <xlor-code :code="code" :lang="lang"></xlor-code> -->
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
// import xlorCode from "./code";
import { getCode } from '../services';

export default {
  name: 'PasteCard',
  components: {
    // xlorCode
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
    async getData() {
      const [code, err] = await getCode(this.id);
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
      }
    }
  },
  computed: {
    code: {
      get() {
        // return window.hljs.highlightAuto(this.pcode.replace(/\t/g, '    '))
        //   .value;
        return this.pcode;
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
      this.getCode(to.params.id);
      next();
    } else {
      next({ name: 'Home' });
    }
  }
};
</script>

<style>
#xlor-view > .el-col {
  position: relative;
}

#xlor-view .display-code > div {
  padding: 12px 2% !important;
  height: 100%;
  width: 96%;
}

#xlor-view .copy-button {
  position: absolute;
  right: 1.5%;
  padding: 7px 10px !important;
  top: 9px;
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  #xlor-view .copy-button {
    top: 7px;
  }
}
</style>
