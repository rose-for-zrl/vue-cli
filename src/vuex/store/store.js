// vuex 状态管理
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:  {
        counter:  0
    },
    getters:  {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return  state.counter + " Clicks";
        }
    },
    mutations: {
        incrementCounter: state => {
            state.counter ++;
        },
        decrementCounter: state => {
            state.counter --;
        }
    }
});