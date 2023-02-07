import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage, name: 'home' },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
