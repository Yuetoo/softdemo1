import Vue from 'vue'
import Router from 'vue-router'
//使用懒加载的方式来引入,只有路由被访问的时候才加载

import hello from '../view/demo/HelloWorld'
import  home from '../view/index/home';
import  login from '../view/login/Login';
import nom from "../components/demo/nom";
import TopNav from '../components/nav/topNav.vue'
import LeftNav from '../components/nav/leftNav.vue'
import index from "../view/index/index";
import  NotFound from "../components/erro/404"
import upload  from "../components/demo/upload";

//lyq
import publish from "../view/publish/publish.vue"


const loginpage = resolve => require(['../view/login/Login'],resolve)

Vue.use(Router)
let router =  new Router({
   routes: [
     {
       path:'/login',
       name :'login',
       component:loginpage
     },
    {
      path: '*',
      component: NotFound
    },
    {
      path:'/',
      type:'home',
      name :'home',
      redirect: '/index',
      component: home,
      children: [
        {
          path: '/index',
          name: '首页',
          components: {
            default: index,
            top: TopNav,
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        },

      ]
    },

    {
      path: '/login',
      name: 'login',
      component:login,
    },
    {
      path:'/nom',
      name:'nom',
      component:nom,
    },
    {
      path:'/publish',
      name:'publish',
      component:publish
    }
  ]
});
//对每次访问之前都要先看是否已经登录



export default router
