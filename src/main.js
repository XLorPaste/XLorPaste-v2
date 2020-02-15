import Vue from 'vue';
import App from './App.vue';
import router from './router';
import copy from 'copy-to-clipboard';
import './assets/common.css';
import './plugins/element';
import './plugins/hljs';

Vue.config.productionTip = false;

window.copyData = copy;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
