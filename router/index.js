import { createRouter, createWebHistory } from 'vue-router'

import Home from '../src/components/Home.vue'
import About from '../src/components/About.vue'
import Products from '../src/components/Products.vue'
import Screen from '../src/components/Screen.vue'
import Errors from '../src/components/Errors.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
   
  },
  {
    path: '/Screen',
    name: 'Screen',
    component: Screen
   
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
   
  },
  {
    path: '/:pathMatch(.*)*',
    component: Errors
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
