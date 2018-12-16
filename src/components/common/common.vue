<template>
	<div>
		<div>
			<ul>
				<li>
					<div>
						<span>提交评论</span>
						<span>返回</span>
					</div>
				</li>
				<li>
					<textarea style="width:100%" v-model="newcommon"></textarea>
				</li>
				<li>
					<mt-button size="large" type="primary" @click="sendMsg">发表评论</mt-button>
				</li>
				<li>
					<div>
						<span>评论列表</span>
						<span>44条评论</span>
					</div>
				</li>
			</ul>
			<ul>
				<li v-for="(msg,index) in msgs" :key="index">{{msg.user_name}}:{{msg.content}}{{msg.add_time|covertTime("YYYY-MM-DD")}}</li>
			</ul>
			<mt-button type="danger" size="large" plain @click="loadMore(page)">加载更多</mt-button>
		</div>
	</div>
</template>
<script>
export default {
name:"common",
 data () {
	 return {
	 	msgs:[],
	 	page:1,
	 	newcommon:""
	 }
 },
props:['cid'],
created(){
	//console.log(cid);
	this.page=this.$route.query.page||"1";
	this.loadMore();
},
methods:{
	//firstLoad(){
	//console.log(this.page);
	//this.$axios.get("getcomments/"+37+"?pageindex="+this.page)
	//.then(res=>{
	//	if(res.data.message.length==0){
	//	this.$toast("没有数据了")
	//	}else{
	//	this.msgs=res.data.message;
	//	console.log(this.msgs);
	//	this.page++;
	//	}
	//})
	//.catch(err=>{
	//	console.log(err);
	//})
	//},
	loadMore(page){
	console.log(this.page);
	this.$axios.get("getcomments/"+37+"?pageindex="+this.page)
	.then(res=>{
		if(res.data.message.length==0){
		this.$toast("没有数据了")
		}else {
			if(page){
				this.msgs=this.msgs.concat(res.data.message);
			}else{
				this.msgs=res.data.message;
			}
			console.log(this.msgs);
			this.page++;
		}
	})
	.catch(err=>{
		console.log(err);
	})
	},
	sendMsg(){
		console.log(this.newcommon);
		if(this.newcommon.trim()==""){
		return this.$toast("评论信息不能为空")
		}
		this.$axios.post("postcomment/"+"37","content="+this.newcommon)
		.then(res=>{
			console.log(res);
			this.page=1;
			this.loadMore();
			this.newcommon="";
		})
		.catch(err=>{
		console.log(err);
		})
	},

}
}
</script>
<style>

</style>