<template>
  <div class="home">
    <loading :show="loading" text="加载中"></loading>
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
      <h1 @click="goResult">
        开奖公告
      </h1>
      <ul class="home-section-list">
        <router-link v-for="(item,i) in lotteryRes" :key="i" :to="{name:'result',query:{code:item.code}}" tag="li">
          <p>
            {{getLotteryName(item.code)}} {{utils.formatDate(new Date(item.data[0].opentimestamp*1000),'YY-MM-DD')}}
          </p>
          <ul class="cp-res">
            <li v-for="(v,k) in item.result" :key="k" :class="{blue:isBlue(item.code,k)}">{{v}}</li>
          </ul>
        </router-link>
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
    <xc-footer></xc-footer>
  </div>
</template>
<script>
import { Loading } from 'vux';
import { mapState } from 'vuex';
import xcFooter from '@/components/footer/footer';
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
      loading: false,
      tabIndex: 0,
      lotteryList: lotteryList,
      menuList: [
        { name: '首页', id: 'home' },
        { name: '资讯', id: 'info' },
        { name: '开奖', id: 'result' },
        { name: '公益', id: 'info' },
        { name: '兑奖', id: 'expiry' },
        { name: '招募', id: 'info' }
      ],
      banner: [require('../../assets/img/1.jpg'), require('../../assets/img/2.jpg'), require('../../assets/img/3.jpg')]
    };
  },
  components: {
    Loading,
    xcFooter
  },
  created() {
    this.loading = true;
    this.$store.dispatch('home/Info').then(r => {
      this.loading = false;
    });
  },
  computed: {
    ...mapState({
      lotteryRes: state => state.lotteryRes
    })
  },
  methods: {
    isBlue(type, k) {
      if (type == 'ssq' && k == 6) {
        return true;
      } else if ((type == 'dlt' && k == 5) || (type == 'dlt' && k == 6)) {
        return true;
      } else {
        return false;
      }
    },
    goResult() {
      this.$router.push('/result');
    },
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