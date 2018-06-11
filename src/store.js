import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        todos:[],
        orgTodos:[],
    },
    mutations:{
        setTodo(state,todo){
            state.todos.push(todo)
            state.orgTodos = state.todos
        },
        remove(state,idx){
            state.todos.splice(idx,1)
            state.orgTodos = state.todos
        },
        update(state,todo){
            state.todos[todo.idx].textContent = todo.textVal
            state.todos[todo.idx].title = todo.inputVal
            state.todos[todo.idx].time = todo.timeVal
            state.todos[todo.idx].date = todo.dateVal
        },
        check(state,idx){
            state.todos[idx].completed = !state.todos[idx].completed
        },
        notDone(state){
            state.todos = state.orgTodos.filter((x)=> {return x.completed === false })
        },
        all(state){
            state.todos = state.orgTodos
        },
        done(state){
            state.todos = state.orgTodos.filter((x)=> {return x.completed === true })
        }
    },
})

export default store;