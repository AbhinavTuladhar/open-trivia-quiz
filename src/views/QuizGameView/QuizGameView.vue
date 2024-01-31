<template>
  <div>
    Playing right now.
    <span> The response code is: {{ response?.response_code }}</span>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useQuestionsStore } from '@/stores/questions'
import { onMounted } from 'vue'

const questionsStore = useQuestionsStore()
const { fetchQuestions } = questionsStore
const { error, loading, response } = storeToRefs(questionsStore)

onMounted(() => {
  fetchQuestions()
})
</script>

<style scoped lang="scss">
div {
  grid-column: content;
}
</style>
