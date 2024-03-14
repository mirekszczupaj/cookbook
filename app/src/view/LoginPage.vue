<template>
  <form @submit.prevent="sendForm" class="p-4 m-auto max-w-2xl">
    <h1 class="text-4xl py-6 font-bold">{{ $t("form.login") }}</h1>
    <div>
      <label for="urlInput">{{ $t("form.login") }}</label>
      <input
          id="urlInput"
          type="text"
          v-model="login"
          class="border w-full p-2 mb-4"
      />
    </div>
            <div>
            <label for="urlInput">{{ $t("form.password") }}</label>
            <input
                id="urlInput"
                type="text"
                v-model="password"
                class="border w-full p-2 mb-4"
            />
            </div>

            <div class="text-xs text-red-600 py-2" v-show="userNotFound">
                {{ $t("error.userNotFound") }}
            </div>
    <button type="submit" class="bg-orange-400 py-2 px-6 rounded text-white">{{ $t("button.login") }}</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { LOGIN_USER_MUTATION } from '../graphql/mutation/login'
import { apolloClient } from '../appolloClient'
import { provideApolloClient, useMutation } from '@vue/apollo-composable'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const login = ref('')
const password = ref('')
const userNotFound = ref(false)
const router = useRouter()

provideApolloClient(apolloClient)

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
    store.dispatch('setUserID', res.data.login.user.id)
    store.dispatch('setAuth', true)
    router.push({ name: 'recipes' })
  })
}
</script>
