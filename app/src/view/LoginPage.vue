<template>
  <form @submit.prevent="sendForm" class="p-4 m-auto max-w-2xl">
    <h1 class="text-4xl py-6 font-bold">Login</h1>
    <div>
      <label for="urlInput"> Login </label>
      <input
          id="urlInput"
          type="text"
          v-model="login"
          class="border w-full p-2 mb-4"
      />
    </div>
            <div>
            <label for="urlInput"> Password </label>
            <input
                id="urlInput"
                type="text"
                v-model="password"
                class="border w-full p-2 mb-4"
            />
            </div>

            <div class="text-xs text-red-600 py-2" v-show="userNotFound">
                  User not found
            </div>
    <button type="submit" class="bg-orange-400 py-2 px-6 rounded text-white">Login</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { LOGIN_USER_MUTATION } from '../graphql/mutation/login'
import { apolloClient } from '../appolloClient'
import { provideApolloClient, useMutation } from '@vue/apollo-composable'
import { useRouter } from 'vue-router'

const login = ref('')
const password = ref('')
const userNotFound = ref(false)
const router = useRouter()

provideApolloClient(apolloClient)

const emit = defineEmits(['user'])

function sendForm () {
  const { mutate, onDone } = useMutation(LOGIN_USER_MUTATION, () => ({
    variables: {

      input: {
        login: login.value,
        password: password.value
      }
    }
  }))
  mutate()

  onDone((res) => {
    // TODO: It should by save in cookie with httponly flag ?
    sessionStorage.setItem('token', JSON.stringify(res.data.login.access_token))
    console.log(res.data)
    emit('user', {
      auth: true,
      id: res.data.login.user.id
    })
    router.push({ name: 'recipes' })
  })
}
</script>
