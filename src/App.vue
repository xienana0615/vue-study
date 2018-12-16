<template>
  <div>
    <mt-header title="我们的信息管理系统" fixed></mt-header>
    <div style="widtyh:100%;height:38px;"></div>
    <transition name="rv" mode="out-in">
    <router-view></router-view>
    </transition>  
    <div style="widtyh:100%;height:58px;"></div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/a.png" @click="changeHash">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/c.png" @click="changeHash">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcar">
        <img slot="icon" src="./assets/b.png" @click="changeHash">
        购物车<mt-badge type="error">{{num}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/d.png" @click="changeHash">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import EventBus from './EventBus.js';
import GoodsTools from "./goodstools.js";
export default {
  data () {
    return {
      selected: '',
      num:0
    }
  },
  created(){
    EventBus.$on("addShopCar",(data)=>{
      console.log(this);
      this.num=data;
    });
    console.log(GoodsTools.getTotalCount());
    this.num=GoodsTools.getTotalCount();//数据需要刷新
  },
  watch: {
    //selected (newV, oldV) {
    //  console.log(newV);
     // this.$router.push({
       // name:newV
      //})
    //}
  },
  methods:{
  changeHash(){
  //该调用早于子组件赋值给父组件的selected
  console.log(this.selected);
  //在vue完成渲染任务以后的行为
  this.$nextTick(function(){
   console.log(this.selected);
   this.$router.push({
    name:this.selected
   });
  })
  }
  }
}
</script>

<style scoped>

</style>
