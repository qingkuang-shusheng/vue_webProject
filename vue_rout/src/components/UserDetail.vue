<template>
    <div>这是用户详情页
        <table border="2">
        <tr>
            <td>ID</td>
            <td>姓名</td>
            <td>生日</td>
            <td>个人信息</td>
        </tr>
        <tr>
            <td >{{ id }}</td>
            <td>{{username}}</td>
            <td>{{bir}}</td>
            <td>{{content}}</td>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "UserDetail",
    data(){
        return {
            id:'',
            username:'',
            bir:'',
            content:'',
        }
    },
    created() {
        let id = parseInt(this.$route.params.id);
        if(localStorage.users){
            let users = JSON.parse(localStorage.users)
            for(let i=0;i<users.length;i++){
                if(users[i].id===id){
                    this.id = users[i].id;
                    this.username = users[i].username;
                    this.bir = users[i].bir;
                    this.content = users[i].content;
                }
            }
        }else {
            let users = [
                {"id":1,username:"小黑",bir:"2012-12-9",content:"我是小黑"},
                {"id":2,username:"小白",bir:"2012-12-9",content:"我是小白"},
                {"id":3,username:"小包",bir:"2012-12-9",content:"我是小包"},
                {"id":4,username:"小李",bir:"2012-12-9",content:"我是小李"},
            ]
            for (let i=0;i<users.length;i++){
                if(users[i].id===id){
                    this.id = users[i].id;
                    this.username = users[i].username;
                    this.bir = users[i].bir;
                    this.content = users[i].content;
                }
            }
        }
    },
}
</script>

<style scoped>

</style>
