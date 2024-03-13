<template>
  <form @submit.prevent="sendForm" class="p-4 m-auto max-w-2xl">
    <h1 class="text-4xl py-6 font-bold">{{ $t("form.registration") }}</h1>
    <div>
      <label for="login">{{ $t("form.login") }}</label>
      <input
          id="login"
          type="text"
          v-model="login"
          class="border w-full p-2 mb-4"
      />
    </div>
            <div>
            <label for="password">{{ $t("form.password") }}</label>
            <input
                id="password"
                type="text"
                v-model="password"
                class="border w-full p-2 mb-4"
            />
            </div>
            <div>
            <label for="passwordConfirmation">{{ $t("form.confirmPassword") }}</label>
            <input
                id="passwordConfirmation"
                type="text"
                v-model="confirmationPassword"
                class="border w-full p-2 mb-4"
            />
            </div>

            <div class="text-xs text-red-600 py-2" v-show="!isPasswordsEqual">
                {{ $t("error.samePassword") }}
              </div>

            <div class="text-xs text-green-600 py-2" v-show="sended">
              {{ $t("status.registered") }}
            </div>
    <button type="submit" class="bg-orange-400 py-2 px-6 rounded text-white">{{ $t("button.register") }}</button>
  </form>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { CREATE_USER_MUTATION } from '../graphql/mutation/create-user'
import { apolloClient } from '../appolloClient'
import { provideApolloClient, useMutation } from '@vue/apollo-composable'

const login = ref('')
const password = ref('')
const confirmationPassword = ref('')
const sended = ref(false)

provideApolloClient(apolloClient)

const isPasswordsEqual = computed(() => {
  return password.value === confirmationPassword.value
})

function sendForm () {
  if (isPasswordsEqual.value) {
    const { mutate } = useMutation(CREATE_USER_MUTATION, () => ({
      variables: {
        input: {
          login: login.value,
          password: password.value
        }
      }
    }))
    mutate()
    sended.value = true
  }
}
</script>
