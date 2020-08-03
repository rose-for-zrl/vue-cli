<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <div>User Age: {{ useAge }}</div>
        <button @click="resetAge">ResetAge</button>
    </div>
</template>

<script>
import eventBus from '../../Shared/Bus.vue'
    export default {
        data:function(){
           return {
                useAge: ''
           }
        },
        methods: {
            resetAge(){
                this.useAge = 30;
                //eventBus.$emit("userAgeWarReset", this.userAge);
                eventBus.changeAge(this.useAge);
            }
        },
        created() {
            this.useAge = eventBus.useAge
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
