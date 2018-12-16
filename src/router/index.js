import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Member from '@/components/member/member'
import Search from '@/components/search/search'
import Shopcar from '@/components/shopcar/shopcar'
import NewsList from "@/components/news/newslist"
import NewsDetail from "@/components/news/newsdetail"
import PhotoList from "@/components/photo/photolist"
import PhotoDetail from "@/components/photo/photodetail"
import GoodsList from "@/components/goods/goodslist"
import GoodsDetail from "@/components/goods/goodsdetail"

//import GoodsPhotoInfo from "@/components/goods/goodsphotoinfo"
import GoodsComment from "@/components/goods/goodscomment"
Vue.use(Router)
// 注册全局组件 router-view、router-link
// 挂载Vue.prototype.$router||$route
// 未来所有的组件中的this对象，就具备该属性，所有的this对象其实就是vue的子类对象

export default new Router({
  routes: [
    { 
      path: '/',
      redirect:{name:'home'}
    },
  	{
  		path: '/home',
  		name: 'home',
  		component: Home
  	},
  	{
  		path: '/member',
  		name: 'member',
  		component: Member
  	},
  	{
  		path: '/search',
  		name: 'search',
  		component: Search
  	},
  	{
  		path: '/shopcar',
  		name: 'shopcar',
  		component: Shopcar
  	},
    {
      name:"news.list",
      path:"/news/list",
      component:NewsList
    },
    {
      name:'news.detail',
      path:'/news/newsdetail',
      component:NewsDetail
    },
    {
      name:"photo.list",
      path:"/photo/photolist/:categoryId",
      component:PhotoList
    },
    {
      name:"photo.detail",
      path:'/photo/photodetail',
      component:PhotoDetail
    },
    {
      name:"goods.list",
      path:"/goods/goodslist",
      component:GoodsList
    },
    {
      name:"goods.detail",
      path:"/goods/goodsdetail/:id",
      component:GoodsDetail
    },
    {
      name:"photo.info",
      path:"/goods/goodsphotoinfo",
      component:NewsDetail
    },
    {
      name:"goods.comment",
      path:"/goods/goodscomment",
      component:GoodsComment
    }
  ]
})
