<script>
    import Vue from 'vue';
    export default new Vue({
        data: {
            useAge: 27
        },
        methods: {
            changeAge(age) {
                this.$emit("userAgeWarReset", age);
            }
        }
    });
</script>