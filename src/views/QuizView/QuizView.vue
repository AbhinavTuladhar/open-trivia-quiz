<template>
  <main class="quiz-view-container">
    <Instructions />
    <OptionsContainer />
    <div>
      <RouterLink to="/quiz/question/1">
        <button role="link" class="coloured-btn coloured-btn--enabled" @click="handleClick">
          Start the quiz!
        </button>
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
</style>
