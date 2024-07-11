import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 将全局的echarts对象挂载到vue原型上
// 别的组件中使用 this.$echarts 来使用echarts
Vue.prototype.$echarts = window.echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
