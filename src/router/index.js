import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Category from '@/components/Category/Category'
import Shopcart from '@/components/Shopcart/Shopcart'
import User from '@/components/User/User'
import Detail from '@/components/Detail/Detail'
import About from '@/components/About/About'
import Search from '@/components/Search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        HeaderShow: false,
        tabbarShow: true
      }
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      meta: {
        title: '分类',
        isHeaderRightExist: true,
        HeaderShow: true,
        tabbarShow: true
      }
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart,
      meta: {
        title: '购物车',
        isHeaderRightExist: true,
        HeaderShow: true,
        tabbarShow: false
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        HeaderShow: false,
        tabbarShow: true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      meta: {
        HeaderShow: false,
        tabbarShow: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于',
        isHeaderRightExist: false,
        HeaderShow: true,
        tabbarShow: false
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        HeaderShow: false,
        tabbarShow: false
      }
    }
  ]
})
