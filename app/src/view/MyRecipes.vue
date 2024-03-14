<template>
    <div class="max-w-5xl m-auto p-4 lg:p-0 lg:py-4">
        <h1 class="text-4xl py-6 font-bold">{{ $t("other.myRecipes") }}</h1>
        <div class="py-4 grid grid-cols-1 gap-4">
            <RecipeRow v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" />
            <router-link
                :to="{ name: 'add-recipe' }"
                class="py-2 px-6 rounded text-white block text-center cursor-pointer bg-green-700"
            >
              {{ $t("button.addRecipe") }}
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { RECIPES_QUERY } from '../graphql/query/recipes'
import { computed } from 'vue'
import RecipeRow from '../components/recipes/RecipeRow.vue'
import { useStore } from 'vuex'

const store = useStore()
const userId = store.getters.getUserId

const { result } = useQuery(RECIPES_QUERY, {
  userId
})

const recipes = computed(() => {
  return result.value
    ? result.value.getRecipes
    : []
})

</script>
