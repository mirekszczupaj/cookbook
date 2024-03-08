<template>
    <nav class="bg-gray-300 text-base p-4">
        <div class="max-w-5xl m-auto flex justify-between">
            <div>
                <router-link
                    :to="{ name: 'recipes' }"
                    class="mr-4"
                >
                    Recipes
                </router-link>
                <router-link
                    :to="{ name: 'my-recipes' }"
                    v-if="isAuth"
                    class="mr-4"
                >
                    My Recipes
                </router-link>
            </div>
            <div v-if="isAuth">
                <span class="cursor-pointer" @click="logout()">Logout</span>
            </div>
            <div v-else>
                <router-link
                    :to="{ name: 'register' }"
                >
                    Registration
                </router-link>
                /
                <router-link
                    :to="{ name: 'login' }"
                >
                    Login
                </router-link>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  isAuth: {
    type: Boolean
  }
})

const emit = defineEmits(['auth'])

function logout () {
  sessionStorage.removeItem('token')
  emit('auth', false)
  router.push({ name: 'recipes' })
}
</script>
