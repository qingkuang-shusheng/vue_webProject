<template>
    <div>
        <label>
            <input type="text" v-model="msg">
        </label>
        <button @click="add_note">添加留言</button>

        <ul>
            <li v-for="(note,index) in msg_list" :key="index">
            <span>第{{index+1}}条留言：{{ note }}   <button @click="delete_note(index)">删除</button></span>
            </li>
        </ul>
        <span>留言总条数:{{msg_list.length}}</span>
        <button v-if="msg_list.length !== 0" @click="delete_all">删除所有</button>
    </div>
</template>

<script>
export default {
    name: "Home",
    data:function (){
        return{
            msg: "",
            msg_list: localStorage.msgs? JSON.parse(localStorage.msgs):[],
        }
    },
    methods:{
        add_note(){
            let msg = this.msg;
            if (msg) {
                this.msg_list.push(this.msg);
                //将用户发表的留言储存到localstorage
                //储存前将数据进行序列化
                localStorage.msgs = JSON.stringify(this.msg_list);
                this.msg = "";
            }
        },
        delete_all(){
            this.msg_list.splice(0);
        },
        delete_note(index){
            this.msg_list.splice(index,1);
        },
    }
}
</script>

<style scoped>

</style>
