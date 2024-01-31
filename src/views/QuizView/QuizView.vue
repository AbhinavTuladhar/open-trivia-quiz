<template>
  <main class="quiz-view-container">
    <Instructions />
    <OptionsContainer />
    <button class="quiz-start-btn" @click="handleClick">Start the quiz!</button>
  </main>
</template>

<script setup lang="ts">
import OptionsContainer from './OptionsContainer.vue'
import Instructions from './Instructions.vue'
import { useOptionsStore } from '@/stores/options'
import makeUrl from '@/helpers/makeUrl'
import { storeToRefs } from 'pinia'

const { category, difficulty, questionType } = storeToRefs(useOptionsStore())

const handleClick = () => {
  const url = makeUrl(category.value, difficulty.value, questionType.value)
  console.log(url)
}
</script>

<style scoped lang="scss">
.quiz-view-container {
  grid-column: content;
  padding-block: 2rem;

  > * + * {
    margin-top: 2rem;
  }
}

.quiz-start-btn {
  width: 100%;
  padding-block: 1rem;
  background-color: $primary-green;
  color: white;
  border: 1px solid transparent;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 12px;
  transition-duration: $transition-duration;

  &:hover {
    background-color: seagreen;
    cursor: pointer;
  }
}
</style>
