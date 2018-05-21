<template>
  <div id="info">
    <loading :show="loading" text="加载中"></loading>
    <div class="tab-wraper">
      <div class="tab halfBorderBB">
        <span :class="{active:tabIndex==i}" v-for="(item,i) in tabList" :key="i" @click="changeMenu(i,item.id)">{{item.name}}</span>
      </div>
    </div>
    <!-- <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,i) in banner" :key="i" class="banner">
        <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
    <div class="news-box">
      <ul class="news-list" v-if="newsList.length">
        <router-link v-for="(item,i) in newsList" :key="i" v-if="item.img" tag="li" :to="{name:'infoDetails',params:{id:item.id}}">
          <span class="left">
            <h1>{{item.title}}</h1>
            <p>{{item.introduce}}...</p>
            <p class="gray">{{item.time}}</p>
          </span>
          <span class="right">
            <img :src="`${host}${item.img}`">
          </span>
        </router-link>
        <router-link v-else tag="li" :to="{name:'infoDetails',params:{id:item.id}}">
          <div class="all">
            <h1>{{item.title}}</h1>
            <p>{{item.introduce}}...</p>
            <p class="gray">{{item.time}}</p>
          </div>
        </router-link>
      </ul>
      <div v-else class="noData">暂无数据!</div>
    </div>
    <div v-if="newsList.length" class="noData" @click="showMore">查看更多资讯</div>
    <div class="backTop" v-if="scrollTop>500" @click="goTop">返回顶部</div>
    <xc-footer></xc-footer>
  </div>
</template>
<script>
import { Loading } from 'vux';
import { host } from '@/config';
import xcFooter from '@/components/footer/footer';
export default {
  name: 'info',
  components: {
    xcFooter,
    Loading
  },
  data() {
    return {
      host: host,
      loading: false,
      newsList: [],
      page: 1,
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
      scrollTop: 0,
      banner: [require('../../assets/img/1.jpg'), require('../../assets/img/2.jpg'), require('../../assets/img/3.jpg')],
      tabIndex: 0,
      tabList: [
        { name: '省内', id: 'province' },
        { name: '国内', id: 'inland' },
        { name: '投注站', id: 'betshop' },
        { name: '公益', id: 'community' },
        { name: '故事', id: 'story' }
      ]
    };
  },
  created() {
    this.tabIndex = this.getType(this.$route.query.code);
    this.getData();
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollTop = scrollTop;
    });
  },
  methods: {
    goTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    getType(code) {
      if (!code) {
        return 0;
      }
      return this.tabList.findIndex(c => c.id == code);
    },
    getData() {
      this.loading = true;
      this.$store
        .dispatch('result/newList', {
          type: this.tabIndex,
          page: this.page,
          page_size: 10
        })
        .then(r => {
          this.loading = false;
          if (!r.error && this.page == 1) {
            this.newsList = r;
          } else if (!r.error && this.page !== 1) {
            this.newsList = this.newsList.concat(r);
          } else {
            this.newsList = [];
          }
          // this.newsList = !r.error ? r : [];
        });
    },
    changeMenu(v, id) {
      this.page = 1;
      this.tabIndex = v;
      this.getData();
    },
    showMore() {
      this.page += 1;
      this.getData();
    }
  },
  watch: {
    tabIndex() {
      this.goTop();
    },
    $route: {
      handler(v) {
        this.tabIndex = this.getType(v.query.code);
        this.getData();
      },
      deep: true
    }
  }
};
</script>
<style lang="less" scoped>
#info {
  position: relative;
  .news-box {
    margin-top: 0.1rem;
  }
  .backTop {
    position: fixed;
    bottom: 10%;
    right: 5%;
    width: 0.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    border-radius: 0.05rem;
    color: #fff;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>