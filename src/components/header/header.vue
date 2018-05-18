<template>
  <div class="header-wrapper">
    <div class="header">
      <img src="../../assets/img/logo.png" class="back" @click="goBack" /> 资讯
      <img src="../../assets/img/home.png" class="more" @click="showMore" />
    </div>
    <transition enter-active-class="fadeInDown" leave-active-class="fadeOutUp" mode="out-in">
      <div class="menu" v-if="state">
        <p>
          <label>开奖:
          </label>
          <span v-for="(item,i) in lotteryList" :key="i">{{item.name}}</span>
        </p>
        <p>
          <label>资讯:</label>
          <span>test</span>
          <span>test</span>
          <span>test</span>
          <span>test</span>
          <span>test</span>
          <span>test</span>
        </p>
        <p>
          <label>其他:</label>
          <span>test</span>
          <span>test</span>
          <span>test</span>
          <span>test</span>
          <span>test</span>
          <span>test</span>
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
import { lotteryList } from "../../services/lotteryList";
export default {
  name: "xc-header",
  data() {
    return {
      state: false,
      lotteryList: lotteryList
    };
  },
  methods: {
    goBack() {
      this.$router.push("/home");
    },
    showMore() {
      this.state = !this.state;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./header");
</style>