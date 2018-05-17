import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const home = r => require.ensure([], () => r(require('../view/home/home')), ' home');
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
});
