<template>
  <main class="main-container">
    <div v-if="loading">Loading the questions...</div>
    <div v-else-if="error">Encountered an error while fetching questions.</div>
    <div v-else-if="response?.response_code !== 0">Enough questions could not be found!</div>
    <section v-else class="question-container">
      <QuestionCard
        v-for="(
          { category, correct_answer, incorrect_answers, question }, index
        ) in response.results"
        :index="index"
        :category="category"
        :correct_answer="correct_answer"
        :incorrect_answers="incorrect_answers"
        :question="question"
        :key="index"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useQuestionsStore } from '@/stores/questions'
import { useProgressStore } from '@/stores/progress'
import QuestionCard from '@/components/QuestionCard.vue'

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

const router = useRouter()

onMounted(() => {
  fetchQuestions()
  // Reset the number of attempts on each visit to the page
  resetCounts()
})

watch(attemptedCount, () => {
  if (attemptedCount.value === 20) {
    setTimeout(() => {
      alert('You have attempted all the questions.')
      router.push('/quiz/result')
    }, 1000)
  }
})
</script>

<style scoped lang="scss">
.main-container {
  grid-column: content;
  padding-block: 2rem;
}

.question-container {
  > * + * {
    margin-top: 1rem;
  }
}
</style>
