// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import myul from '@/components/common/myul'
import myli from '@/components/common/myli'
import Moment from 'moment'
import navbar from '@/components/common/navbar'
import VuePreview from 'vue-preview'
import common from "@/components/common/common"
import myswipe from "@/components/common/myswipe"
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://www.sinya.online/api/'
Vue.use(MintUI)
Vue.component(myul.name,myul);
Vue.component(myli.name,myli);

Vue.filter('covertTime',function(data,formatStr){
	return Moment(data).format(formatStr);
})
Vue.filter('relativeTime',function(previousTime){
	return Moment(previousTime).fromNow();
})
Vue.component(navbar.name,navbar);
Vue.use(VuePreview);
Vue.component(common.name,common);
// Axios.interceptors.request.use(function(config){
// 	MintUI.Indicator.open({
// 		text:"玩命加载中。。。"
// 	});
// 	return config;
// });
Axios.interceptors.response.use(function(response){
//	MintUI.Indicator.close();
	return response;
});
//处理字符串过长的过滤器
Vue.filter("convertStr",function(str,count){
	return str.substring(0, count)+"...";
});
Vue.component(myswipe.name,myswipe);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
