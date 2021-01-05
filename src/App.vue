<template>
  <div id="app">
    <!-- <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" /> -->
    <Footer />
    <router-view/>
  </div>
</template>
<script>
// 导入底部导航组件
import Footer from '@/components/Navigation/Footer'
// import uri from '@/config/uri'

// 导入vant
// import Vue from 'vue';
// import { Calendar, cell} from 'vant';
// Vue.use(Calendar);
// Vue.use(cell);
export default {
  // 注册组件
  components:{
    Footer,
  },
  // vant测试
  // data() {
  //   return {
  //     date: '',
  //     show: false,
  //   };
  // },
  // methods: {
  //   formatDate(date) {
  //     return `${date.getMonth() + 1}/${date.getDate()}`;
  //   },
  //   onConfirm(date) {
  //     this.show = false;
  //     this.date = this.formatDate(date);
  //   },
  // },
  created(){
    // this.$http.get(uri.getCities).then(ret => console.log(ret))
  }
}
</script>
<style lang="scss">

</style>
