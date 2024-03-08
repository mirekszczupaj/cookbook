import { createRouter, createWebHistory } from 'vue-router'

import RecipesListing from './view/RecipesListing.vue'
import MyRecipes from './view/MyRecipes.vue'
import AddRecipe from './view/AddRecipe.vue'
import RegisterUser from './view/RegisterUser.vue'
import EditRecipe from './view/EditRecipe.vue'
import LoginPage from './view/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/register/',
      component: RegisterUser,
      name: 'register',
      props: true
    },
    {
      path: '/login/',
      component: LoginPage,
      name: 'login',
      props: true
    },
    {
      path: '/add-recipe/',
      component: AddRecipe,
      name: 'add-recipe',
      props: true
    },
    {
      path: '/edit-recipe/:id',
      component: EditRecipe,
      name: 'edit-recipe',
      props: true
    },
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
