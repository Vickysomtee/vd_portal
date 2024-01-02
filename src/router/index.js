import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../views/Home.vue'
import Login from  '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Seminarians from '../views/Seminarians.vue'
import Seminarian from '../views/seminarian/seminarian.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/seminarians',
      name: 'seminarians',
      component: Seminarians
    },
    {
      path: '/seminarians/:id',
      name: 'seminarian',
      component: Seminarian
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
