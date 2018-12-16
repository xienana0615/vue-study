<template>
	<div>
		<nav-bar title="图文详情"></nav-bar>
		<div>
			<p>{{info.title}}</p>
			<span>发起日期：{{info.add_time|covertTime("YYYY-MM-DD")}}</span>
			<span>{{info.click}}次浏览</span>
			<span>分类：民生经济</span>
		</div>
		<!--<ul>-->
		<vue-preview :slides="images"></vue-preview>
			<!--<li v-for="(image,index) in images" :key="index">
			<img :src="image.src">
			</li>-->
		<!--</ul>-->
		<div>
			<p v-html="info.content"></p>
		</div>
		<common v-bind:cid="$route.query.id"></common><!--传值不成功，还没找到原因-->
	</div>
</template>
<script>
export default {
 data () {
	 return {
	 	info:{},
	 	images:[]
	 }
 },
 created(){
 	let id=this.$route.query.id;
 	this.$axios.get("getimageInfo/"+id)
 	.then(res=>{
 	    //console.log(res.data.message);
 		this.info=res.data.message[0];
 	})
 	.catch(err=>{
 	console.log(err);
 	})
 	this.$axios.get("getthumimages/"+id)
 	.then(res=>{
 		//console.log(res);
 		this.images=res.data.message;
 		this.images.forEach(image=>{
 			image.msrc=image.src;
 			image.w=600;
 			image.h=400;
 		})
 	})
 	.catch(err=>{
 		console.log(err);
 	})
 }
}
</script>
<style>

</style>