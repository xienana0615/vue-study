<template>
	<div>
		<nav-bar title="新闻列表"></nav-bar>
		<ul>
			<li v-for="(news,index) in newslist" :key="index">
			<router-link :to="{name:'news.detail',query:{id:news.id}}">
				<img :src="news.img_url"/>
				<div>
					<span>{{news.title}}</span>
					<div>
						<p>点击数：{{news.click}}</p>
						<p>发表时间：{{news.add_time|covertTime('YYYY-MM-DD')}}</p>
					</div>
				</div>
			</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
 data () {
	 return {
	 	newslist:[]
	 }
 },
 created(){
 	this.$axios.get("getnewslist")
 	.then(res=>{
 		//console.log(res.data.message);
 		this.newslist=res.data.message;
 	})
 	.catch(err=>{
 		console.log(err);
 	})
 }
}
</script>
<style scoped>
</style>