<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <!-- <app-result :counter="counter"></app-result> -->
                <app-result></app-result>
                <hr>
                <!-- <app-counter @updated="counter  += $event"></app-counter> -->
                <app-counter></app-counter>
            </div>
        </div>
    </div>
</template>

<script>
import Counter  from './components/Counter';
import Result from './components/Result';
export default {
    // data(){
    //     return {
    //         counter: 0
    //     }
    // },
    components: {
        AppCounter: Counter,
        AppResult: Result
    }
}
</script>

<style scoped>

</style>