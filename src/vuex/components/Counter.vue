<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>

    import { mapMutations} from 'vuex';
    export default {
        methods: {
            // increment() {
            //     //this.$emit('updated', 1);  //普通子类修改父类属性
            //     //this.$store.state.counter ++; //通过vuex state修改属性
            //     this.$store.commit("incrementCounter");  //通过 vuex mutations 执行方法修改
            // },
            // decrement() {
            //     // this.$emit('updated', -1);
            //     //this.$store.state.counter --;
            //     this.$store.commit("decrementCounter");
            // }
            ...mapMutations({
               increment: "incrementCounter",
               decrement: "decrementCounter"
            })
        }
    }
</script>