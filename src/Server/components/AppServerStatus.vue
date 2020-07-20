<template>
    <div>
        <h1>Server Status: {{ status }}</h1>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            status: 'Denger Status!'
        }
    },
    methods: {
        changeStatus(){
            this.status = 'Normal Status';
        }
    },
}
</script>