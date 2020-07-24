<template>
<div class="container">
    <form>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http请求</h1>
                <hr>
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input type="text" id="email" class="form-control" v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="userName">UserName</label>
                    <input type="text" id="userName" class="form-control" v-model="user.userName">
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <input type="button" class="btn btn-primary" @click="submit" value="Submit"></input>
            </div>
            <hr>
             <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <input type="text" v-model="node">
                <input type="button" class="btn btn-primary" @click="getData" value="Get Data"></input>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <ul class="list-group">
                    <li class="list-group-item" v-for="user in users"> {{ user.email }} - {{ user.userName }} - {{ user.createTime }}</li>
                </ul>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: null,
                userName: null,
                createTime: null
            },
            users: [],
            resource: {},
            node: 'hello'
        }
    },
    methods: {
        submit() {
        //    this.$http.post('test/saveHello', this.user)
        //    .then(response => {
        //        console.info(response.json());
        //    },error => {
        //        console.info(error);
        //    })
            // this.resource.save({},this.user);
            this.resource.saveHello(this.user);
        },
        getData() {
            // console.log(this.$http.options.root);
            // this.$http.get('test/hello')
            // .then(response => {
            //    return response.json();
            // })
            // .then(result =>{
            //     console.info(result);
            //     this.users = result.data;
            // })
            this.resource.getHello({node: this.node})
                .then(response => {
                return response.json();
                })
                .then(result =>{
                    console.info(result);
                    this.users = result.data;
                });
        }
    },
    created() {
        const customActions = {
            saveHello: {method: 'POST', url: 'test/saveHello'},
            getHello: {method: 'GET', url: 'test/{node}'}
        }
        this.resource = this.$resource('test/h', {}, customActions);
    }
}
</script>

<style scoped>

</style>