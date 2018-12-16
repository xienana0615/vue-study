<template>
	<div>
		<nav-bar title="图文列表"></nav-bar>
		<div class="p-header">
			<ul>
				<li><a href="javascript:;" @click="loadImgsByCategoryId(0)">全部</a></li>
				<li v-for="category in categorys" :key="category.id">
				<a href="javascript:;" @click="loadImgsByCategoryId(category.id)">{{category.title}}</a>
				</li>
			</ul>
		</div>
		<div>
			<ul>
				<li v-for="(photo,index) in photolist" :key="index">
					<router-link :to="{name:'photo.detail',query:{id:photo.id}}">
						<img v-lazy="photo.img_url">
						<p>
							<span>{{photo.title}}</span>
							<br/>
							<span v-html="photo.content"></span>
						</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
 data () {
	 return {
	 	photolist:[],
	 	categorys:[]
	 }
 },
 created(){
 	var categoryId=this.$route.params.categoryId;
 	//console.log(categoryId);
 	this.loadImgsByCategoryId(categoryId);
 	this.loadImgById(categoryId);
 	this.$axios.get("getimgcategory")
 	.then(res=>{
 	//console.log(res.data.message);
 	this.categorys=res.data.message;
 	})
 	.catch(err=>{
 	console.log(err);
 	})
 },
 beforeRouteUpdate(to,from,next){
 console.log(to);
 this.loadImgById(to.params.categoryId);
 next();
 },
 methods:{
 loadImgsByCategoryId(categoryId){
 //console.log(categoryId);
	 this.$router.push({
	 name:"photo.list",
	 params:{
	 	categoryId
	 }
	 });
},
loadImgById(id){
console.log(id);
 	this.$axios.get("getimages/"+id)
 	.then(res=>{
 		console.log(res.data.message);
 		this.photolist=res.data.message;
 		if(this.photolist.length==0){
 		this.$toast({
 			success:"请求完成，但是数据为空"
 		})
 		}
 	})
 	.catch(err=>{
 		console.log(err);
 	})
}
}
}
</script>
<style scoped>
.p-header ul li{
	display:inline-block;
	margin:5px;
	padding:5px;
}
</style>