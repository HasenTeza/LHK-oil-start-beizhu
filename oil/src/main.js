import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS
Vue.use(iView)
import Devoil from './components/dev-oil.vue';
Vue.component('dev-oil', Devoil);
Vue.config.productionTip = false
import VCharts from 'v-charts'
Vue.use(VCharts)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);




//定义Vue的根实例 ，挂在到ID=APP的元素上
new Vue({
  el: '#app',
  router: router,
  components: {
    App
  },
  // 组件,局部组件APP，组件名称APP，
  // 把局部组件APP赋值给组件名称APP上，
  // 名字一样就直接写APP了
  // 定义局部组件的使用
  template: '<App/>'
  // 把局部组件渲染出来
})
