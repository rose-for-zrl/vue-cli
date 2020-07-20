<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <div>User Name : {{ switchName() }}</div>
        <!-- <div>User Age : {{ useAge() }}</div> -->
        <button @click="resetName">Reset Name</button>
        <button @click="resetFu()">Reset Name</button>
    </div>
</template>

<script>
import eventBus from '../../Shared/Bus.vue'
 export default {
        props:{
            myName: {
                type: String
            },
            resetFu: Function,
            useAge: ''
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = "Max";
                this.$emit("nameWasReset", this.myName);
            }
        },
        created() {
            this.useAge = eventBus.useAge;
            eventBus.$on('userAgeWarReset', (age) =>{
                 this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
