<template>
    <div class="todo">
        <ul>
            <li style="padding: 30px 20px;">
                <div style="display:flex;margin-bottom:10px">
                    <input type="checkbox">
                    <label class="title"  v-if="!show">{{todo.title}}</label>
                    <input v-else type="text" :value="todo.title" class="title">
                    <i class="far fa-star"></i>
                    <i class="far fa-edit" @click="show = !show"></i>
                    <i class="fas fa-times" @click="remove(idx)"></i>
                </div>

                <div v-if="show">
                    <hr style="border: 2px solid #C8C8C8;margin: 0;">
                    <div class="todoContent">
                        <ul>
                            <li>
                                <div>
                                    <i class="far fa-calendar-alt"></i>
                                    <span>DeadLine</span>
                                </div>
                                <div style="text-align:center">
                                    <input type="date" :value="todo.date">
                                    <input type="time" :value="todo.time">
                                </div>
                            </li>
                            <li>
                                <div>
                                    <i class="far fa-comment-dots"></i>
                                    <span>Comment</span>
                                </div>
                                <div style="text-align:center">
                                    <textarea placeholder="add some comment..." :value="todo.textContent"></textarea>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="TodoFooter">
                        <div class="cancel" @click="show=!show">
                            X Cancle
                        </div>
                        <div class="addtodo" @click="a(todo)">
                            + Save
                        </div>
                    </div>
                </div>
            </li>
            
        </ul>
    </div>
</template>

<style scoped>
    .todo {
        max-width: 600px;
        margin:20px auto 0;
        background-color: #F2F2F2;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .todo li>div {
        font-weight: bold;
        flex:1;
    }

    i {
        font-size: 24px;
        margin-left: 32px;
        cursor: pointer;
    }

    input {
        width: 24px;
        height: 24px;
        margin: 0;
        margin-right: 16px;
    }

    .todo .todoContent {
        padding: 24px 78px 24px 72px;
        font-size: 20px;
    }

    .todo .todoContent i {
        padding-right: 9px;
        margin-bottom: 8px;
        width: 25px;
        height: 25px;
    }

    .todo .todoContent input {
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

    .todo .TodoFooter {
        display: flex;
    }

    ul {
        list-style: none;
        padding:0;
    }

    span {
        font-weight: bold;
    }

    .todo textarea {
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
        background: white;
    }

    .addtodo {
        flex:1;
        text-align: center;
        background-color: #4A90E2;
        color:white;
        font-size: 24px;
        cursor: pointer;
    }

    .title{
        text-align: center;
        flex:1;
        display: block;
        font-size: 24px;
        color: #000000;
        font-weight: bold;
        height: 30px;
        background-color: #F2F2F2;
        border: none;
        outline: none;
    }
</style>

<script>
    import {mapMutations} from 'vuex'
    export default {
        props:['todo','idx'],
        data(){
            return {
                show:false,
            }
        },
        methods:{
            a(x){
                console.log(x)
            },
            ...mapMutations(['remove'])
        }
    }
</script>