import Home from './Home.vue';
import AppUser from './User/components/User.vue'; //数据双向绑定  两个不相关组件，传递数据  基础
import AppServer from './Server/components/AppServer'; // 
import AppSlot from './slot/components/SlotParent'; //slot component  动态指定子组件   数据传入子组件中
import AppBeauty from './beauty/components/Beauty'; //练习
import AppForm from './form/components/Form'; //表单
import AppDirective from './directive/Backgroud'; //directive  全局自定义指令   局部指令
import AppFilter from './filter/components/Filter'; //过滤器 及其替代方案 计算属性； 混入
import AppAnimation from './animation/components/Animation';//动画 过渡
import AppHttp from './vueResource/Http'; //使用vue-resource 做http交互

export const routes = [
    {path: '', component: Home},
    {path: '/user', component: AppUser},
    {path: '/server', component: AppServer},
    {path: '/slot', component: AppSlot},
    {path: '/beauty', component: AppBeauty},
    {path: '/form', component: AppForm},
    {path: '/directive', component: AppDirective},
    {path: '/filter', component: AppFilter},
    {path: '/animation', component: AppAnimation},
    {path: '/http', component: AppHttp}
];