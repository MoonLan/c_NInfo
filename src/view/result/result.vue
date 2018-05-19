<template>
  <div class="result">
    <loading :show="loading" text="加载中"></loading>
    <div class="tab-wraper">
      <div class="tab">
        <span :class="{active:tabIndex==i}" v-for="(item,i) in lotteryList" :key="i" @click="changeMenu(i,item.id)">{{item.name}}</span>
      </div>
    </div>
    <div class="result-section">
      <ul class="result-list">
        <li v-for="(item,i) in lotteryRes" :key="i">
          <p>
            第{{item.expect}}期 {{utils.formatDate(new Date(item.opentimestamp*1000),'YY-MM-DD')}}
          </p>
          <ul class="cp-res">
            <li v-for="(v,k) in item.result" :key="k" :class="{blue:isBlue(lotteryList[tabIndex].key,k)}">{{v}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Loading } from 'vux';
import { lotteryList } from '../../services/lotteryList';
export default {
  name: 'result',
  data() {
    return {
      tabIndex: 0,
      lotteryList: lotteryList,
      lotteryRes: [],
      loading: false
    };
  },
  components: {
    Loading
  },
  created() {
    this.tabIndex = this.getType(this.$route.query.code);
    this.getData();
  },
  methods: {
    getType(code) {
      if (!code) {
        return 0;
      }
      switch (code) {
        case 'ssq':
          return 0;
          break;
        case 'dlt':
          return 1;
          break;
        case 'fc3d':
          return 2;
          break;
        case 'pl3':
          return 3;
          break;
        case 'pl5':
          return 4;
          break;
      }
    },
    getLotteryName(v) {
      return lotteryList.find(c => c.key == v).name;
    },
    isBlue(type, k) {
      if (type == 'ssq' && k == 6) {
        return true;
      } else if ((type == 'dlt' && k == 5) || (type == 'dlt' && k == 6)) {
        return true;
      } else {
        return false;
      }
    },
    changeMenu(v, id) {
      this.tabIndex = v;
      this.getData();
    },
    getData() {
      const type = this.lotteryList[this.tabIndex].key;
      this.loading = true;
      this.$store.dispatch('result/lotteryRes', type).then(r => {
        if (!r) {
          setTimeout(() => {
            this.getData();
          }, 3000);
          this.lotteryRes = [];
          return false;
        }
        r.data.forEach(v2 => {
          let result = v2.opencode.replace(/\+/g, ',');
          v2.result = result.split(',');
        });
        this.lotteryRes = r.data;
        this.loading = false;
      });
    }
  },
  watch: {
    $route: {
      handler(v) {
        this.tabIndex = this.getType(v.query.code);
        this.getData();
      },
      deep: true
    }
  }
};
</script>
<style lang="less" scoped>
@import url('./result');
</style>