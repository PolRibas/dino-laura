import { createWebHistory, createRouter } from 'vue-router'

import DinoPage from '../views/DinoPage.vue'
import MarioPage from '../views/MarioPage.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/dino', component: DinoPage },
  { path: '/mario', component: MarioPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router