// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import '../static/css/reset.css'// 引入全局reset样式
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'lib-flexible'
// 引入全局自定义组件
import myScrollTop from './components/My-ScrollTop/My-ScrollTop'
import myHeader from './components/My-Header/My-Header'
import Toast from './components/Toast/index'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.use(MintUI)
Vue.prototype.$toast = Toast
Vue.use(Toast)

// 注册全局自定义组件
Vue.component(myScrollTop.name, myScrollTop)
Vue.component(myHeader.name, myHeader)

// 配置请求拦截器，显示loading图标
Axios.interceptors.request.use(function (config) {
  MintUI.Indicator.open('正在加载中...')
  return config
})
// 配置响应拦截器，关闭loading图标
Axios.interceptors.response.use(function (response) {
  MintUI.Indicator.close()
  return response
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
