import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        todos:[]
    },
    mutations:{
        setTodo(state,todo){
            state.todos.push(todo)
        },
        remove(state,idx){
            state.todos.splice(idx,1)
        }
    },
    
})

export default store;