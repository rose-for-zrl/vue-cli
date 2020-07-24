<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Build-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some Strong Text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom directives</h1>
                <p v-highlight:backgroundColor.delayed= "'gray'">Color this</p>
                <p v-local-highlight:backgroundColor.delayed.blink= "{mainColor: 'blue', secondColor : 'green', delay : 500}">Color this</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-sm-offset-2 col-md-6 col-md-offset-3">
                <button class="btn btn-primary" v-customOn:click="clicked">Click Me!</button>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div style="width: 100px; height: 100px; background-color: green"
                    v-customOn:mouseleave="mouseLeave" v-customOn:mouseenter="mouseEnter"></div>
            </div>
         </div>
    </div>
</template>

<script>

import AppMain from './Directive'
export default {
    components: {
        AppMain
    },
    directives: {
        customOn: {
            bind(el, binding) {
                // el.onclick = function(){
                //     binding.value();
                // }
                const type = binding.arg;
                const fn = binding.value;
                el.addEventListener(type, fn);
            }
        },
        'local-highlight': {
            bind(el, binding, vnode) {
                let delay = 0;
                if(binding.modifiers['delayed']){
                    delay = 3000;
                }
                if(binding.modifiers['blink']){
                    let mainColor = binding.value.mainColor;
                    let secondColor = binding.value.secondColor;
                    let currentColor = mainColor;
                    setTimeout(() =>{
                        setInterval(() =>{
                            currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                            if(binding.arg == 'backgroundColor'){
                                el.style.backgroundColor = currentColor;
                            }else {
                                el.style.color = currentColor;
                            }
                        }, binding.value.delay);
                    }, delay);
                }else {
                    setTimeout(() =>{
                        if(binding.arg == 'backgroundColor'){
                            el.style.backgroundColor = binding.value.mainColor;
                        }else {
                            el.style.color = binding.value.mainColor;
                        }
                    }, delay);
                }
                
            }
        }
    },
    methods: {
        clicked(){
            alert("This is a Cliecked!");
        },
        mouseLeave(){
            console.info('mouseLeave');
        },
        mouseEnter(){
            console.info('mouseEnter');
        }
    }
}
</script>

<style scoped>

</style>