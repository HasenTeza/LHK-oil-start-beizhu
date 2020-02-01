import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/home'
import Register from '@/pages/register/rgt'
import House from '@/pages/house_logon_rgt/index'
import Land from '@/pages/land_logon_rgt/index'
import Put from '@/pages/put_rgt/index'
import RegisterLogon from '@/pages/register_logon/rgt'
import Logon from '@/pages/logon/index'
// 引入建好的Vue组件页面   @代表的是在SRC文件中


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //    // 访问根目录的时候，显示的页面
    //   name: 'Logon',
    //   // 这个路由的名字
    //   component: Logon
    // },
    {
      path: '/',
      // 访问根目录的时候，显示的页面
      name: 'Main',
      // 这个路由的名字
      component: Main
    },
    {
      path: '/register',
      // 访问根目录的时候，显示的页面,浏览器打开的是这个网址
      name: 'Register',
      component: Register
    },
    {
      path: '/house_logon_rgt',
      name: 'House',
      component: House
    },
    {
      path: '/land_logon_rgt',
      name: 'Land',
      component: Land
    },
    {
      path: '/put_rgt',
      name: 'Put',
      component: Put
    },
    {
      path: '/register_logon',
      name: 'RegisterLogon',
      component: RegisterLogon
    }
  ]
})
