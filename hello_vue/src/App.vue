<template>
<!--    <div id="app">-->
<!--        <img src="./assets/logo.png">-->
<!--        <HelloWorld/>-->
<!--    </div>-->
    <div id="app">
        <First></First>
        <div>
            这是根组件
            <h3>这是h3</h3>
        </div>
        <Second></Second>
    </div>
</template>

<script>
// 注册组件时需要先将组件导入过来
// import HelloWorld from './components/HelloWorld'
import First from "./components/First";
import Second from "./components/Second";
export default {
    name: 'App',
    // 将罪案注册到根组件中
    components: {
        // HelloWorld
        First: First,
        Second:Second,
    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
