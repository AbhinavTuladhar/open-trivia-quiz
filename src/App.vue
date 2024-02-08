<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from './components/Footer.vue'

// Checking if the user prefers dark mode. If yes, then add the dark class to the root tag.
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

onMounted(() => {
  if (prefersDark) {
    document.documentElement.classList.toggle('dark')
  }
})
</script>

<template>
  <div class="content-grid main-page">
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<style lang="scss">
.main-page {
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
