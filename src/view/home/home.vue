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
        比赛结果
      </h1>
      <ul class="home-section-list">
        <li>
          <p>
            湖人 2018-08-08
          </p>
          <ul class="cp-res">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
        <li>
          <p>
            湖人 2018-08-08
          </p>
          <ul class="cp-res">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="home-section">
      <h1>
        体育快讯
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
      menuList: [
        { name: '首页', id: 'home' },
        { name: '资讯', id: 'info' },
        { name: '赛果', id: 'result' },
        { name: '资讯', id: 'info' },
        { name: '资讯', id: 'info' },
        { name: '资讯', id: 'info' }
      ],
      banner: [require('../../assets/img/1.jpg'), require('../../assets/img/2.jpg'), require('../../assets/img/3.jpg')]
    };
  },
  methods: {
    changeMenu(v, id) {
      this.tabIndex = v;
      this.$router.push(`/${id}`);
    }
  }
};
</script>
<style lang="less" scoped>
@import url('./home');
</style>