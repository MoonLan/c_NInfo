import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const home = r => require.ensure([], () => r(require('../view/home/home')), ' home');
const info = r => require.ensure([], () => r(require('../view/info/info')), ' info');
const result = r => require.ensure([], () => r(require('../view/result/result')), ' result');
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
    },
    {
      path: '/result',
      name: 'result',
      component: result
    }
  ]
});
