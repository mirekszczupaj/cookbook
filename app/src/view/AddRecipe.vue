<template>
  <form @submit.prevent="sendForm" class="p-4 m-auto max-w-2xl">
    <h1 class="text-4xl py-6 font-bold">{{ $t("form.addRecipe") }}</h1>
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
    <button type="submit" class="bg-orange-400 py-2 px-6 rounded text-white">{{ $t("button.save") }}</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { CREATE_RECIPE_MUTATION } from '../graphql/mutation/create-recipe'
import { apolloClient } from '../appolloClient'
import { provideApolloClient, useMutation } from '@vue/apollo-composable'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const title = ref('')
const image = ref('')
const description = ref('')
const router = useRouter()

provideApolloClient(apolloClient)

const userId = store.getters.getUserId

function sendForm () {
  const { mutate, onDone } = useMutation(CREATE_RECIPE_MUTATION, () => ({
    variables: {
      title: title.value,
      image: image.value,
      description: description.value,
      userId
    },
    update (cache, { data }) {
      const cacheId = `${data.createRecipe.__typename}:${data.createRecipe.id}`

      cache.modify({
        fields: {
          getRecipes (existingFieldData, { toReference }) {
            return [...existingFieldData, toReference(cacheId)]
          }
        }
      })
    }
  }))
  mutate()
  onDone(() => {
    router.push({ name: 'recipes' })
  })
}
</script>
