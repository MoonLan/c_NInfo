<template>
  <div class="home">
    <div class="home-tab-wraper">
      <tab active-color="activeColor" class="home-tab">
        <tab-item :selected="tabIndex==k" active-class="active" v-for="(item,k) in menuList" :key="k" @on-item-click="changeMenu">{{item}}</tab-item>
      </tab>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,i) in banner" :key="i" class="home-banner">
        <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="home-res">
      <h1>
        比赛结果
      </h1>
      <ul class="home-res-list">
        <li>
          <p class="title">
            湖人 2018-08-08
          </p>
          <ul class="ball-res">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
        <li>
          <p class="title">
            湖人 2018-08-08
          </p>
          <ul class="ball-res">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="home-res">
      <h1>
        体育快讯
      </h1>
      <ul class="news-res-list">
        <li>
          <span class="left">
            <h1>湖人vs凯尔特人第七场</h1>
            <p>第一节................第二节.....第一节................第二节.....第一节................第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节</p>
          </span>
          <span class="right">
            <img src="../../assets/img/1.jpg">
          </span>
        </li>
        <li>
          <span class="left">
            <h1>湖人vs凯尔特人第七场</h1>
            <p>第一节................第二节.....第一节................第二节.....第一节................第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节第二节</p>
          </span>
          <span class="right">
            <img src="../../assets/img/1.jpg">
          </span>
        </li>
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
import { Tab, TabItem } from 'vux';
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
      menuList: ['首页', '首页1', '首页2', '首页3', '首页4', '首页5'],
      banner: [require('../../assets/img/1.jpg'), require('../../assets/img/2.jpg'), require('../../assets/img/3.jpg')]
    };
  },
  components: {
    Tab,
    TabItem
  },
  methods: {
    changeMenu(v) {
      this.tabIndex = v;
    }
  }
};
</script>
<style lang="less" scoped>
@import url('./home');
</style>