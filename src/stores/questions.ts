import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { RequestResponse } from '@/types'
import { useOptionsStore } from './options'
import { QuizAPI } from '@/services/quizApi'
import { storeToRefs } from 'pinia'

export const useQuestionsStore = defineStore('questions', () => {
  const loading = ref(false)
  const error = ref<string>()
  const response = ref<RequestResponse>()

  const { quizUrl } = storeToRefs(useOptionsStore())

  const fetchQuestions = async () => {
    loading.value = true
    try {
      const data = await QuizAPI.getQuestions(quizUrl.value)
      response.value = data
    } catch (errorMessage: any) {
      error.value = errorMessage
    } finally {
      loading.value = false
    }
  }

  return { loading, error, response, fetchQuestions }
})