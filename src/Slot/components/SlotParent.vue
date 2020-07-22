<template>
    <div >

        <button @click="selectComponent = 'SlotChild'">SlotChild</button>
        <button @click="selectComponent = 'AppAuthor'">Author</button>
        <button @click="selectComponent = 'AppNew'">New</button>
        <hr>
        <p>SelectComponent: {{ selectComponent }}</p>
        <keep-alive>
        <component :is="selectComponent">
            <p>Defalut Content</p>
        </component>
        </keep-alive>
    </div>
</template>

<script>
import SlotChild from './SlotChild'
import AppAuthor from './Author'
import AppNew from './New'

export default {
    data: function(){
        return {
            title: 'The Slot',
            content: 'is wonderful!',
            selectComponent: 'SlotChild'
        }
    },
    components:{
        SlotChild,
        AppAuthor,
        AppNew
    }
}
</script>

<style scoped>

</style>
