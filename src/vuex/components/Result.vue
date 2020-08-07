<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
    
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
       // props: ['counter']
       computed: {
           ...mapGetters([
                'doubleCounter',
                'stringCounter'
           ]),
           ourOwn() {
               return '自己的计算属性';
           }
       }
    }
</script>