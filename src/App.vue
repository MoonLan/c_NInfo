<template>
  <div id="app">
    <xc-header></xc-header>
    <router-view />
  </div>
</template>

<script>
import xcHeader from '@/components/header/header';
export default {
  name: 'App',
  components: {
    xcHeader
  }
};
</script>

<style lang="less">
@import './assets/style/common';
[v-cloak] {
  display: none;
}
#app {
  width: 100%;
  height: 100%;
  font-size: 0.12rem;
}
</style>
