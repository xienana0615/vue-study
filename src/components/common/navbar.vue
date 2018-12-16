<template>
	<div class="cms-s-header">
		<h1 @click="goback"><<</h1>
		<h1 class="page-title">{{title}}</h1>
	</div>
</template>
<script>
export default {
 name:"nav-bar",
 data () {
	 return {
	 	
	 }
 },
 props:['title'],
 methods:{
 	goback(){
 		this.$router.go(-1);
 	}
 },
}
</script>
<style scoped>
.cms-s-header{
	height:40px;
	background-color:#f7f7f7;
	text-align:center;
}
.cms-s-header h1{
	display:inline-block;
	margin:0;
	padding:0;


}
</style>