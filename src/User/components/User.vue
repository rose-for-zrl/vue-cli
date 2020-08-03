<template>
    <!-- <div class="component">
        <button class="btn btn-primary" @click="navigateToHome">Go To Home</button>
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
    </div> -->
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" @click="navigateToHome">Go To Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        data: function(){
            return {
                name: 'Max'
               // id: this.$route.params.id
            }
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
            },
            navigateToHome() {
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
