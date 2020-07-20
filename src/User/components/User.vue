<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change myName</button>
        <div>My Name: {{ name }}</div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :myName="name"
                @nameWasReset="nameWasReset"
                :resetFu = "resetName"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return {
                name: 'Max'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName() {
                this.name = 'Rose';
            },
            nameWasReset($event) {
                this.name = $event;
            },
            resetName() {
                this.name = 'LiLi';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
