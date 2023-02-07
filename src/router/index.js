import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage, name: 'home' },
  { path: '/home/:id', component: HomePage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
