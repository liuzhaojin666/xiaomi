import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home/Home'
import Fication from '@/home/Fication'
import Shopping from '@/home/Shopping'
import My from '@/home/My'
import Det from '@/components/Det.vue'
import Address from '@/components/Address'
import Newly from '@/components/Newly'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        flag: true
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        flag: true
      }
    },
    {
      path: '/fication',
      component: Fication,
      meta: {
        flag: true
      }
    },
    {
      path: '/shopping',
      component: Shopping,
      meta: {
        flag: true
      }
    },
    {
      path: '/my',
      component:My,
      meta: {
        flag: true
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        flag: true
      }
    },
    {
      path:'/det',
      component:Det
    },
    {
      path:'/address',
      component:Address
    },
    {
      path:'/newly',
      component:Newly
    }
  ]
})
