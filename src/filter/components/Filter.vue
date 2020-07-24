<template>
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Filter & Mixins</h1>
            <p> {{ text | toUppercase }}</p>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-sm-offset-2 col-md-6 col-md-offset-3">
            <input type="text" v-model="filterText">
            <ul>
                <li v-for="fruit in fruitFilter">{{ fruit }}</li>
            </ul>
        </div>
    </div>
    <hr>
    <app-list></app-list>
    <hr>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-sm-offset-2 col-md-6 col-md-offset-3">
            <p> {{ someText | filterReverse }}</p>
            <p> {{ someText | caluclateLength }}</p>
            <p> {{ caluclateLength }}</p>
        </div>
    </div>
</div>
</template>

<script>
import AppList from './List'
import {fruitMixin} from './fruitMixin'
import Vue from 'vue'

export default {
    data() {
        return {
            text: 'Hello Filter!',
            someText: 'Some Text!'
        }
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        },
        filterReverse(value) {
            return value.split("").reverse().join("");
        }
    },
    components: {
        AppList
    },
    mixins: [fruitMixin],
    computed: {
        caluclateLength() {
            return this.someText + "(" + this.someText.length + ")";
        }
    }
   
}

//创建全局混入
Vue.mixin({
    created() {
        console.info('Global Mixin is created!');
    }
});
Vue.filter(
    'caluclateLength', (value) =>{
        return value + "(" + value.length + ")";
    }
)
</script>

<style scoped>

</style>