<template>
    <div class="wrap">
        <input type="text" class="add" placeholder="＋ Add Task" v-if="showTodo"  @click="showTodo = !showTodo">
        <div class="newTodoBox" v-else>
            <div class="newTodoHeader">
                <input type="checkbox" class="check">
                <div style="flex:1">
                    <input type="text" placeholder="Type Something Here…" class="headertodo" v-model="title">
                </div>
                <i class="far fa-star"></i>
                <i class="far fa-edit"></i>
            </div>
            <hr style="border: 2px solid #C8C8C8;margin: 0;">
            <div class="todoContent">
                <ul>
                    <li>
                        <div>
                            <i class="far fa-calendar-alt"></i>
                            <span>DeadLine</span>
                        </div>
                        <div style="text-align:center">
                            <input type="date" v-model="date">
                            <input type="time" v-model="time">
                        </div>
                    </li>
                    <li>
                        <div>
                            <i class="far fa-comment-dots"></i>
                            <span>Comment</span>
                        </div>
                        <div style="text-align:center">
                            <textarea placeholder="add some comment..." v-model="textContent"></textarea>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="TodoFooter">
                <div class="cancel" @click="showTodo=!showTodo">
                    X Cancle
                </div>
                <div class="addtodo" @click="setTodo({title,date,time,textContent});clear()">
                    + Add Task
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrap {
        max-width: 600px;
        margin:0 auto;
    }

    .add {
        outline: none;
        width:100%;
        border-radius: 5px;
        font-size: 16px;
        margin-top:20px;
        border: 1px solid #c8c8c8;
        height: 40px;
    }

    .newTodoBox {
        background-color: #F2F2F2;
        box-shadow: 0 4px 4px 0 #C8C8C8;
        border-radius: 5px;
        margin-top: 20px ;
        
    }

    .newTodoHeader {
        width: 100%;
        border-radius: 5px;
        display: flex;
        padding: 30px 20px;
    }

    .headertodo {
        display: block;
        font-size: 24px;
        color: #000000;
        font-weight: bold;
        width: 100%;
        height: 30px;
        background-color: #F2F2F2;
        border: none;
        outline: none;
    }

    .check {
        width:24px;
        height:24px;
    }

    i {
        font-size: 24px;
        margin-left: 32px;
        cursor: pointer;
    }

    .todoContent {
        padding: 24px 78px 24px 72px;
        font-size: 20px;
    }

    .todoContent i {
        padding-right: 9px;
        margin-bottom: 8px;
        width: 25px;
        height: 25px;
    }

    .todoContent input {
        width: 162px;
        height: 35px;
        background-color: #fff;
        border-radius: 2px;
        border: none;
        margin-bottom: 25px;
        padding-left: 16px;
        font-size: 16px;
        outline: none;
    }

    .TodoFooter {
        display: flex;
    }

    ul {
        list-style: none;
        padding:0;
    }

    span {
        font-weight: bold;
    }

    textarea {
        width: 400px;
        height: 120px;
        background-color: #fff;
        border-radius: 2px;
        border: none;
        outline: none;
        resize: none;
    }

    .cancel {
        flex:1;
        text-align: center;
        font-size: 24px;
        color:red;
        cursor: pointer;
        background-color:white;
    }

    .addtodo {
        flex:1;
        text-align: center;
        background-color: #4A90E2;
        color:white;
        font-size: 24px;
        cursor: pointer;
    }
</style>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        data(){
            return {
                showTodo:true,
                time:'',
                date:'',
                textContent:'',
                title:'',
            }
        },
        methods:{
            ...mapMutations(['setTodo']),
            clear(){
                this.time = '';
                this.date = '';
                this.textContent = '';
                this.title = '';
                this.showTodo = !this.showTodo;
            }
        }
    }
</script>