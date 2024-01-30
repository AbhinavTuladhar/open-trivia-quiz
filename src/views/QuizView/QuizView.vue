<template>
  <main class="quiz-view-container">
    <OptionsContainer />
  </main>
</template>

<script setup lang="ts">
import OptionsContainer from './OptionsContainer.vue'
</script>

<style scoped lang="scss">
.quiz-view-container {
  grid-column: content;
}
</style>
