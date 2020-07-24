<template>
<div class="row">
    <div class="col-xs-12 col-sm-12 col-sm-offset-2 col-md-6 col-md-offset-3">
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="fruit in fruitFilter">{{ fruit }}</li>
        </ul>
    </div>
</div>
</template>

<script>
import {fruitMixin} from './fruitMixin'
export default {
    mixins: [fruitMixin],
     created() {
        console.info('List created');
     }
}
</script>

<style scoped>

</style>