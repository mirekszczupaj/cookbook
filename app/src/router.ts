import { createRouter, createWebHistory } from 'vue-router'

import RecipesListing from './view/RecipesListing.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: RecipesListing, name: 'recipes' }
  ]
})

export default router
