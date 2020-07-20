<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-header></app-header>
            </div>    
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-6">
                <servers></servers>
            </div>
            <div class="col-xs-6">
                <server-detail></server-detail>
            </div>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script >
import AppFooter from '../../Shared/components/Footer';
import AppHeader from '../../Shared/components/Header';
import Servers from './Servers';
import ServerDetail from './ServerDetail';
import AppServerStatus from './AppServerStatus';

export default {
    components: {
        AppFooter,
        AppHeader,
        Servers,
        ServerDetail,
        AppServerStatus
    }
}
</script>

<style scoped>
</style>