<template>
    <li class="list-group-item" 
        style="cursor: pointer"
        @click="serverSelected"
    >
        Server #{{ server.id }}
    </li>
</template>
<script >

import eventBus from '../../Shared/Bus'

export default {
    props: {
        'server': Object
    },
    methods: {
        serverSelected(){
            eventBus.$emit('serverSelected',this.server);
        }
    }
}
</script>