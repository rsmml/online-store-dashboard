// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faTag, faFolder, faUser, faShoppingBasket, faAddressCard, faSignOutAlt, faColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueAxios, axios);

library.add(faSpinner,
  faTag,
  faFolder,
  faUser,
  faShoppingBasket,
  faAddressCard,
  faSignOutAlt,
  faColumns,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
