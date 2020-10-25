<template>
    <div id="app">

        <h3>这是主页</h3>
        <router-link to="/home">访问Home组件</router-link>
        <router-link to="/user">访问User组件</router-link>
        <br>
<!--        组件对应内容的显示地址-->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
/*#app {*/
/*    font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*    -webkit-font-smoothing: antialiased;*/
/*    -moz-osx-font-smoothing: grayscale;*/
/*    text-align: center;*/
/*    color: #2c3e50;*/
/*    margin-top: 60px;*/
/*}*/
</style>
