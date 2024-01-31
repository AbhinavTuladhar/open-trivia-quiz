<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="content-grid">
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<style lang="scss"></style>
