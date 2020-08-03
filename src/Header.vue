<template>
    <nav class="navbar">
        
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact=""><a>主页</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>用户操作</a></router-link>
        <router-link to="/server" tag="li" active-class="active"><a>Server练习</a></router-link>
        <router-link to="/slot" tag="li" active-class="active"><a>Slot演示</a></router-link>
        <router-link to="/beauty" tag="li" active-class="active"><a>练习</a></router-link>
        <router-link to="/form" tag="li" active-class="active"><a>表单</a></router-link>
        <router-link to="/directive" tag="li" active-class="active"><a>自定义指令</a></router-link>
        <router-link to="/filter" tag="li" active-class="active"><a>过滤器、混入</a></router-link>
        <router-link to="/animation" tag="li" active-class="active"><a>动画、过渡</a></router-link>
        <router-link to="/http" tag="li" active-class="active"><a>http请求</a></router-link>
    </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>