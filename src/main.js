import Vue from 'vue'
import App from './App'

//vue的全局资源filters、mixins、directives
import global from './global'
Vue.use(global)

//通用组件
import components from './components'
Vue.use(components)

//第三方插件库
import lib from './lib'
Vue.use(lib)

//移动端300毫秒延迟处理
import FastClick from 'fastclick'
FastClick.attach(document.body)

//自定义css
import './assets/css/app.css'

//全局接口
import api from './api'
Vue.use(api)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:global.router,
  components: { App },
  template: '<App/>'
})
