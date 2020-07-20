<template>
    <div >
        <slot-child>
            <h2 slot="title">{{ title }}</h2>
            <p slot="content">{{ content }}</p>
        </slot-child>
    </div>
</template>

<script>
import SlotChild from './SlotChild'
export default {
    data: function(){
        return {
            title: 'The Slot',
            content: 'is wonderful!'
        }
    },
    components:{
        SlotChild
    }
}
</script>

<style scoped>

</style>
