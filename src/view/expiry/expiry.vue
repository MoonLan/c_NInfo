<template>
  <div class="expiry">
    <h1 class="expiry-title">兑奖须知详情</h1>
    <p class="expiry-context">
      1、单张彩票中奖金额高于300000元者，须持中奖彩票和本人有效身份证件，在60天内，到河南省福利彩票发行中心兑奖。
      <br> 2、单张彩票中奖金额在10000元至300000元者，须持中奖彩票和本人身份有效证件，在60天内，到当地福利彩票发行管理站兑奖。
      <br> 3、单张彩票中奖金额在10000元以下，在60天内须持中奖彩票到任一投注站兑奖。
      <br> 4、兑奖有效期：60天
      <br> 5、兑奖时间：8:30--12:00，15:00--17:30（周六、周日照常兑奖）。
      <br> 6.北京市福利彩票发行管理中心地址:北京市朝阳区华严里8号 北京市福利彩票发行中心大楼
      <br> 7.咨询电话:010-8202 5099
      <br>
    </p>
    <xc-footer></xc-footer>
  </div>
</template>
<script>
import xcFooter from '@/components/footer/footer';
export default {
  name: 'expiry',
  data() {
    return {};
  },
  components: {
    xcFooter
  }
};
</script>
<style scoped lang="less">
.expiry {
  width: 100%;
  height: 100%;
  padding: 0.1rem;
  box-sizing: border-box;
  background-color: #fff;
  &-title {
    font-size: 0.16rem;
    color: #333;
  }
  &-context {
    font-size: 0.14rem;
    color: #666;
    line-height: 0.28rem;
  }
}
</style>
