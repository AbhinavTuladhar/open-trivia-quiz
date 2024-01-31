<template>
  <main class="main-container">
    <div v-if="loading">Loading the questions...</div>
    <div v-else-if="error">Encountered an error while fetching questions.</div>
    <div v-else-if="response?.response_code !== 0">Enough questions could not be found!</div>
    <section v-else class="question-container">
      <div v-for="({ question, correct_answer: answer }, index) in response.results" :key="question">
        <p>{{ index + 1 }}. {{ decodeHtml(question) }}</p>
        <p>Answer: {{ answer }}</p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useQuestionsStore } from '@/stores/questions'
import { onMounted } from 'vue'
import decodeHtml from '@/helpers/decodeHtml'

const questionsStore = useQuestionsStore()
const { fetchQuestions } = questionsStore
const { error, loading, response } = storeToRefs(questionsStore)

onMounted(() => {
  fetchQuestions()
})
</script>

<style scoped lang="scss">
.main-container {
  grid-column: content;
}

.question-container {
  > * + * {
    margin-top: 1rem;
  }
}
</style>
