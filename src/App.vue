<template>
    <div class="container">
        <app-header></app-header>
        <div>
            <!-- <router-view name="header-top"></router-view> -->
             <transition name="slide" mode="out-in">
             <router-view></router-view>
             </transition>
             <!-- <router-view name="header-bottom"></router-view> -->
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
   .slide-leave-active {
       transition: opacity 1s ease;
       opacity: 0;
       animation: slide-out 1s ease-out forwards;
   }

   .slide-leave {
       opacity: 1;
       transition: translateX(0);
   }

   .slide-enter-active {
       animation: slide-in 1s ease-out forwards;
   }

   @keyframes slide-out {
       0% {
           transform: translateY(0);
       }
       100% {
           transform: translateY(-30px);
       }
   }

   @keyframes slide-in {
       0% {
           transform: translateY(-30px);
       }
       100% {
           transform: translateY(0px);
       }
   }
</style>