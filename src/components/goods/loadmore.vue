<template>
	<div>
		
		<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" ref="loadmore">
		  <ul>
		    <li v-for="(item,index) in list" :key="index">{{ item }}</li>
		  </ul>
		</mt-loadmore>
	</div>
		
</template>
<script>
export default {
 data () {
	 return {
	 	list:[1,2,3,4,5],
	 	topStatus:""
	 }
 },
 created(){

 },
 methods:{
	 loadTop(){
	 	this.$refs.loadmore.onTopLoaded();
	 },
	 handleTopChange(status){
	 	this.topStatus=status;
	 	console.log(status);
	 },
	 loadBottom(){
	 	//this.$refs.loadmore.onBottomLoaded();注释以后卡住，正确的方式是给list加元素，直到加满为止；
	 }
 }
}
</script>
<style>

</style>