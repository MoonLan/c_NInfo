<template>
  <div class="home">
    <loading :show="loading" text="加载中"></loading>
    <div class="tab-wraper">
      <div class="tab halfBorderBB">
        <span :class="{active:tabIndex==i}" v-for="(item,i) in menuList" :key="i" @click="changeMenu(i,item.id)">{{item.name}}</span>
      </div>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,i) in banner" :key="i" class="banner">
        <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="home-nav">
      <span class="halfBorderB" @click="$router.push('/result')">
        <em>
          <img src="../../assets/img/notice.png" />
        </em>
        <em>
          <span>公告</span>
          <i>各种彩种开奖数据</i>
        </em>
      </span>
      <span class="halfBorderL" @click="$router.push('/info')">
        <em>
          <img src="../../assets/img/news.png" />
        </em>
        <em>
          <span>资讯</span>
          <i>大奖公布,促销活动</i>
        </em>
      </span>
      <span class="halfBorderR" @click="$router.push('/expiry')">
        <em>
          <img src="../../assets/img/cup.png" />
        </em>
        <em>
          <span>兑奖</span>
          <i>兑奖须知信息详情</i>
        </em>
      </span>
      <span @click="$router.push('/info?code=betshop')">
        <em>
          <img src="../../assets/img/zm.png" />
        </em>
        <em>
          <span>招募</span>
          <i>各地站点招募信息</i>
        </em>
      </span>
    </div>
    <div class="home-section">
      <h1 @click="goResult">
        开奖公告
      </h1>
      <ul class="home-section-list" v-if="lotteryRes.length>0">
        <router-link v-for="(item,i) in lotteryRes" :key="i" :to="{name:'result',query:{code:item.code}}" tag="li">
          <p>
            {{getLotteryName(item.code)}} 第{{item.data[0].expect}}期
            <!-- {{utils.formatDate(new Date(item.data[0].opentimestamp*1000),'YY-MM-DD')}} -->
          </p>
          <ul class="cp-res">
            <li v-for="(v,k) in item.result" :key="k" :class="{blue:isBlue(item.code,k)}">{{v}}</li>
          </ul>
        </router-link>
      </ul>
      <div v-else class="noData">数据加载中...</div>
    </div>
    <div class="home-section">
      <h1 @click="$router.push('/info')">
        热点资讯
      </h1>
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
    <xc-footer></xc-footer>
  </div>
</template>
<script>
import { Loading } from 'vux';
import { mapState } from 'vuex';
import { host } from '@/config';
import xcFooter from '@/components/footer/footer';
import { lotteryList } from '../../services/lotteryList';
export default {
  name: 'home',
  data() {
    return {
      host: host,
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
        { name: '公益', id: 'info?code=community' },
        { name: '兑奖', id: 'expiry' },
        { name: '招募', id: 'info?code=betshop' }
      ],
      banner: [require('../../assets/img/1.jpg'), require('../../assets/img/2.jpg'), require('../../assets/img/3.jpg')]
    };
  },
  components: {
    Loading,
    xcFooter
  },
  created() {
    // this.loading = true;
    this.$store.dispatch('home/Info').then(r => {
      // this.loading = false;
    });
  },
  computed: {
    ...mapState({
      lotteryRes: state => state.lotteryRes,
      newsList: state => state.newsList
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