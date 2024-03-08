<template>
  <div class="max-w-5xl m-auto p-4 lg:p-0 lg:py-4">
    <h1 class="text-4xl py-6 font-bold">Recipes</h1>
    <div class="py-4 lg:grid lg:grid-cols-3 lg:gap-4">
        <RecipeCard v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { RECIPES_QUERY } from '../graphql/query/recipes'
import { computed } from 'vue'
import RecipeCard from '../components/recipes/RecipeCard.vue'

const { result } = useQuery(RECIPES_QUERY)

const recipes = computed(() => {
  return result.value
    ? result.value.getRecipes
    : []
})

</script>
