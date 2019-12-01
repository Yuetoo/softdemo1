import Vue from 'vue'
import Router from 'vue-router'
//使用懒加载的方式来引入,只有路由被访问的时候才加载
import register from "../view/register/register";
import hello from '../view/demo/HelloWorld'
import  home from '../view/index/home';
import  login from '../view/login/Login';
import nom from "../components/demo/nom";
import TopNav from '../components/nav/topNav.vue'
import LeftNav from '../components/nav/leftNav.vue'
import index from "../view/index/index";
import  NotFound from "../components/erro/404"
import upload  from "../components/demo/upload";
import test from "../view/demo/test";
import enterpriseList from "../view/enterprise/index"
import enterpriseAdd from '../view/enterprise/add.vue'
import enterpriseDetail from '../view/enterprise/detail.vue'
import enterpriseValidate from '../view/enterprise/validate.vue'
import uploaddemo from "../components/demo/uploaddemo";
import updemo from "../components/demo/updemo";
import test1 from "../view/demo/test1";
import correct from "../view/correct/correct"
import user  from "../view/user/user";
import search from "../view/search/search";
import detail from "../view/detail/detail";
import message from "../view/user/message";
import publish from "../view/publish/publish";
import userNav from "../components/nav/userNav";
import bought from "../view/user/bought";
import forget from "../view/forget/forget";



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
        {
          path: '/correct',
          name:'correct',
          components: {
            default:correct,
            top: TopNav,
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow:true
        },
      ]
    },
    {
      path:'/user',
      type: 'home',
      name :'user',
      redirect: '/user/userindex',
      component: user,
       menuShow:true,
      children: [
        {
          path: '/user/message',
          name: '用户',
          components: {
            default: message,
            top: TopNav,
            aside:userNav,
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        }, {
          path: '/user/bought',
          name: '用户',
          components: {
            default: bought,
            top: TopNav,
            aside:userNav,
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        },

      ]
    },
    {
      path:'/publish',
      type: 'home',
      name :'publish',
      redirect: '/publish',
      component: home,
      menuShow:true,
      children: [
        {
          path: '/publish',
          name: '发布',
          components: {
            default: publish,
            top: TopNav,
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        },
      ]
    }, {
      path:'/detail',
      type: 'home',
      name :'detail',
      redirect: '/detail',
      component: home,
      menuShow:true,
      children: [
        {
          path: '/detail',
          name: '发布',
          components: {
            default: detail,
            top: TopNav,
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        },
      ]
    },
    {
      path:'/search',
      type: 'home',
      name :'search',
      redirect: '/search',
      component: home,
      menuShow:true,
      children: [
        {
          path: '/search',
          name: '搜索',
          components: {
            default: search,
            top: TopNav,
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        },
      ]
    },
    {
      path: '/enterpriseManager',
      type: 'home',
      name: 'enterprise',
      component: home,
      redirect: '/enterprise/list',
      menuShow: true,
      children: [
        {
          path: '/enterprise/list',
          name: '企业信息',
          components: {
            default: enterpriseList,
            top: TopNav,
          },
          leaf: true,
          iconCls: 'el-icon-setting',
          menuShow: true
        },
        {
          path: '/enterprise/detail',
          name: '企业详情',
          components: {
            default: enterpriseDetail,
            top: TopNav,
          },
          leaf: true,
          iconCls: 'el-icon-setting',
          menuShow: false
        },
        {
          path: '/enterprise/add',
          name: '添加企业',
          components: {
            default: enterpriseAdd,
            top: TopNav,
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        },
        {
          path: '/enterprise/validate',
          name: '企业认证',
          components: {
            default:  enterpriseValidate,
            top: TopNav,
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component:register,
    },
    {
      path:'/nom',
      name:'nom',
      component:nom,
    },
    {
      path:'/test',
      name:'test',
      component:test,
    }, {
      path:'/test1',
      name:'test1',
      component:test1,
    },
    {
      path:'/upload',
      name:'upload',
      component:upload,
    },
    {
      path:'/uploaddemo',
      name:'uploaddemo',
      component:uploaddemo,
    },
    {
      path:'/updemo',
      name:'updemo',
      component:updemo,
    },

    {
      path:'/detail',
      name:'detail',
      component:detail,
    },
    {
      path:'/forget',
      name:'forget',
      component:forget,
    },
  ]
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');

    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});


export default router
