import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes} from './router'
import VueResource from 'vue-resource'

//配置router
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {   //设置跳转到某个页面并定位到某个元素id
    if(savedPosition){ //如果回退，则回退到之前定位的位置
      return savedPosition;
    }
    if(to.hash){   
      return {selector: to.hash};
    }
  }
});

//设置每次路由跳转前执行方法
router.beforeEach((to, from, next) =>{
  console.info('global beforeEach');
  next();  //继续跳转
  // next(false);//停止跳转，停在当前页面
  // next("/");//重定向到某个路由页面
});

//配置http
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:8003/';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
