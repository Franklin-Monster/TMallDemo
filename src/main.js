import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
//引入阿里字体库样式
import './assets/font/iconfont.css'
//按需引入element-ui组件
import { Input,Button,Carousel } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button)
Vue.use(Input)
Vue.use(Carousel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
