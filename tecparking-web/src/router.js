import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      component: () => import('./layout/Layout'),
      children: [{
        path: '',
        name: 'Home',
        component: () => import('./views/Home')
      }]
    }
  ]
})
