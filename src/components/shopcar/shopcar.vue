<template>
	<div>
		<nav-bar title="购物车"></nav-bar>
		<div>
			<ul>
				<li v-for="(goods,index) in shopcart" :key="goods.id">
					<mt-switch v-model="goods.isSelected"></mt-switch>
					<img :src="goods.thumb_path" alt="">
					<div>
						<p>{{goods.title}}</p>
						<div>
						<span>{{goods.sell_price}}</span>
						<span @click="substract(goods)">-</span>
						<span>{{goods.num}}</span>
						<span @click="add(goods)">+</span>
						<a href="javascript:;" @click="del(index)">删除</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div>
			<div>
				<p>总计(不含运费)：
				<span>已经选择商品{{payment.count}},总价{{payment.price}}元</span>
				</p>
			</div>
			<div>
				<mt-button type="danger" size="large">去结算</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
import GoodsTools from "@/goodstools";
export default {
  data () {
	 return {
	 shopcart:[]
	 }
 },
 created(){
	let goodsList=GoodsTools.getGoodsList();
	let ids=Object.keys(goodsList).join(",");
	this.$axios.get('goods/getshopcarlist/'+ids)
	.then(res=>{
		console.log(res);
		res.data.message.forEach(goods=>{
			if(goodsList[goods.id]){
				goods.num=goodsList[goods.id];
			}
			goods.isSelected=true;
		})
		this.shopcart=res.data.message;
		
	})
	.catch(err=>{
		console.log(err);
	})
 },
 methods:{
 	add(goods){
 		goods.num++;
 	},
 	substract(goods){
 		goods.num--;
 	},
 	del(index){
 		console.log(index);
 		this.shopcart.splice(index,1);
 	}
 },
 beforeRouteLeave(to,from,next){
 	if(confirm("亲，真的要离开吗")){
 		//保存当前的购物车数据
 		let obj={};
 		console.log(this.shopcart);
 		this.shopcart.forEach(goods=>{
 			obj[goods.id]=goods.num;
 		})
 		GoodsTools.saveGoods(obj);
 		next();
 	}else{
 		next(false);//取消导航
 	}
 },
 computed:{
	payment(){
		let price=0;
		let count=0;
		this.shopcart.forEach( goods=>{
			count+=goods.num;
			price+=goods.sell_price+goods.num;
		});
		return {
			count,
			price
		}

	}
 }
}
</script>
<style>

</style>
