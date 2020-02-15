import Vue from 'vue';
import App from './App.vue';
import router from './router';
import copy from 'copy-to-clipboard';
import VueAnalytics from 'vue-analytics';
import './assets/common.css';
import './plugins/element';
import './plugins/hljs';

Vue.use(VueAnalytics, {
  id: 'UA-150361094-1',
  router
});

Vue.config.productionTip = false;

window.copyData = copy;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
