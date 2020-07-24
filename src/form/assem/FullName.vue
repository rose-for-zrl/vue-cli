<template>
    <div>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" :value="fistName" @input="nameChanged(true, $event)">
         </div>
        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" :value="lastName" @input="nameChanged(false, $event)">
         </div>
    </div>
</template>

<script>
export default {
    props: {
        'fullName':String
    },
    data() {
        return {
            name: null
        }
    },
    methods: {
        nameChanged(isFist, event) {
            if(isFist){
                this.name = event.target.value + ' ' + this.lastName;
            }else {
                this.name = this.fistName + ' ' + event.target.value;
            }
            this.$emit('input', this.name);
        }
    },
    computed: {
        fistName(){
            return this.fullName.split(' ')[0];
        },
        lastName() {
            return this.fullName.split(' ')[1];
        }
    }
}
</script>

<style scoped>

</style>