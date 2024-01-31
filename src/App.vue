<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from './components/Footer.vue'
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
