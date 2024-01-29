<script setup lang="ts">
import HomeView from '@/views/HomeView/HomeView.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="content-grid">
    <NavBar />
    <RouterView />
  </div>
</template>

<style lang="scss"></style>
