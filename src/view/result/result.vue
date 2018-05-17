<template>
  <div class="result">
    <div class="tab-wraper">
      <div class="tab">
        <span :class="{active:tabIndex==i}" v-for="(item,i) in tabList" :key="i" @click="changeMenu(i,item.id)">{{item.name}}</span>
      </div>
    </div>
    <div class="result-section">
      <h1>
        比赛结果
      </h1>
      <ul class="result-list">
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
export default {
  name: 'result',
  data() {
    return {
      tabIndex: 0,
      tabList: [
        { name: '首页', id: 'home' },
        { name: '资讯', id: 'info' },
        { name: '资讯', id: 'info' },
        { name: '资讯', id: 'info' },
        { name: '资讯', id: 'info' },
        { name: '资讯', id: 'info' }
      ]
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
@import url('./result');
</style>