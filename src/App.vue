<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
                <app-server></app-server>
                <app-slot></app-slot>
            </div>
        </div>
    </div>
</template>

<script>
import AppUser from './User/components/User';
import AppServer from './Server/components/AppServer';
import AppSlot from './slot/components/SlotParent';
export default {
    components: {
        AppUser,
        AppServer,
        AppSlot
    }
}
</script>

<style scoped>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>