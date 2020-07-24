import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes} from './router'
import VueResource from 'vue-resource'

//配置router
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
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
