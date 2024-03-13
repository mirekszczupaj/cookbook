<template>
  <form @submit.prevent="sendForm" class="p-4 m-auto max-w-2xl">
    <h1 class="text-4xl py-6 font-bold">{{ $t("form.edit") }}</h1>
    <div>
      <label for="title">{{ $t("form.title") }}</label>
      <input
          id="title"
          type="text"
          v-model="title"
          class="border w-full p-2 mb-4"
      />
    </div>
            <div>
            <label for="image">{{ $t("form.image") }}</label>
            <input
                id="image"
                type="text"
                v-model="image"
                class="border w-full p-2 mb-4"
            />
            </div>

            <div>
            <label for="description">{{ $t("form.description") }}</label>
            <textarea
                id="description"
                type="text"
                v-model="description"
                class="border w-full p-2 mb-4"
            />
            </div>
    <button type="submit" class="bg-orange-400 py-2 px-6 rounded text-white">{{ $t("button.edit") }}</button>
  </form>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { UPDATE_RECIPE_MUTATION } from '../graphql/mutation/update-recipe'
import { RECIPE_QUERY } from '../graphql/query/recipe'
import { apolloClient } from '../appolloClient'
import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'

const title = ref('')
const image = ref('')
const description = ref('')

provideApolloClient(apolloClient)

const props = defineProps({
  userId: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})

const { result } = useQuery(RECIPE_QUERY, {
  recipeid: props.id
})

watchEffect(() => {
  if (result.value) {
    title.value = result.value?.getRecipeById?.title
    image.value = result.value?.getRecipeById?.image
    description.value = result.value?.getRecipeById?.description
  }
})

function sendForm () {
  const { mutate } = useMutation(UPDATE_RECIPE_MUTATION, () => ({
    variables: {
      id: props.id,
      title: title.value,
      image: image.value,
      description: description.value,
      userId: props.userId
    }
  }))
  mutate()
}
</script>
