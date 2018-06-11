<template>
    <div class="header">
        <div class="container">
            <div class="link" v-for="(link,idx) in links" @click="toggle(idx)" :class="{active:idx==active}">
                {{link}}
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
    export default {
        data(){
            return {
                active:0,
                links:['All','Todo','Completed']
            }
        },
        methods:{
            toggle(idx){
                this.active=idx
            }
        },
        /*mounted(){
            document.querySelector('.container').firstChild.classList.add('active')
        },*/
    }
</script>