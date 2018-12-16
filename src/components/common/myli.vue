<template>
	<li>
		<slot></slot>
	</li>
</template>
<script>
export default {
 name:'my-li',
 data () {
	 return {
	 
	 }
 }
}
</script>
<style scoped>
	li{
	list-style-type:none;
	float:left;
	width:33.3%;
	text-align:center;
	}
</style>