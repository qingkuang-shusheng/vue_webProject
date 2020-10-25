<template>

    <div>这是User组件
    <h3>用户列表页</h3>
    <table border="3">
        <tr>
            <td>ID</td>
            <td>姓名</td>
            <td>生日</td>
            <td>个人信息</td>
            <td>操作</td>
        </tr>
        <tr v-for="(user,index) in users" :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.username}}</td>
            <td>{{user.bir}}</td>
            <td>{{user.content}}</td>
<!--            <td>删除 | <router-link to="/detail">查看用户详情</router-link></td>-->
            <td><a href="javascript:;" @click="delete_user(index)">删除</a> | <router-link :to="`/detail/${user.id}/${user.username}/${user.bir}/${user.content}`">查看用户详情</router-link></td>
        </tr>
    </table>
        <br>
        <button v-show="users.length !== 0" @click="delete_all">删除所有</button>
        <hr>
        用户名：<label>
            <input type="text" v-model="username">
        </label><br>
        生日：<label>
            <input type="text" v-model="bir">
        </label><br>
        个人信息：<label>
            <input type="text" v-model="content">
        </label><br>
        <button @click="addUser">添加用户</button>
    </div>

</template>

<script>
// localStorage.clear()
export default {
    name: "User",
    data(){
        return {
            users: localStorage.users? JSON.parse(localStorage.users):[
                {"id":1,username:"小黑",bir:"2012-12-9",content:"我是小黑"},
                {"id":2,username:"小白",bir:"2012-12-9",content:"我是小白"},
                {"id":3,username:"小包",bir:"2012-12-9",content:"我是小包"},
                {"id":4,username:"小李",bir:"2012-12-9",content:"我是小李"},
            ],
            username:"",
            bir: "",
            content:"",
        }
    },
    methods:{
        addUser(){
            if(this.username&&this.bir&&this.content){
                this.users.push({"id":this.users.length+1,"username": this.username,"bir": this.bir,"content": this.content});
                localStorage.users = JSON.stringify(this.users);
                console.log(localStorage.users);
                this.username="";
                this.bir = "";
                this.content = "";
            }
        },
        delete_user(index){
            this.users.splice(index,1);
        },
        delete_all(){
            console.log(this.users.splice(0));
        }
    }
}
</script>

<style scoped>

</style>
