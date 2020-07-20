<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script>
import AppUser from './User/components/User';
export default {
    components: {
        AppUser
    }
}
</script>

<style scoped>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>