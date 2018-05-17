<template>
  <div class="header-box">
    <div class="header">123</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import url('../../assets/style/color');
.header-box {
  height: 0.4rem;
  & > .header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.16rem;
    color: #fff;
    text-align: center;
    background-color: @bgColor;
  }
}
</style>