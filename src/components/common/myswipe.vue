		<template>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(img,index) in imgs" :key="index">
		  	<img :src="img.img||img.src">
		  </mt-swipe-item>	  
		</mt-swipe>
		</template>
<script>
	export default {
		name:"my-swipe",
		data(){
			return{
				imgs:{}
			}
		},
		props:['url'],
		created(){
			console.log(this.url);
			this.$axios.get(this.url)
		 	.then(res=>{
		 	    console.log(res);
		 		this.imgs=res.data.message;
		 		//console.log(this.imgs);
		 	})
		 	.catch(err=>{
		 	console.log(err);
		 	})
		}
	}
</script>
<style>
.mint-swipe{
	height:200px;
}
img {
	height:100%;
}
</style>