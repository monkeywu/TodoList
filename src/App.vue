<template>
  <div style="background-color:#e1e1e1;min-height:100vh;">
    <Header></Header>
    <NewTodo></NewTodo>  
    <Todo v-for="(todo,idx) in todos" :idx="idx" :todo="todo"></Todo>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import NewTodo from './NewTodo.vue'
  import Todo from './Todo.vue'
  import {mapState} from 'vuex'
  export default {
    components:{
      Header,
      NewTodo,
      Todo
    },
    computed:{
      ...mapState(['todos'])
    }
  }
</script>

<style>
  * {
    margin:0;
    box-sizing: border-box;
  }
</style>
