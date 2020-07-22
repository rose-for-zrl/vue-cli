<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
            <div class="col-xs-12">
                <app-server></app-server>
            </div>
            <div class="col-xs-12">
                <app-slot></app-slot>
            </div>
            <div class="col-xs-12">
                <app-beauty></app-beauty>
            </div>
            <div class="col-xs-12">
                <app-form></app-form>
            </div>
        </div>
    </div>
</template>

<script>
import AppUser from './User/components/User';
import AppServer from './Server/components/AppServer';
import AppSlot from './slot/components/SlotParent';
import AppBeauty from './beauty/components/Beauty';
import AppForm from './form/components/Form';

export default {
    components: {
        AppUser,
        AppServer,
        AppSlot,
        AppBeauty,
        AppForm
    }
}
</script>

<style scoped>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>