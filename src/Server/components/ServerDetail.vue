<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if='!server'>Please select a Server</p>
        <p v-else>Server ID: {{server.id}},Server Status: {{server.status}}</p>
        <hr>
        <button @click="changeNormal">Change Normal</button>
    </div>
</template>

<script >

import eventBus from '../../Shared/Bus'

export default {
    data: function() {
        return {
            server: null
        }
    },
    created(){
        eventBus.$on('serverSelected', data =>{
            this.server = data;
        })
    },
    methods: {
        changeNormal() {
            this.server.status = 'Normal';
        }
    }
}
</script>