import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import fetchJsonp from 'fetch-jsonp';
import { lotteryList } from '../services/lotteryList';
const store = {
  state: {
    lotteryRes: []
  },
  mutations: {
    ['home/setLotteryRes'](state, payload) {
      state.lotteryRes = payload;
    }
  },
  actions: {
    async ['home/Info'](context, payload) {
      await context.dispatch('home/lotteryRes', 1);
    },
    async ['home/lotteryRes'](context, payload) {
      const allRes = [];
      lotteryList.map(v => {
        const item = new Promise(async r => {
          let res;
          try {
            res = await fetchJsonp(`http://f.apiplus.net/${v.key}-${payload}.json`);
          } catch (e) {
            res = 'error';
          }
          r(res != 'error' ? res.json() : res);
        });
        allRes.push(item);
      });
      //deal
      let res = await Promise.all(allRes);
      if (res.indexOf('error') > -1) {
        setTimeout(() => {
          context.dispatch('home/lotteryRes', 1);
        });
        return false;
      }
      if (!res.length) {
        return [];
      }
      res.forEach(v => {
        v.data.forEach(v2 => {
          let result = v2.opencode.replace(/\+/g, ',');
          v.result = result.split(',');
        });
      });
      context.commit('home/setLotteryRes', res);
    }
  },
  getters: {}
};
export default new Vuex.Store(store);
