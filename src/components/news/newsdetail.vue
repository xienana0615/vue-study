<template>
	<div>
		<nav-bar :title="title"></nav-bar>
		<div>
			<p>{{newsDetail.title}}</p>
			<div>
				<span>{{newsDetail.click}}次点击</span>
				<span>分类：</span>
				<span>添加时间：{{newsDetail.add_time|covertTime("YYYY-MM-DD")}}</span>
			</div>
		</div>
		<div class="news-content" v-html="newsDetail.content"></div>
	</div>
</template>
<script>
export default {
 data () {
	 return {
	 	newsDetail:{},
	 	title:""
	 }
 },
 created(){
	 let id=this.$route.query.id;
	 console.log(id);
	 this.$axios.get("getnew/"+id)
	 .then(res=>{
	 console.log(res);
	 this.newsDetail=res.data.message[0];
	 console.log(this.newsDetail);
	 })
	 .catch(err=>{
	 console.log(err);
	 })
 },
 //路由确认前，组件渲染前的守卫函数
 beforeRouteEnter (to,from ,next){
 	console.log(to);
 	console.log(from);
 	//判断from 万一from的name是空，说明是粘贴地址栏
 	//继续判断，根据to来设置title
 	//如果from是新闻列表，那么title就是新闻详情，如果from是商品详情，那么title就是商品图文详情
 	let title="";
 	if(from.name==null){
 		if(to.name=="news.detail"){
 			title="新闻详情"
 		}else if(to.name=="photo.detail"){
			title="商品图文介绍"
 		}
 	}else if(from.name=="news.list"){
 		title="新闻详情"
 	}else if(from.name=="goods.detail"){
 		title="商品图文介绍"
 	}
 	next(vm=>{
 		vm.title=title;
 	});
 }
}
</script>
<style scoped>
</style>