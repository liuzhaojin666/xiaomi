import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'
import Fication from '@/home/Fication'
import Shopping from '@/home/Shopping'
import My from '@/home/My'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/fication',
      component: Fication
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/my',
      component:My
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
