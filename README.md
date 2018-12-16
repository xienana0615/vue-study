# vue-project1

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


总结：
EventBus 就是一个new Vue
$emit
$on 
$once 
$off

路由守卫
	1：全局守卫：前端的权限控制中 next() next(false)
	2:后置路由

	路由独享的

	组件内的路由钩子函数
	1：进入前，根据过来的路由做判断，让组件做不同的显示next(vm=>{})
	2:路有更新（组件created不会被调用）
	路由参数的改变触发：？id=xxx /xxx/:id
	3:离开前（用户离开前的询问及保存）

slot:给子组件传入dom的时候也可以指定坑名
<span slot="xxx">1</span>
子组件内声明<slot name="xxx"></slot>

内置组件
keep-alive:缓存频繁的创建和销毁组件=》停用与激活
transition：给元素或组件添加过渡效果（js+css）

特殊函数
this.$nextTick(fn) 在生成dom以后的dom操作行为
比如：当前this.isExit=true;立刻操作这个元素不行
而需要在$nextTick中，因为当前代码执行的时候元素还未存在
this.$set(obj,key,value)手动通知vue数据响应式
this.$refs.xxx=> ref=xxx
元素获取的就是元素对象
组件获取的就是组件对象。xxx.$el获取dom对象
