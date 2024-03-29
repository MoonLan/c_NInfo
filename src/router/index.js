import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const home = r => require.ensure([], () => r(require('../view/home/home')), ' home');
const info = r => require.ensure([], () => r(require('../view/info/info')), ' info');
const result = r => require.ensure([], () => r(require('../view/result/result')), ' result');
const expiry = r => require.ensure([], () => r(require('../view/expiry/expiry')), ' expiry');
const infoDetails = r => require.ensure([], () => r(require('../view/infoDetails/infoDetails')), ' infoDetails');
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
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
    {
      path: '/expiry',
      name: 'expiry',
      component: expiry
    },
    {
      path: '/infoDetails/:id',
      name: 'infoDetails',
      component: infoDetails
    }
  ]
});
