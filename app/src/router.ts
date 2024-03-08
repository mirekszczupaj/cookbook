import { createRouter, createWebHistory } from 'vue-router'

import RecipesListing from './view/RecipesListing.vue'
import MyRecipes from './view/MyRecipes.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/my-recipes/',
      component: MyRecipes,
      name: 'my-recipes',
      props: true
    },
    { path: '/', component: RecipesListing, name: 'recipes' }
  ]
})

export default router
