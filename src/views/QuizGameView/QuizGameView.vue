<template>
  <main class="main-container">
    <div v-if="loading">Loading the questions...</div>
    <div v-else-if="error">Encountered an error while fetching questions.</div>
    <div v-else-if="response?.response_code !== 0">Enough questions could not be found!</div>
    <section v-else class="page-container">
      <QuizInfo />
      <QuestionsContainer :question-data="response.results" />
      <div class="button-row">
        <RouterLink to="/quiz/result">
          <button
            class="result-button"
            :disabled="isButtonDisabled"
            :class="{
              'result-button--enabled': !isButtonDisabled,
              'result-button--disabled': isButtonDisabled
            }"
          >
            See result
          </button>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, watch, computed } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useQuestionsStore } from '@/stores/questions'
import { useProgressStore } from '@/stores/progress'
import QuestionsContainer from './QuestionsContainer.vue'
import QuizInfo from './QuizInfo.vue'

// Warn the user if they try to leave the page.
onBeforeRouteLeave((to) => {
  if (to.name === 'home' || to.name === 'quiz') {
    const confirmLeave = window.confirm('Are you sure you want to go back?')

    return confirmLeave
  }
})

const questionsStore = useQuestionsStore()
const { fetchQuestions } = questionsStore
const { error, loading, response } = storeToRefs(questionsStore)

const progress = useProgressStore()
const { resetCounts } = progress
const { attemptedCount } = storeToRefs(progress)

const isButtonDisabled = computed(() => attemptedCount.value !== 20)

onMounted(() => {
  fetchQuestions()
  // Reset the number of attempts on each visit to the page
  resetCounts()
})

watch(attemptedCount, () => {
  if (attemptedCount.value === 20) {
    setTimeout(() => {
      alert('You have attempted all the questions.')
    }, 500)
  }
})
</script>

<style scoped lang="scss">
.main-container {
  grid-column: content;
  padding-block: 2rem;
}

.page-container {
  > * + * {
    margin-top: 1rem;
  }
}

.result-button {
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 8px;
  transition-duration: $transition-duration;

  &--enabled {
    background-color: $primary-200;
    &:hover {
      cursor: pointer;
      background-color: seagreen;
    }
  }

  &--disabled {
    background-color: gray;
  }
}
</style>
