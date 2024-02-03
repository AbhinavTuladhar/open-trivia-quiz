<template>
  <main class="quiz-view-container">
    <Instructions />
    <OptionsContainer />
    <div>
      <RouterLink to="/quiz/play">
        <button role="link" class="quiz-start-btn" @click="handleClick">Start the quiz!</button>
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import OptionsContainer from './OptionsContainer.vue'
import Instructions from './Instructions.vue'
import { useOptionsStore } from '@/stores/options'
import makeUrl from '@/helpers/makeUrl'
import { storeToRefs } from 'pinia'

const optionsStoreValues = useOptionsStore()
const { setUrl } = optionsStoreValues
const { category, difficulty, questionType } = storeToRefs(optionsStoreValues)

// Set the url in Pinia store
const handleClick = () => {
  const url = makeUrl(category.value, difficulty.value, questionType.value)
  setUrl(url)
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
  justify-self: center;
  padding: clamp(0.5rem, 0.357rem + 0.714vw, 1rem);
  background-color: $primary-100;
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
