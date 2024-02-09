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
      <div class="button-container">
        <AdjacentQuestionButton :direction="'previous'">
          {{ `<- Previous` }}
        </AdjacentQuestionButton>
        <AdjacentQuestionButton :direction="'next'">
          {{ `Next ->` }}
        </AdjacentQuestionButton>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { toRef, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuestionsStore } from '@/stores/questions'
import QuestionCard from '@/components/QuestionCard.vue'
import AdjacentQuestionButton from './AdjacentQuestionButton.vue'
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

// Fetch the question
</script>

<style scoped lang="scss">
.container {
  grid-column: content;
  padding-block: 2rem;
}

.successful-block > * + * {
  margin-top: 2rem;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
