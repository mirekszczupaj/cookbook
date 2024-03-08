<template>
    <div class="border lg:flex">
        <img :src="recipe?.image" alt="{{ recipe?.title }}" class="h-64 object-cover w-full lg:max-w-96">
        <div class="p-4 w-full">
          <h2 class="text-lg font-bold mb-2">{{ recipe?.title }}</h2>
          <p class="text-sm mb-4">{{ recipe?.description }}</p>
        </div>
        <div class="p-4">
          <p
            class="bg-orange-400 py-2 px-6 rounded text-white block mb-2 text-center"
          >
          Show
        </p>
          <p
            class="py-2 px-6 rounded text-white bg-cyan-600 block mb-2 text-center"
          >
          Edit
          </p>
          <div class="py-2 px-6 rounded text-white block bg-red-500 text-center cursor-pointer" @click="removeRecupeById()">
            Delete
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import { REMOVE_RECIPE_MUTATION } from '../../graphql/mutation/remove-recipe'

const props = defineProps({
  recipe: {
    type: Object
  }
})

function removeRecupeById () {
  const { mutate } = useMutation(REMOVE_RECIPE_MUTATION, () => ({
    variables: {
      id: parseInt(props.recipe?.id)
    }
  }))
  mutate()
}
</script>
