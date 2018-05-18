<template>
  <div class="result">
    <div class="tab-wraper">
      <div class="tab">
        <span :class="{active:tabIndex==i}" v-for="(item,i) in lotteryList" :key="i" @click="changeMenu(i,item.id)">{{item.name}}</span>
      </div>
    </div>
    <div class="result-section">
      <ul class="result-list">
        <li>
          <!-- <x-icon type="ios-arrow-up" size="50" class="xIcon"></x-icon> -->
          <!-- <x-icon type="ios-arrow-down" size="50"  class="xIcon"></x-icon> -->
          <p class="title">
            湖人 2018-08-08
          </p>
          <ul class="cp-res">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
        <li>
          <p class="title">
            湖人 2018-08-08
          </p>
          <ul class="cp-res">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { lotteryList } from "../../services/lotteryList";
export default {
  name: "result",
  data() {
    return {
      tabIndex: 0,
      lotteryList: lotteryList
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
@import url("./result");
</style>