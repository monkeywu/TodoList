<template>
    <div class="header">
        <div class="container">
            <div class="link active" @click="active($event);all()">
                All
            </div>

            <div class="link" @click="active($event);notDone()">
                Todo
            </div>

            <div class="link" @click="active($event);done()">
                Completed
            </div>
        </div>
    </div>
</template>

<style scoped>
    .header {
        background-color: #4A90E2;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .link {
        color:#00408B;
        transition:color 0.5s;
        font-size: 24px;
        cursor: pointer;
        padding:15px;
        flex:1;
        text-align: center;
    }

    .link:hover {
        color:white;
    }
    
    .active {
        border-bottom:5px solid #00408B;
        color:white;
    }
</style>

<script>
    import {mapMutations} from 'vuex'
    export default {
        methods:{
            ...mapMutations(['notDone','all','done']),
            active(evt){
                $(evt.target).siblings().removeClass('active')
                $(evt.target).addClass('active')
            }
        },
    }
</script>