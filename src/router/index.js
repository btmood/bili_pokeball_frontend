import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/views/home/index')
    },
    {
      path: '/rank',
      name: 'Rank',
      component: () => import('@/views/rank/index')
    },
    {
      path: '/video',
      name: 'Video',
      component: () => import('@/views/video/index')
    },
    {
      path: '/livebroadcast',
      name: 'LiveBroadcast',
      component: () => import('@/views/liveBroadcast/index')
    }
  ]
})
