<template>
    <nav class="bg-gray-300 text-base p-4">
        <div class="max-w-5xl m-auto flex justify-between">
            <div>
                <router-link
                    :to="{ name: 'recipes' }"
                    class="mr-4"
                >
                    {{ $t("navigation.recipes") }}
                </router-link>
                <router-link
                    :to="{ name: 'my-recipes' }"
                    v-if="auth"
                    class="mr-4"
                >
                    {{ $t("navigation.myRecipes") }}
                </router-link>
            </div>
            <div v-if="auth">
                <span class="cursor-pointer" @click="logout()">{{ $t("navigation.logout") }}</span>
            </div>
            <div v-else>
                <router-link
                    :to="{ name: 'register' }"
                >
                    {{ $t("navigation.registration") }}
                </router-link>
                /
                <router-link
                    :to="{ name: 'login' }"
                >
                    {{ $t("navigation.login") }}
                </router-link>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const auth = store.getters.getAuth
const router = useRouter()

function logout () {
  store.dispatch('setAuth', false)
  router.push({ name: 'recipes' })
}
</script>
