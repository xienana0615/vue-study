let obj={};
//获取所有商品数据
obj.getGoodsList=function (){
	return JSON.parse(window.localStorage.getItem("goodsList")||"{}");

}
//保存商品
obj.saveGoods=function(goodsList){
	window.localStorage.setItem("goodsList",JSON.stringify(goodsList));
}
//新增一个商品
obj.add=function(goods){
	//判断当前goodsList中是否包含该商品责，有则添加，无则赋值
	let goodsList=this.getGoodsList();
	console.log(goodsList);
	console.log(goods);
	if(goodsList[goods.id]){
		goodsList[goods.id]+=goods.num;
	}else{
		goodsList[goods.id]=goods.num;
	}
	this.saveGoods(goodsList);
}
//获取购物车数量总数
obj.getTotalCount=function(){
	let goodsList=this.getGoodsList();
	console.log(goodsList);
	let values=Object.values(goodsList);
	console.log(values);
	let sum=0;
	values.forEach(val=>{
		sum+=val;
	});
	return sum;

}
export default obj;