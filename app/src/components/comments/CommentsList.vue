<template>
    <div v-if="isAuth">
        <h2 class="text-2xl font-bold my-4">Comments</h2>
        <div v-if="data.value?.getComments?.length &&  recipeId">
            <div v-for="(comment, index) in data.value.getComments" :key="index" class="border-b mb-4">
                <span class="text-xs text-gray-500">{{comment.dateTime}}</span>
                <p class="my-4">{{comment.description}}</p>
            </div>
        </div>
        <div v-else>
          Comments not found!
        </div>
        <form @submit.prevent="sendForm" class="py-4 m-auto my-4">
                <div>
                <label for="description" class="font-bold text-sm"> Description </label>
                <textarea
                    id="description"
                    type="text"
                    v-model="description"
                    class="border w-full"
                />
                </div>
                <button type="submit" class="bg-orange-400 py-2 px-6 rounded text-white my-4">Add new comment</button>
        </form>
    </div>
</template>
<script setup lang="ts">
import { ref, watchEffect, reactive } from 'vue'
import { CREATE_COMMENT_MUTATION } from '../../graphql/mutation/create-comment'
import { COMMENTS_QUERY } from '../../graphql/query/comments'
import { apolloClient } from '../../appolloClient'
import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'

provideApolloClient(apolloClient)

const description = ref<string>('')
const data = reactive<{ getComments: object[] }>({ getComments: [] })

const props = defineProps({
  userId: {
    type: Number,
    required: true
  },
  recipeId: {
    type: Number,
    required: true
  },
  isAuth: {
    type: Boolean
  }
})

watchEffect(() => {
  if (props.recipeId) {
    const { result } = useQuery(COMMENTS_QUERY, {
      recipeId: props.recipeId
    })

    data.value = result
  }
})

function sendForm () {
  const { mutate } = useMutation(CREATE_COMMENT_MUTATION, () => ({
    variables: {
      description: description.value,
      dateTime: new Date(),
      recipeId: props.recipeId,
      userId: props.userId
    }
  }))
  mutate()
}
</script>
