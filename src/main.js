import Vue from 'vue'
import App from './App.vue'
import store from './store'
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
