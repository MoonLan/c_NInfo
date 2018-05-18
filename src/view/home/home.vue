<template>
  <div class="home">
    <div class="tab-wraper">
      <div class="tab">
        <span :class="{active:tabIndex==i}" v-for="(item,i) in menuList" :key="i" @click="changeMenu(i,item.id)">{{item.name}}</span>
      </div>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,i) in banner" :key="i" class="banner">
        <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="home-section">
      <h1>
        开奖公告
      </h1>
      <ul class="home-section-list">
        <li v-for="(item,i) in lotteryRes" :key="i">
          <p>
            {{getLotteryName(item.code)}} {{utils.formatDate(new Date(item.data[0].opentimestamp*1000),'YY-MM-DD')}}
          </p>
          <ul class="cp-res">
            <li v-for="(v,k) in item.result" :key="k">{{v}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="home-section">
      <h1>
        热点资讯
      </h1>
      <ul class="news-list">
        <li>
          <span class="left">
            <h1>湖人vs凯尔特人第七场</h1>
            <p>第一节................第二节.....第一节................第二节.....第一节................第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节</p>
          </span>
          <span class="right">
            <img src="../../assets/img/1.jpg">
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { lotteryList } from '../../services/lotteryList';
export default {
  name: 'home',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      },
      tabIndex: 0,
      lotteryList: lotteryList,
      menuList: [
        { name: '首页', id: 'home' },
        { name: '资讯', id: 'info' },
        { name: '开奖', id: 'result' },
        { name: '公益', id: 'info' },
        { name: '兑奖', id: 'info' },
        { name: '招募', id: 'info' }
      ],
      banner: [require('../../assets/img/1.jpg'), require('../../assets/img/2.jpg'), require('../../assets/img/3.jpg')]
    };
  },
  created() {
    this.$store.dispatch('home/Info');
  },
  computed: {
    ...mapState({
      lotteryRes: state => state.lotteryRes
    })
  },
  methods: {
    changeMenu(v, id) {
      this.tabIndex = v;
      this.$router.push(`/${id}`);
    },
    getLotteryName(v) {
      return lotteryList.find(c => c.key == v).name;
    }
  }
};
</script>
<style lang="less" scoped>
@import url('./home');
</style>