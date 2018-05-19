<template>
  <div id="infoDetails">
    <div class="infoDetails" v-if="detail.title">
      <h1 class="infoDetails-title">{{detail.title}}</h1>
      <h3 class="infoDetails-time">{{detail.time}}</h3>
      <div class="infoDetails-contxt" v-html="detail.content"></div>
      <xc-footer></xc-footer>
    </div>
    <div class="noData" v-else>暂无内容详情!</div>
    <div class="back" @click="$router.go(-1)">返回</div>
  </div>

</template>
<script>
import { host } from '@/config';
import xcFooter from '@/components/footer/footer';
export default {
  name: 'infoDetails',
  data() {
    return {
      detail: {
        title: '',
        time: '',
        content: ''
      },
      host: host
    };
  },
  components: {
    xcFooter
  },
  created() {
    this.$store.dispatch('result/newsDetails', this.$route.params.id).then(r => {
      if (!r) return false;
      if (r.content.indexOf('{imgHost}') > -1) {
        r.content = r.content.replace(/{imgHost}/g, host);
      }
      const { title, time, content } = r;
      this.detail.title = title;
      this.detail.time = time;
      this.detail.content = content;
    });
  }
};
</script>
<style lang="less" scoped>
#infoDetails {
  .infoDetails {
    &-title {
      padding: 0.1rem;
      line-height: 0.18rem;
      font-size: 0.16rem;
      color: #333;
      font-weight: 600;
    }
    &-time {
      padding: 0.05rem;
      line-height: 0.18rem;
      font-size: 0.14rem;
      color: #999;
    }
    &-contxt {
      padding: 0.1rem;
      font-size: 0.12rem;
      color: #666;
      /deep/ p {
        img {
          width: 100% !important;
          height: auto;
        }
      }
    }
  }
  .back {
    position: fixed;
    top: 10%;
    right: 5%;
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    border-radius: 0.05rem;
    color: #fff;
    z-index: 999999;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>