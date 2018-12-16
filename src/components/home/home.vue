<template>
	<div>
		<!-- <mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(img,index) in imgs" :key="index">
		  	<img :src="img.img||img.src">
		  </mt-swipe-item>	  
		</mt-swipe> -->
		<my-swipe url='getlunbo'></my-swipe>
		<div class="grid">
			<my-ul>
				<my-li v-for="(grid,index) in grids" :key="index">
					<router-link :to="grid.router">
						<span :class="grid.className"></span>
						<div>{{grid.title}}</div>
					</router-link>
				</my-li>
			</my-ul>
		</div>
	</div>
</template>
<script>
export default {
 data () {
 	return {
 		imgs:[],
 		grids:[
 			{className:'cms-news',title:'新闻资讯',router:{name:'news.list'}},
 			{className:'cms-news',title:'图文分享',router:{name:'photo.list',params:{categoryId:0}}},
 			{className:'cms-news',title:'商品展示',router:{name:'goods.list',query:{id:1}}},
 			{className:'cms-news',title:'留言反馈',router:{name:'news.list'}},
 			{className:'cms-news',title:'搜索资讯',router:{name:'news.list'}},
 			{className:'cms-news',title:'联系我们',router:{name:'news.list'}},
 		]
 	}
 },
 created(){
 	// this.$axios.get("getlunbo")
 	// .then(res=>{
 	//    // console.log(res);
 	// 	this.imgs=res.data.message;
 	// 	console.log(this.imgs);
 	// })
 	// .catch(err=>{
 	// console.log(err);
 	// })
 }
} 
</script>
<style scoped>

.cms-news{
	display:inline-block;
	width:40px;
	height:40px;
	border:1px solid blue;
	margin-top:5px;
}
</style>
