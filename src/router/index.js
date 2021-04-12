import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'Home',
      component: () => import('@/views/Index'),
      children: [
        {
          path: '/index',
          name: 'home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: '/Komunitas',
          name: 'komunitas',
          component: () => import('@/views/category/Komunitas'),
        },
        {
          path: '/Olahraga',
          name: 'Olaharga',
          component: () => import('@/views/category/Olahraga'),
        },
        {
          path: '/Umum',
          name: 'Umum',
          component: () => import('@/views/category/Umum'),
        },
        {
          path: '/news/:slug',
          name: 'Read',
          component: () => import('@/views/read/Index'),
        },
      ],
    },
    {
      name: 'Page',
      path: '/page',
      component: () => import('@/views/Page2'),
    },
    {
      name: 'Preview',
      path: '/preview',
      component: () => import('@/views/Preview'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login'),
    },
  ],
})
