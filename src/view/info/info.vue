<template>
  <div id="info">
    <div class="tab-wraper">
      <div class="tab">
        <span :class="{active:tabIndex==i}" v-for="(item,i) in tabList" :key="i" @click="changeMenu(i,item.id)">{{item.name}}</span>
      </div>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,i) in banner" :key="i" class="banner">
        <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="news-box">
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
  name: 'info',
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
      banner: [require('../../assets/img/1.jpg'), require('../../assets/img/2.jpg'), require('../../assets/img/3.jpg')],
      tabIndex: 0,
      tabList: [
        { name: '首页', id: 'home' },
        { name: '资讯', id: 'info' },
        { name: '资讯', id: 'info' },
        { name: '资讯', id: 'info' },
        { name: '资讯', id: 'info' },
        { name: '资讯', id: 'info' }
      ]
    };
  },
  methods: {
    changeMenu(v, id) {
      this.tabIndex = v;
    }
  }
};
</script>
<style lang="less" scoped>
.news-box {
  margin-top: 0.1rem;
}
</style>