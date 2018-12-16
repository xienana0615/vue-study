<template>
	<div>
		<nav-bar title="商品列表"></nav-bar>
		<mt-loadmore auto-Fill="false" :bottom-method="loadBottom" ref="loadmore" :bottom-all-loaded="isAllLoaded">
		<ul>
			<li v-for="goods in goodslist" :key="goods.id">
				<router-link :to="{name:'goods.detail',params:{id:goods.id}}">
					<img :src="goods.img_url">
					<div>{{goods.title|convertStr(24)}}</div>
					<div>
						<span>¥{{goods.market_price}}</span>
						<s>¥{{goods.sell_price}}</s>
					</div>
					<div>
						<div>热卖中</div>
						<div>剩{{goods.stock_quantity}}件</div>
					</div>
				</router-link>
			</li>
		</ul>
		</mt-loadmore>
	</div>
</template>
<script>
export default {
 data () {
	 return {
	 	goodslist:[],
	 	page:1,
	 	isAllLoaded:false
	 }
 },
 created(){
 		this.page=this.$route.query.id|"1";
	 	this.loadByPage();
 },
 methods:{
	loadBottom(){
		console.log("上拉加载被执行");
		//this.concatByPage();
		//this.$refs.loadmore.onBottomLoaded();
	},
	loadByPage(){
		this.$axios.get("getgoods?pageindex="+this.page)
	 	.then(res=>{
	 	console.log(res.data.message);
	 	this.goodslist=res.data.message;
	 	this.page++;
	 	})
	 	.catch(err=>{
	 	console.log(err);
	 	})	
	},
	// concatByPage(){
	// 	this.$axios.get("getgoods?pageindex="+this.page)
	//  	.then(res=>{
	//  		if(res.data.message.length==0){
	//  			//loadmore 的禁止函数调用的属性来控制
	//  			this.isAllLoaded=true;
	//  			this.$toast("没有更多数据了");
	//  		}
	//  	console.log(res.data.message);
	//  	this.goodslist=this.goodslist.concat(res.data.message);
	//  	//this.$refs.loadmore.onBottomLoaded();//通知元素重新定位
	//  	this.page++;
	//  	})
	//  	.catch(err=>{
	//  	console.log(err);
	//  	})	
	// }
 }

}
</script>
<style>

</style>