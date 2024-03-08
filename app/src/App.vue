<template>
  <main>
    <HeaderLayout />
    <router-view />
    <FooterLayout />
  </main>
</template>

<script setup lang="ts">
import HeaderLayout from './components/global/HeaderLayout.vue'
import FooterLayout from './components/global/FooterLayout.vue'
</script>
