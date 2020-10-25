// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 导入定义好的全局样式
import "./assets/style.css"

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
