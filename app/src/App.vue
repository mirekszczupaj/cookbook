<template>
  <main>
    <HeaderLayout :isAuth="isAuth" @auth="auth" />
    <router-view @user="user" :userId="userId" :isAuth="isAuth" />
    <FooterLayout />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderLayout from './components/global/HeaderLayout.vue'
import FooterLayout from './components/global/FooterLayout.vue'

const isAuth = ref<boolean>(false)
const userId = ref<number>(0)

// TODO: Check lifecycyle
const token = sessionStorage.getItem('token')
if (token) {
  isValidToken(token)
}

function isValidToken (token: string) {
  // TODO: Check validation and set correct userid
  console.log(token)
  isAuth.value = true
  // TODO: Temp user id
  userId.value = 1
}

function user (user: {auth: boolean, id: number}) {
  isAuth.value = user.auth
  userId.value = user.id
}

function auth (value: boolean) {
  isAuth.value = value
}
</script>
