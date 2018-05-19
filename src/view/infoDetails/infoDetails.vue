<template>
  <div class="infoDetails">
    <h1 class="infoDetails-title">我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题</h1>
    <p class="infoDetails-contxt">对方阿斯蒂芬对方阿斯蒂芬对方阿斯蒂芬对方阿斯蒂芬对方阿斯蒂芬对方阿斯蒂芬对方阿斯蒂芬对方阿斯蒂芬对方阿斯蒂芬对方阿斯蒂芬</p>
    <xc-footer></xc-footer>
  </div>
</template>
<script>
import xcFooter from '@/components/footer/footer';
export default {
  name: 'infoDetails',
  data() {
    return {};
  },
  components: {
    xcFooter
  }
};
</script>
<style lang="less" scoped>
.infoDetails {
  &-title {
    padding: 0.1rem;
    line-height: 0.18rem;
    font-size: 0.16rem;
    color: #333;
    font-weight: 600;
  }
  &-contxt {
    padding: 0.1rem;
    font-size: 0.12rem;
    color: #666;
  }
}
</style>