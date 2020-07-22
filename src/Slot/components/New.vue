<template>
    <div>
       <h3> This is a New! </h3>
       <button @click="counter ++">Increase</button>
       <p>Counter: {{ counter }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            counter: 0
        }
    },
    destroyed() {
        console.log('destroyed!');
    },
    deactivated() {
        console.log('deactivated!');
    },
    activated() {
        console.log('activated!');
    }
}
</script>

<style scoped>
     
</style>