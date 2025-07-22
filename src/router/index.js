import { createRouter, createWebHistory } from 'vue-router'
import ListaPokemon from '@/views/ListaPokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListaPokemon,
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue'),
    },
    {
      path: '/combat',
      name: 'combat',
      component: () => import('../views/CombatView.vue'),
    },
  ],
})

export default router
