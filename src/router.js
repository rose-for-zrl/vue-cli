import Home from './Home.vue';
import AppHeader from './Header.vue';
// import AppUser from './User/components/User.vue'; //数据双向绑定  两个不相关组件，传递数据  基础
//懒加载
const AppUser = resolve => {
    require.ensure(['./User/components/User.vue'], () => {
        resolve(require('./User/components/User.vue'));
    });
};
import AppUserStar from './User/components/UserStart.vue';
import AppUserDetail from './User/components/UserDetail.vue';
import AppUserEdit from './User/components/UserEdit.vue';
import AppServer from './Server/components/AppServer'; // 
import AppSlot from './slot/components/SlotParent'; //slot component  动态指定子组件   数据传入子组件中
import AppBeauty from './beauty/components/Beauty'; //练习
import AppForm from './form/components/Form'; //表单
import AppDirective from './directive/Backgroud'; //directive  全局自定义指令   局部指令
import AppFilter from './filter/components/Filter'; //过滤器 及其替代方案 计算属性； 混入
import AppAnimation from './animation/components/Animation';//动画 过渡
import AppHttp from './vueResource/Http'; //使用vue-resource 做http交互
import AppVuex from './vuex/Vuex'; //vuex管理数据状态




export const routes = [
    {path: '',name: 'home', components: {  //定义路径名称 路由组件
        default: Home,
        'header-top': AppHeader
    }},
    {path: '/user',name: 'user', components:{
        default: AppUser,
        'header-bottom':AppHeader
    }, children: [   //子路由
        {path: '', component: AppUserStar},
        {path: ':id', component: AppUserDetail},
        {path: ':id/edit', component: AppUserEdit, name: "userEdit", beforeEnter: (to, form, next) =>{
            console.info("inside route setup");
            next();
        }}
    ]},
    {path: '/server', component: AppServer},
    {path: '/slot', component: AppSlot},
    {path: '/beauty', component: AppBeauty},
    {path: '/form', component: AppForm},
    {path: '/directive', component: AppDirective},
    {path: '/filter', component: AppFilter},
    {path: '/animation', component: AppAnimation},
    {path: '/http', component: AppHttp},
    {path: '/redirect-me', redirect: {name: 'user'}},  //重定向
    {path: '/vuex', component: AppVuex},
    {path: '*', redirect: {name: 'home'}}
];