<template>
  <div id="app">
    <paste-nav></paste-nav>
    <router-view style="margin-top: 20px;"></router-view>
    <paste-footer></paste-footer>
    <el-backtop>
      <i class="el-icon-caret-top" style="font-size: 24px"></i>
    </el-backtop>
  </div>
</template>

<script>
import PasteNav from './components/nav.vue';
import PasteFooter from './components/footer.vue';
export default {
  name: 'app',
  data() {
    return {};
  },
  methods: {},
  components: {
    PasteNav,
    PasteFooter
  }
};
</script>

<style>
#app {
  position: relative;
  min-height: calc(100% - 2.4rem);
  padding-bottom: 2.6rem;
  box-sizing: border-box;
}
</style>
