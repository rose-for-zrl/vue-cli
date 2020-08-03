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

//配置http
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:8003/';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
