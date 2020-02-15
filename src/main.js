import Vue from 'vue';
import App from './App.vue';
import router from './router';
import copy from 'copy-to-clipboard';
import './plugins/element.js';
import './assets/common.css';

Vue.config.productionTip = false;

window.copyData = copy;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
