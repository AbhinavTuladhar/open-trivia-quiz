<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

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
    <RouterView v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <Component :key="route.path" :is="Component" />
      </Transition>
    </RouterView>
    <Footer />
  </div>
</template>

<style lang="scss">
.main-page {
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

/* route transitions */
.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.4s ease-out;
}
.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all 0.4s ease-in;
}
</style>
