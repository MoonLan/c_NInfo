<template>
  <div class="header-box">
    <div class="header">
      <img src="../../assets/img/logo.png" class="back" @click="back" /> 资讯
    </div>
  </div>
</template>
<script>
export default {
  name: 'xc-header',
  methods: {
    back() {
      this.$router.push('/home');
    }
  }
};
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
    .back {
      position: absolute;
      left: 0.2rem;
      top: 0.1rem;
      display: block;
      width: 0.3rem;
      height: auto;
    }
  }
}
</style>