//基于事件的同一个载体对象
import Vue from 'vue';
let EventBus=new Vue();
//$on(事件名,function(){})
//$emit(事件名，function(){})
export default EventBus;