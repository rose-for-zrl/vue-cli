<template>
    <div class="container">
        <app-header></app-header>
        <div>
             <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppHeader from './Header'
    export default {
        components: {
            AppHeader
        }
    }
</script>

<style scoped>
   
</style>