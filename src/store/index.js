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
      console.log(payload);
    }
  },
  actions: {
    async ['home/Info'](context, payload) {
      let res = await context.dispatch('home/lotteryRes', 1);
      context.commit('home/setLotteryRes', res);
    },
    async ['home/lotteryRes'](context, payload) {
      const allRes = [];
      lotteryList.map(v => {
        const item = new Promise(async r => {
          let res = await fetchJsonp(`http://f.apiplus.net/${v.key}-${payload}.json`);
          r(res.json());
        });
        allRes.push(item);
      });
      return await Promise.all(allRes);
    }
  },
  getters: {}
};
export default new Vuex.Store(store);
