<template>
  <el-menu
    id="paste-nav"
    :default-active="activeIndex"
    :class="[
      'text-center',
      ...(isMobile ? [] : ['el-row', 'is-align-middle', 'el-row--flex'])
    ]"
    :mode="isMobile ? 'vertical' : 'horizontal'"
  >
    <el-col :span="2" :xs="0"></el-col>
    <el-menu-item index="index" class="nav-logo no-select"
      ><router-link to="/">XLorPaste</router-link></el-menu-item
    >
    <el-menu-item index="input" class="no-border nav-input">
      <el-input
        v-model="token"
        placeholder="神秘Token"
        :style="{ width: isMobile ? '100%' : '400px' }"
        @keyup.enter.native="goToken"
        @input="handleInputChange"
      >
        <template slot="prepend">{{ baseURL }}</template>
      </el-input>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'PasteNav',
  data() {
    return {
      baseURL: process.env.VUE_APP_URL.replace('https://', '').replace(
        'http://',
        ''
      ),
      activeIndex: 'index',
      token: null,
      width: document.body.clientWidth
    };
  },
  computed: {
    isMobile() {
      return this.width < 430;
    }
  },
  methods: {
    handleInputChange() {
      const id = this.token
        .replace(process.env.VUE_APP_URL, '')
        .replace(process.env.VUE_APP_URL.replace('https://', ''), '')
        .replace(process.env.VUE_APP_URL.replace('http://', ''), '');
      if (this.token !== id) {
        this.token = id;
      }
    },
    goToken() {
      if (!this.token) {
        this.$message({
          duration: 4000,
          message: 'Token 不合法',
          type: 'error'
        });
      } else {
        const id = this.token;
        if (
          this.$route.name !== 'Card' ||
          !this.$route.params ||
          this.$route.params.id !== id
        ) {
          this.$router.push({
            name: 'Card',
            params: { id }
          });
        }
      }
      this.token = null;
    }
  },
  created() {
    window.addEventListener(
      'resize',
      () => (this.width = document.body.clientWidth)
    );
  }
};
</script>

<style>
#paste-nav {
  margin: 0 auto;
}

#paste-nav .nav-logo {
  font-size: 23px;
  border-bottom: 2px solid #409eff !important;
  color: #303133;
}

#paste-nav .go-url {
  padding: 0 10px;
}

#paste-nav .el-input-group__prepend {
  padding: 0 10px !important;
}

#paste-nav input {
  font-family: 'Fira Code', Consolas, sans-serif, 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial !important;
}
</style>
