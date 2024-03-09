<template>
    <div class="max-w-5xl m-auto p-4 lg:p-0 lg:py-4">
        <img :src="recipe?.image" :alt="recipe?.title" class="h-60 w-full object-cover">
        <h1 class="text-4xl py-6 font-bold">{{ recipe?.title }}</h1>
        <p>{{ recipe?.description }}</p>
        <CommentsList :userId="userId" :recipeId="recipe?.id || 0" :isAuth="isAuth" />
    </div>
</template>
<script setup lang="ts">
import CommentsList from '../components/comments/CommentsList.vue'
import { useQuery } from '@vue/apollo-composable'
import { RECIPE_QUERY } from '../graphql/query/recipe'
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  userId: {
    type: Number,
    required: true
  },
  isAuth: {
    type: Boolean
  }
})

const { result } = useQuery(RECIPE_QUERY, {
  recipeid: parseInt(props.id)
})

const recipe = computed(() => {
  return result?.value?.getRecipeById
})
</script>
