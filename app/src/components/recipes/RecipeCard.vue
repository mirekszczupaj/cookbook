<template>
    <div class="border mb-4 lg:mb-0">
        <img :src="recipe?.image" alt="{{ recipe.title }}" class="h-60 w-full object-cover">
        <div class="p-4">
          <h2 class="text-lg font-bold mb-2">{{ recipe?.title }}</h2>
          <p class="text-sm mb-4">{{ recipe?.description }}</p>
          <router-link
            :to="{ name: 'recipe', params: { id: recipe?.id } }"
            class="bg-orange-400 py-2 px-6 rounded text-white mt-2 inline-block"
          >
          {{ $t("button.show") }}
          </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  recipe: {
    type: Object
  }
})
</script>
