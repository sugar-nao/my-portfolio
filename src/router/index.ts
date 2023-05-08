import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/HomePage.vue'
import About from '@/views/About/AboutPage.vue'
import Works from '@/views/Works/WorksPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    }
  ]
})

export default router
