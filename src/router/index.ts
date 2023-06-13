// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/PokemonGame1',
    component: () => import('@/views/PokemonGame1.vue'),
  },
  {
    path: '/PokemonGame2',
    component: () => import('@/views/PokemonGame2.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
