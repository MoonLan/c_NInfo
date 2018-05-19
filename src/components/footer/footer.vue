<template>
  <div class="footer">
    <div class="footer-kefu">
      咨询电话:010-8202 5099
    </div>
    <div class="footer-location">
      福彩地址:北京市朝阳区华严里8号
    </div>
  </div>
</template>
<script>
export default {
  name: 'xc-footer',
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.footer {
  margin-top: 0.1rem;
  width: 100%;
  height: auto;
  background-color: #fff;
  &-kefu {
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #f4f3f8;
    color: #222;
    text-align: center;
  }
  &-location {
    line-height: 0.4rem;
    font-size: 0.14rem;
    color: #999;
    margin-top: 0.1rem;
    text-align: center;
  }
}
</style>