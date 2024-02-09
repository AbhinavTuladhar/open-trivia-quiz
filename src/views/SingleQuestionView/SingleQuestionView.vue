<template>
  <main class="container">
    <div v-if="loading">Loading the questions...</div>
    <div v-else-if="error">Encountered an error while fetching questions.</div>
    <div v-else-if="response?.response_code !== 0">Enough questions could not be found!</div>
    <div v-else-if="!fetchedQuestion">No question could be found</div>
    <div v-else class="successful-block">
      <QuestionCard
        :category="fetchedQuestion?.category"
        :correct_answer="fetchedQuestion?.correct_answer"
        :incorrect_answers="fetchedQuestion?.incorrect_answers"
        :question="fetchedQuestion?.question"
        :index="+id - 1"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { toRef, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuestionsStore } from '@/stores/questions'
import { onBeforeRouteLeave } from 'vue-router'
import QuestionCard from '@/components/QuestionCard.vue'
import type { QuestionData } from '@/types'

const route = useRoute()
const id = toRef(route.params.id as string)

const store = useQuestionsStore()
const { fetchQuestions, getSpecificQuestion } = store
const { error, loading, response } = storeToRefs(store)

const fetchedQuestion = ref<QuestionData | null>(null)

onMounted(async () => {
  if (id.value === '1') {
    await fetchQuestions()
  }
  fetchedQuestion.value = getSpecificQuestion(+id.value)
})

// Route guard - if the user tries to leave the page while playing the quiz.
onBeforeRouteLeave((to) => {
  if (to.name === 'home' || to.name === 'quiz') {
    const confirmLeave = window.confirm('Are you sure you want to go back?')

    return confirmLeave
  }
})

// Fetch the question
</script>

<style scoped lang="scss">
.container {
  grid-column: content;
  padding-block: clamp(3rem, -0.571rem + 9.524vw, 8rem);
}

.successful-block > * + * {
  margin-top: 2rem;
}
</style>
