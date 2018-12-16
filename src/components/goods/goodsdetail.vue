<template>
	<div>
		<nav-bar title="商品详情"></nav-bar>	
		<my-swipe url="getthumimages/87"></my-swipe>
		<div>
			<ul>
				<li>
					<span>{{goodsinfo.title}}</span>
				</li>
				<li>市场价：<s>{{goodsinfo.market_price}}</s>
					销售价：<span>{{goodsinfo.sell_price}}</span>
				</li>
				<li>购买数量
					<span @click="substract">-</span>
					<span>{{pickNum}}</span>
					<span @click="add">+</span>
				</li>
				<li>
					<mt-button type="primary">立即购买</mt-button>
					<mt-button type="danger" @click="insertball">加入购物车</mt-button>
				</li>
			</ul>
		</div>
		<div></div>
		<div>
			<ul>
				<li>商品参数</li>
				<li>商品货号：{{goodsinfo.goods_no}}</li>
				<li>库存情况：{{goodsinfo.stock_quantity}}件</li>
				<li>上架时间：{{goodsinfo.add_time|covertTime('YYYY-MM-DD')}}</li>
			</ul>
		</div>
		<div>
			<ul>
				<li>
					<mt-button type="primary" size="large" @click="showPhotoInfo">图文介绍 </mt-button>
				</li>
				<li>
					<mt-button type="danger" size="large" plain @click="goodsComment">商品详情 </mt-button>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import EventBus from '@/EventBus';
import GoodsTools from "@/goodstools";
export default {
 data () {
	 return {
	 	goodsinfo:{},
	 	isExist:false,//小球
	 	pickNum:1
	 }
 },
 created(){
 	let imgid=this.$route.params.id;
 	this.$axios.get("goods/getinfo/"+imgid)
 	.then(res=>{
 		console.log(res.data.message);
 		this.goodsinfo=res.data.message[0];
 	})
 	.catch(err=>{
 		console.log(err);
 	})
},
methods:{
	insertball(){
		this.isExist=true;
		//通知app组件增加小球数量
		EventBus.$emit('addShopCar',this.pickNum);
		//添加到本地存储
		GoodsTools.add({
			id:this.goodsinfo.id,
			num:this.pickNum
		})
		
	},
	substract(){
		if(this.pickNum<=1){
			return;
		}
		this.pickNum--;
	},
	add(){
		if(this.pickNum>=this.goodsinfo.stock_quantity){
			return;
		}
		this.pickNum++;
	},
	showPhotoInfo(){
		this.$router.push({
			name:"photo.info",
			query:{
				id:this.$route.params.id
			}
		});
	},
	goodsComment(){
		this.$router.push({
			name:"goods.comment",
			query:{
				id:this.$route.params.id
			}
		});
	}

}
}

</script>
<style>

</style>