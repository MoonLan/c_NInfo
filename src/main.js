import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import utils from '@/utils';
Vue.use(VueAwesomeSwiper);
const FastClick = require('fastclick');
FastClick.attach(document.body);
Vue.config.productionTip = false;
Vue.prototype.utils = utils;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
