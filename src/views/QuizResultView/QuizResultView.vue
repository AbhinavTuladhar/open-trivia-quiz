<template>
  <div class="main-container">
    <div v-if="attemptedCount === 0" class="lost-visitor">
      <h2>Oops. You might be lost.</h2>
      <p>
        You're supposed to come to this page after playing the quiz. Seems that you've entered here
        directly!
      </p>
    </div>
    <div v-else class="results-container">
      <h2>
        <span> You got </span>
        <span> {{ correctCount }}</span>
        <span> out of 20 questions correct. </span>
      </h2>
      <p>That's {{ correctPercentage }}%!</p>
      <RouterLink to="/quiz">
        <button class="replay-button">Click here to play again!</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useProgressStore } from '@/stores/progress'

const { attemptedCount, correctCount } = storeToRefs(useProgressStore())

const correctPercentage = computed(() => {
  const percentage = (correctCount.value / attemptedCount.value) * 100
  return percentage.toFixed(2)
})
</script>

<style scoped lang="scss">
.main-container {
  grid-column: content;
  padding-block: 2rem;
}

.lost-visitor {
  > * + * {
    margin-top: 1rem;
  }
}

.results-container {
  text-align: center;

  > * + * {
    margin-block: 1.25rem;
  }
}

.replay-button {
  padding: 1rem 2rem;
  background-color: transparent;
  color: white;
  border: 1px solid silver;
  border-radius: 8px;
  transition-duration: $transition-duration;

  &:hover {
    background-color: white;
    color: $surface-100;
    cursor: pointer;
  }
}
</style>
