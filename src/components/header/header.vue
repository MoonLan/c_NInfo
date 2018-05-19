<template>
  <div class="header-wrapper">
    <div class="header">
      <img src="../../assets/img/logo.png" class="back" @click="goBack" /> 资讯
      <img src="../../assets/img/home.png" class="more" @click="showMore" />
    </div>
    <transition enter-active-class="fadeInDown" leave-active-class="fadeOutUp" mode="out-in">
      <div class="menu" v-if="state">
        <p>
          <label>开奖:
          </label>
          <span v-for="(item,i) in lotteryList" :key="i" @click="changeLotteryType(item)">{{item.name}}</span>
        </p>
        <p>
          <label>资讯:</label>
          <span v-for="(item,i) in newsList" :key="i" @click="changeLotteryType(item)">{{item.name}}</span>
        </p>
        <p>
          <label>其他:</label>
          <router-link :to="{path:'/expiry'}" tag="span">兑奖</router-link>
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
import { lotteryList } from '../../services/lotteryList';
export default {
  name: 'xc-header',
  data() {
    return {
      state: false,
      lotteryList: lotteryList,
      newsList: [
        { name: '省内', id: 'province' },
        { name: '国内', id: 'inland' },
        { name: '投注站', id: 'betshop' },
        { name: '公益', id: 'community' },
        { name: '故事', id: 'story' }
      ]
    };
  },
  methods: {
    changeLotteryType(item) {
      this.$router.push({
        name: 'result',
        query: { code: item.key }
      });
      this.state = !this.state;
    },
    goBack() {
      this.$router.push('/home');
    },
    showMore() {
      this.state = !this.state;
    }
  },
  watch: {
    $route() {
      this.state && (this.state = !this.state);
    }
  }
};
</script>
<style lang="less" scoped>
@import url('./header');
</style>