<template>
  <form @submit.prevent="sendForm" class="p-4 m-auto max-w-2xl">
    <h1 class="text-4xl py-6 font-bold">Add new recipe</h1>
    <div>
      <label for="title"> Title </label>
      <input
          id="title"
          type="text"
          v-model="title"
          class="border w-full p-2 mb-4"
      />
    </div>
            <div>
            <label for="image"> Image </label>
            <input
                id="image"
                type="text"
                v-model="image"
                class="border w-full p-2 mb-4"
            />
            </div>

            <div>
            <label for="description"> Description </label>
            <textarea
                id="description"
                type="text"
                v-model="description"
                class="border w-full p-2 mb-4"
            />
            </div>
    <button type="submit" class="bg-orange-400 py-2 px-6 rounded text-white">Save</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { CREATE_RECIPE_MUTATION } from '../graphql/mutation/create-recipe'
import { apolloClient } from '../appolloClient'
import { provideApolloClient, useMutation } from '@vue/apollo-composable'
import { useRouter } from 'vue-router'

const title = ref('')
const image = ref('')
const description = ref('')
const router = useRouter()

provideApolloClient(apolloClient)

// TODO: Temp user id
const temUserId = 1

function sendForm () {
  const { mutate, onDone } = useMutation(CREATE_RECIPE_MUTATION, () => ({
    variables: {
      title: title.value,
      image: image.value,
      description: description.value,
      userId: temUserId
    }
  }))
  mutate()
  onDone(() => {
    // TODO: Update recipes on listings
    router.push({ name: 'recipes' })
  })
}
</script>
