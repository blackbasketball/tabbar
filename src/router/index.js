import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () =>import('../views/Home/home')
    },
    {
      path: '/goods',
      component: () => import('../views/Goods/goods')
    },
    {
      path: '/shopping',
      component: () =>import('../views/Shopping/shop')
    },
    {
      path: '/mine',
      component: () =>import('../views/Mine/mine')
    },
  ]
})
