<template>
    <div class="border lg:flex">
        <img :src="recipe?.image" alt="{{ recipe?.title }}" class="h-64 object-cover w-full lg:max-w-96">
        <div class="p-4 w-full">
          <h2 class="text-lg font-bold mb-2">{{ recipe?.title }}</h2>
          <p class="text-sm mb-4">{{ recipe?.description }}</p>
        </div>
        <div class="p-4">
          <router-link
            :to="{ name: 'recipe', params: { id: recipe?.id } }"
            class="bg-orange-400 py-2 px-6 rounded text-white block mb-2 text-center"
          >
          Show
          </router-link>
          <router-link
            :to="{ name: 'edit-recipe', params: { id: recipe?.id, userID: recipe?.user } }"
            class="py-2 px-6 rounded text-white bg-cyan-600 block mb-2 text-center"
          >
          Edit
          </router-link>
          <div class="py-2 px-6 rounded text-white block bg-red-500 text-center cursor-pointer" @click="removeRecupeById(recipe?.id)">
            Delete
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { REMOVE_RECIPE_MUTATION } from '../../graphql/mutation/remove-recipe'
import { apolloClient } from '../../appolloClient'
import { provideApolloClient, useMutation } from '@vue/apollo-composable'

provideApolloClient(apolloClient)

defineProps({
  recipe: {
    type: Object
  }
})

function removeRecupeById (id: string) {
  const { mutate } = useMutation(REMOVE_RECIPE_MUTATION, () => ({
    variables: {
      id: parseInt(id)
    }
  }))
  mutate()
}
</script>
