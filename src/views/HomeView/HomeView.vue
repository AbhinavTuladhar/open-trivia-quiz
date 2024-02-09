<script setup lang="ts">
import HeroSection from './HeroSection.vue'
import HowToPlay from './HowToPlay.vue'
import Articles from './Articles.vue'
import QuizCategories from './QuizCategories.vue'
import PreparationSteps from './PreparationSteps.vue'
import ContactSection from './ContactSection.vue'
import Winners from './Winners.vue'
</script>

<template>
  <div class="content-grid home-view">
    <HeroSection />
    <HowToPlay />
    <PreparationSteps />
    <QuizCategories />
    <Winners />
    <Articles />
    <ContactSection />
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  grid-column: full-width;
  overflow: hidden;
}
</style>
